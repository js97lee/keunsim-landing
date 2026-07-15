import { useMemo, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import MobilePageShell from "../components/layout/MobilePageShell";
import { getContentBySlug } from "../data/content";
import { useAuthPreview } from "../hooks/useAuthPreview";
import { requestPayment } from "../services/paymentGateway";

function toInputDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getEndDate(startDate) {
  const endDate = new Date(`${startDate}T00:00:00`);
  endDate.setFullYear(endDate.getFullYear() + 1);
  endDate.setDate(endDate.getDate() - 1);
  return toInputDate(endDate);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(new Date(`${date}T00:00:00`));
}

function PaymentMethodIcon({ method }) {
  if (method === "kakao-pay") {
    return (
      <span className="payment-method-icon payment-method-icon--kakao" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 4C6.9 4 2.8 7.2 2.8 11.2c0 2.6 1.8 4.9 4.5 6.2L6.3 21l3.7-2c.7.1 1.3.2 2 .2 5.1 0 9.2-3.2 9.2-8S17.1 4 12 4Z" />
        </svg>
        <b>pay</b>
      </span>
    );
  }

  return (
    <span className="payment-method-icon payment-method-icon--card" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 15h4" />
      </svg>
    </span>
  );
}

export default function PurchasePage() {
  const { slug } = useParams();
  const location = useLocation();
  const isAuthenticated = useAuthPreview();
  const content = getContentBySlug(slug);
  const [startDate, setStartDate] = useState(toInputDate(new Date()));
  const [paymentResult, setPaymentResult] = useState(null);
  const [isPaying, setIsPaying] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const endDate = useMemo(() => getEndDate(startDate), [startDate]);

  if (!content) return <Navigate to="/" replace />;
  if (!isAuthenticated) {
    return <Navigate to={`/mypage?returnTo=${encodeURIComponent(location.pathname)}`} replace />;
  }

  const submitPurchase = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsPaying(true);
    setPaymentError("");

    try {
      const result = await requestPayment({
        orderId: window.crypto.randomUUID(),
        product: {
          slug: content.slug,
          name: content.title,
          amount: Number(content.totalPrice.replace(/[^0-9]/g, "")),
        },
        paymentMethod: formData.get("payment-method"),
        delivery: {
          period: formData.get("delivery-period"),
          hour: formData.get("delivery-hour"),
          minute: formData.get("delivery-minute"),
          kakaoId: formData.get("kakao-id"),
        },
        subscription: {
          startDate,
          endDate,
        },
      });

      if (result?.status === "failed") {
        throw new Error(result.message || "결제를 시작하지 못했습니다.");
      }

      setPaymentResult(result);
    } catch (error) {
      setPaymentError(error.message || "결제 중 오류가 발생했습니다.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <MobilePageShell mainClassName="purchase-page">
      <header className="purchase-header">
        <span>구독 신청</span>
        <h1>{content.title}</h1>
        <p>발송 옵션과 결제 방법을 확인해 주세요.</p>
      </header>

      {paymentResult ? (
        <section className="purchase-complete">
          <span aria-hidden="true">✓</span>
          <h2>구독 신청 정보가 준비됐어요</h2>
          <p>
            {paymentResult.status === "preview"
              ? "현재는 결제 UI 미리보기 단계이며 실제 결제는 진행되지 않았습니다."
              : "결제가 완료되었습니다. 구독 정보를 확인해 주세요."}
          </p>
        </section>
      ) : (
        <form className="purchase-form" onSubmit={submitPurchase}>
          <section className="purchase-section">
            <h2>발송 시간</h2>
            <div className="delivery-time-selects" aria-label="콘텐츠를 받을 시간">
              <label className="purchase-select">
                오전·오후
                <select name="delivery-period" defaultValue="AM">
                  <option value="AM">오전</option>
                  <option value="PM">오후</option>
                </select>
              </label>
              <label className="purchase-select">
                시
                <select name="delivery-hour" defaultValue="8">
                  {Array.from({ length: 12 }, (_, index) => index + 1).map((hour) => (
                    <option value={hour} key={hour}>
                      {hour}시
                    </option>
                  ))}
                </select>
              </label>
              <label className="purchase-select">
                분
                <select name="delivery-minute" defaultValue="00">
                  {Array.from({ length: 60 }, (_, index) => String(index).padStart(2, "0")).map((minute) => (
                    <option value={minute} key={minute}>
                      {minute}분
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="purchase-text-input">
              카카오톡 아이디 <small>선택</small>
              <input name="kakao-id" type="text" placeholder="카카오톡 아이디를 입력해 주세요" autoComplete="username" />
            </label>
            <p>선택한 시간에 카카오톡으로 매일 콘텐츠를 보내드려요.</p>
          </section>

          <section className="purchase-section">
            <h2>구독 기간</h2>
            <label className="purchase-date-input">
              시작일
              <input type="date" value={startDate} min={toInputDate(new Date())} onChange={(event) => setStartDate(event.target.value)} />
            </label>
            <dl className="purchase-period">
              <div>
                <dt>시작일</dt>
                <dd>{formatDate(startDate)}</dd>
              </div>
              <div>
                <dt>종료일</dt>
                <dd>{formatDate(endDate)}</dd>
              </div>
            </dl>
          </section>

          <section className="purchase-section">
            <h2>결제 방법</h2>
            <div className="payment-options">
              <label>
                <input type="radio" name="payment-method" value="kakao-pay" defaultChecked />
                <span>
                  <PaymentMethodIcon method="kakao-pay" />
                  <strong>카카오페이</strong>
                </span>
              </label>
              <label>
                <input type="radio" name="payment-method" value="card" />
                <span>
                  <PaymentMethodIcon method="card" />
                  <strong>신용·체크카드</strong>
                </span>
              </label>
            </div>
          </section>

          <section className="purchase-summary">
            <div>
              <span>상품 금액</span>
              <strong>연 {content.totalPrice}</strong>
            </div>
            <div>
              <span>월 환산 금액</span>
              <strong>{content.monthlyPrice}</strong>
            </div>
            <p>1년 구독 · 선택한 시작일부터 12개월</p>
          </section>

          {paymentError ? <p className="payment-error">{paymentError}</p> : null}
          <button className="purchase-submit" type="submit" disabled={isPaying}>
            {isPaying ? "결제 모듈 연결 중..." : `${content.totalPrice} 결제하기`}
          </button>
        </form>
      )}
    </MobilePageShell>
  );
}
