let paymentAdapter = null;

export function registerPaymentAdapter(adapter) {
  if (!adapter || typeof adapter.requestPayment !== "function") {
    throw new TypeError("결제 어댑터에는 requestPayment 함수가 필요합니다.");
  }

  paymentAdapter = adapter;
}

export async function requestPayment(order) {
  if (!paymentAdapter) {
    return {
      status: "preview",
      order,
    };
  }

  return paymentAdapter.requestPayment(order);
}
