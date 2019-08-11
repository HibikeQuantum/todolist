const uniqid = require('uniqid');

export const initData = {
  load: false,
  searchMode: false,
  searchWord: "",
  focused: 0,
  groups: [
    {
      name: "진짜 할일",
      index: 0,
      key: uniqid()
    },
    {
      name: "볼 영화",
      index: 1,
      key: uniqid()
    },
    {
      name: "웃음보의 목표..?",
      index: 2,
      key: uniqid()
    }
  ],
  items: [
    {
      check: false,
      group: 0,
      txt: "토이 마스터 브랜치 PR",
      key: uniqid()
    },
    {
      check: true,
      group: 0,
      txt: "퇴근 까먹고 신나게 집가기",
      key: uniqid()
    },
    {
      check: true,
      group: 0,
      txt: "마담빙 3번 먹기",
      key: uniqid()
    },
    {
      check: false,
      group: 1,
      txt: "80년대: 제국의 환대, ET, 씁쓸한인생, 탑껀",
      key: uniqid()
    },
    {
      check: false,
      group: 1,
      txt: "90년대: 백악기 공원, 늑대의 침묵,   따뜻한 매트릭스, 타인의타닉",
      key: uniqid()
    },
    {
      check: true,
      group: 1,
      txt: "15년: 아웃사이드 아웃, 에이지 오브 울트라, 깨어난 성큰",
      key: uniqid()
    },
    {
      check: true,
      group: 1,
      txt: "19년: 토이스토리 76, 극상직업, 스파이더맨 투 클로즈 홈",
      key: uniqid()
    },
    {
      check: true,
      group: 2,
      txt: "아재개그해서 뭐하나.. 내가 이러려고 이머시브에 왔나..",
      key: uniqid()
    }
  ]
};