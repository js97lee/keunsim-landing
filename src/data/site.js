import heroBannerTwo from "../../assets/hero-banner-2.png";
import heroBannerThree from "../../assets/hero-banner-3.png";
import heroBannerOne from "../../assets/hero-banner.png";

export const heroBanners = [
  { src: heroBannerOne, alt: "데일리피스 상단 배너 1" },
  { src: heroBannerTwo, alt: "데일리피스 상단 배너 2" },
  { src: heroBannerThree, alt: "데일리피스 상단 배너 3" },
];

export const flowSteps = [
  { icon: "book", title: "콘텐츠 선택", description: "관심 있는 콘텐츠 구독권을 고릅니다." },
  { icon: "chat", title: "카카오싱크 가입", description: "약관 동의와 채널 추가를 한 번에 진행합니다." },
  { icon: "clock", title: "발송 시간 설정", description: "원하는 요일과 시간을 선택합니다." },
  { icon: "send", title: "샘플 즉시 발송", description: "첫 콘텐츠를 카카오톡으로 바로 받아봅니다." },
];

export const serviceLinks = [
  { to: "/", label: "홈" },
  { to: "/notices", label: "공지사항" },
  { to: "/FAQ", label: "FAQ" },
];

export const policyLinks = [
  { to: "/policies/terms", label: "이용약관" },
  { to: "/policies/privacy", label: "개인정보처리방침" },
];

export const memberMenuGroups = [
  {
    title: "결제 관리",
    items: [
      { to: "/coupons", label: "쿠폰함", icon: "ticket" },
      { to: "/payments", label: "결제 내역", icon: "card" },
    ],
  },
  {
    title: "선물",
    items: [
      { to: "/gifts", label: "콘텐츠 선물하기", icon: "gift" },
      { to: "/gifts/sent", label: "보낸 선물", icon: "gift" },
      { to: "/gifts/received", label: "받은 선물", icon: "gift" },
    ],
  },
  {
    title: "계정",
    items: [{ to: "/account", label: "계정", icon: "settings" }],
  },
];

export const footerSections = [
  { title: "서비스", links: serviceLinks },
  { title: "정책", links: policyLinks },
  {
    title: "고객센터",
    open: true,
    lines: ["카카오톡 친구추가 : 데일리피스", "평일 10:00 - 18:00", "점심 12:00 - 13:00", "주말/공휴일 휴무"],
  },
  {
    title: "사업자 정보",
    lines: ["파이랩 | 대표 : 김동학", "사업자등록번호 : 120-27-02110", "통신판매업신고 :", "전화 : 070-0000-0000", "서울특별시 서초구 매헌로16길 40, 203동 2002호"],
  },
];
