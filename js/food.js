/* ---------------- 트렌드 데이터 (이미지 경로 추가) ---------------- */
T.food = [
  { 
    t: '토마토마라탕', type: 'dish', mode: 'pick', base: '#E8603A', sip: 1,
    img: 'img/토마토마라탕.jpg', // 이미지 경로 추가
    items: [['토마토', 'tomato', null, 2], ['청경채', 'leaf', null, 2], ['버섯', 'mushroom', null, 2], ['소고기', 'beef', null, 2], ['당면', 'noodle', null, 3], ['치즈', 'cheese', null, 2], ['고추', 'chili', null, 2]],
    lead: '새콤한 토마토 국물에 얼얼한 마라를 더한 퓨전 마라탕이에요.',
    // ... 이하 생략
  },
  { 
    t: '한정선', type: 'dish', mode: 'fixed', base: '#F3F5F8',
    img: 'images/food-mochi.jpg', // 이미지 경로 추가
    items: [['딸기', 'mochi', '#FF5470', 4], ['귤', 'mochi', '#FF9F1C', 4], ['샤인머스캣', 'mochi', '#9BD65A', 4], ['복숭아', 'mochi', '#FFB4A2', 4]],
    lead: '과일이 통째로 들어간 쫀득한 찹쌀떡이에요.',
    // ... 이하 생략
  },
  { 
    t: '피자설기', type: 'pizza',
    img: 'images/food-pizza.jpg', // 이미지 경로 추가
    lead: '쫀득한 설기 떡 위에 피자 토핑을 올린 퓨전 간식이에요.',
    // ... 이하 생략
  },
  { 
    t: '라면 말려먹기', type: 'ramen',
    img: 'images/food-ramen.jpg', // 이미지 경로 추가
    lead: '짜게 끓인 라면의 면을 접시에 말려 꼬들꼬들하게 먹는 방법이에요.',
    // ... 이하 생략
  },
];
