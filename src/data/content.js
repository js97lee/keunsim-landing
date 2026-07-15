export const contentSections = [
  {
    id: "all",
    title: "HOT 신규 콘텐츠",
    subtitle: "따끈따끈 신상 콘텐츠",
    cards: [
      {
        slug: "daily-english-word",
        title: "하루 영어 단어 3개",
        coverTitle: "하루 3개만 제대로\n영어 단어 요약",
        subtitle: "영어 단어 요약",
        image: "/assets/card-english-word.png",
        description: "발음·뜻·예문 핵심만 전달",
        detailDescription: "외우고 잊는 단어장이 아니라, 매일 꼭 필요한 영어 단어 3개를 발음부터 예문까지 짧고 선명하게 익히는 콘텐츠입니다.",
        detailHeading: "하루 3개, 이렇게 학습해요",
        detailPoints: [
          { title: "단어와 발음", body: "정확한 발음과 함께 오늘의 핵심 단어를 확인해요." },
          { title: "뜻과 실전 예문", body: "자주 쓰이는 뜻과 자연스러운 예문으로 기억해요." },
          { title: "미니 퀴즈", body: "짧은 복습 문제로 오늘 배운 단어를 바로 점검해요." },
        ],
        recommendedFor: ["단어 암기가 부담스러운 분", "출근길에 짧게 영어를 공부하고 싶은 분", "예문 중심으로 어휘를 익히고 싶은 분"],
        totalPrice: "39,000원",
        monthlyPrice: "월 4,900원",
        discount: "38% OFF",
      },
      {
        slug: "ai-news-daily",
        title: "오늘의 AI 뉴스 3개",
        coverTitle: "오늘 제일 중요한\nAI 뉴스 3개 요약",
        subtitle: "AI 뉴스 요약",
        image: "/assets/card-ai-news.png",
        description: "핵심 이슈 + 한 줄 해설",
        detailDescription: "매일 쏟아지는 AI 소식 중 지금 알아야 할 뉴스 3개만 골라 핵심 요약과 의미, 원문 출처까지 한 번에 전해드립니다.",
        detailHeading: "AI 이슈를 이렇게 정리해요",
        detailPoints: [
          { title: "핵심 뉴스 3개", body: "업무와 일상에 영향을 줄 주요 소식만 선별해요." },
          { title: "왜 중요한가", body: "뉴스가 시장과 업무에 미칠 영향을 한 줄로 설명해요." },
          { title: "원문 출처", body: "더 깊게 확인할 수 있도록 신뢰할 수 있는 출처를 제공해요." },
        ],
        recommendedFor: ["AI 흐름을 놓치고 싶지 않은 분", "긴 기사를 읽을 시간이 부족한 분", "업무에 활용할 AI 인사이트가 필요한 분"],
        totalPrice: "39,000원",
        monthlyPrice: "월 4,900원",
        discount: "31% OFF",
      },
      {
        slug: "gov-support-daily",
        title: "정부지원사업 공고 알림",
        coverTitle: "놓치면 아까운\n정부지원사업 공고 요약",
        subtitle: "정부지원사업 알림",
        image: "/assets/card-gov-support.png",
        description: "지원 대상·기한·요건 빠르게 확인",
        detailDescription: "흩어져 있는 정부지원사업 공고를 매일 확인해 우리 기업에 맞는 지원 대상, 마감일, 신청 요건을 빠르게 파악할 수 있게 정리합니다.",
        detailHeading: "공고에서 이것만 확인하세요",
        detailPoints: [
          { title: "지원 대상", body: "업력·지역·기업 규모 등 신청 가능 조건을 먼저 알려드려요." },
          { title: "마감과 일정", body: "접수 기간과 놓치기 쉬운 주요 일정을 정리해요." },
          { title: "핵심 신청 요건", body: "지원 규모와 필수 제출 조건을 짧게 요약해요." },
        ],
        recommendedFor: ["정부지원사업을 자주 놓치는 대표님", "공고 검토 시간을 줄이고 싶은 실무자", "우리 기업에 맞는 사업만 빠르게 찾고 싶은 분"],
        totalPrice: "99,000원",
        monthlyPrice: "월 9,900원",
        discount: "29% OFF",
      },
    ],
  },
];

export const allContent = contentSections.flatMap((section) => section.cards);

export function getContentBySlug(slug) {
  return allContent.find((content) => content.slug === slug);
}
