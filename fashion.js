/* A2Z 패션(fashion.html) 전용 스크립트 — 트렌드 데이터 · 체험 모듈(옥/메지루시/젤리슈즈/볼펜). js/script.js 다음에 불러와요. */

/* ---------------- 트렌드 데이터 ---------------- */
T.fashion = [
  { t: '옥', type: 'jade',
    lead: '옥을 팔찌, 목걸이, 반지 같은 패션 소품으로 즐기는 흐름이에요.',
    body: ['맑고 은은한 옥빛이 어떤 옷에도 포인트가 되어, 전통 소재가 요즘 감각의 액세서리로 다시 주목받고 있어요. 팔찌, 펜던트, 귀걸이, 반지로 부담 없이 착용할 수 있어요.',
      '옥가락지나 노리개를 아껴 두던 마음과 이어지는 취향이에요. 아래에서 옷을 고르고 옥 액세서리를 착용해 나만의 코디를 완성해보세요.'],
    talk: '집에 오래 전해 내려온 소품이나 액세서리가 있나요? 요즘 스타일에 어떻게 어울릴지 이야기해봐요.' },
  { t: '메지루시', type: 'decor',
    items: [{ n: '우산', a: 'umb', at: [154, 296] }, { n: '가방', a: 'bag', at: [230, 122] }, { n: '텀블러', a: 'tum', at: [302, 160] }],
    colors: ['#1C94F5', '#F65AC2', '#FFEA00', '#7BE0B0', '#1C1C20'],
    parts: ['charm:#FFB36B:0', 'charm:#F7B6D8:1', 'charm:#B79CFF:2', 'charm:#7BE0B0:0', 'charm:#FFE16B:2', 'charm:#9CCBF5:1'],
    lead: '우산, 가방, 텀블러에 달아 내 물건임을 표시하는 작은 캐릭터 참이에요.',
    body: ['끝에 투명한 링이 달린 작은 캐릭터 참으로, 우산이나 가방, 텀블러 같은 소품에 걸어 ‘내 물건’ 표시를 해두는 액세서리이자 키링이에요. 똑같이 생긴 물건 사이에서도 내 것을 바로 알아볼 수 있어요.',
      '이름표를 달던 마음에 귀여움이 더해진 거예요. 아래에서 소품을 고르고 메지루시를 추가한 뒤, 드래그해서 원하는 위치에 달아보세요.'],
    talk: '내 물건을 알아보기 위해 달아둔 나만의 표시가 있나요? 이유와 함께 이야기해봐요.' },
  { t: '젤리슈즈 꾸미기', type: 'decor',
    items: [{ n: '젤리슈즈', a: 'shoe', at: [188, 164] }],
    colors: ['#F7A8D8', '#9CCBF5', '#C9F5E1', '#E1E5EA', '#FFE16B'],
    parts: ['star', 'heart', 'flower', 'bow', 'charm:#FFB36B:0', 'charm:#B79CFF:2'],
    lead: '말랑한 젤리 소재 신발에 장식을 달아 꾸미는 유행이에요.',
    body: ['반투명한 젤리 신발은 색감이 맑고 가벼워서 여름뿐 아니라 일상에서도 인기예요. 신발 구멍에 작은 장식을 꽂아 나만의 신발로 만드는 재미가 있어요.',
      '어릴 적 신던 젤리 샌들의 추억이 새로운 방식으로 돌아온 셈이에요. 아래에서 색을 고르고 장식을 드래그해 원하는 곳에 달아보세요.'],
    talk: '어릴 적 신던 신발 중 기억에 남는 것이 있나요? 요즘 신발과 비교해봐요.' },
  { t: '볼펜 꾸미기', type: 'decor',
    items: [{ n: '볼펜', a: 'pen', at: [180, 165] }],
    colors: ['#1C94F5', '#F65AC2', '#FFEA00', '#1C1C20', '#7BE0B0'],
    parts: ['star', 'heart', 'flower', 'bow', 'charm:#FFB36B:0', 'charm:#B79CFF:2'],
    lead: '평범한 볼펜에 스티커와 장식을 더해 나만의 펜으로 만드는 놀이예요.',
    body: ['볼펜에 스티커를 붙이고 작은 장식을 달아 꾸미는 놀이가 인기예요. 매일 쓰는 도구를 내 취향으로 바꾸면 필기하는 시간이 조금 더 즐거워져요.',
      '다이어리 꾸미기나 필통 꾸미기의 연장선이라 세대 구분 없이 즐길 수 있어요. 아래에서 펜 색을 고르고 장식을 드래그해 붙여보세요.'],
    talk: '아끼는 문구나 필기도구가 있나요? 좋아하는 이유를 이야기해봐요.' },
];

/* 장식 꾸미기용 도안 (360x330) */
const ART = {
  umb: c => `<path d="M40 150Q180 -20 320 150Q290 128 255 150Q217 128 180 150Q143 128 105 150Q70 128 40 150z" fill="${c}"/><path d="M180 36L105 150M180 36V150M180 36L255 150" stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none"/><path d="M180 150V268q0 26-26 26" stroke="${K}" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="180" cy="34" r="5" fill="${K}"/>`,
  bag: c => `<path d="M130 120Q130 52 180 52T230 120" stroke="${K}" stroke-width="9" fill="none"/><rect x="85" y="116" width="190" height="170" rx="18" fill="${c}"/><rect x="85" y="156" width="190" height="14" fill="#fff" fill-opacity=".7"/><rect x="125" y="200" width="110" height="56" rx="10" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="3" stroke-dasharray="6 5"/>`,
  tum: c => `<rect x="108" y="64" width="144" height="26" rx="10" fill="${K}"/><rect x="170" y="30" width="14" height="40" rx="6" fill="${K}"/><path d="M116 90H244L232 280q-2 22-24 22H152q-22 0-24-22z" fill="${c}"/><path d="M244 130H276q26 0 26 28v10q0 28-26 28H238" stroke="${K}" stroke-width="10" fill="none"/><path d="M140 110L148 270" stroke="#fff" stroke-opacity=".45" stroke-width="8" stroke-linecap="round"/>`,
  shoe: c => `<path d="M30 252C30 202 56 176 100 172C138 168 150 150 176 138C210 122 238 134 258 162C278 192 320 202 334 252z" fill="${c}" fill-opacity=".78"/><path d="M30 252H334V266Q334 286 312 286H52Q30 286 30 266z" fill="${c}"/><path d="M118 176Q188 150 252 170" stroke="${c}" stroke-width="18" fill="none" stroke-linecap="round"/><path d="M60 214Q110 190 168 200" stroke="#fff" stroke-opacity=".55" stroke-width="8" fill="none" stroke-linecap="round"/><g fill="#fff" fill-opacity=".85"><circle cx="150" cy="170" r="5"/><circle cx="188" cy="164" r="5"/><circle cx="226" cy="168" r="5"/><circle cx="86" cy="226" r="5"/><circle cx="262" cy="226" r="5"/></g>`,
  pen: c => `<g transform="rotate(-24 180 165)"><rect x="70" y="150" width="230" height="30" rx="15" fill="${c}"/><rect x="70" y="150" width="60" height="30" fill="${K}" fill-opacity=".18"/><rect x="250" y="146" width="22" height="38" rx="6" fill="#fff" fill-opacity=".6"/><path d="M70 150L30 165L70 180z" fill="${K}"/><rect x="300" y="157" width="22" height="16" rx="4" fill="${K}"/><path d="M96 158H240" stroke="#fff" stroke-opacity=".5" stroke-width="4" stroke-linecap="round"/></g>`,
};

/* ---------------- 인터랙션 모듈 ---------------- */
Object.assign(X, {
  /* 옥: (내용 비움 — 다시 작업 예정) */
  jade(st, bar) {
    st.innerHTML = '';
    bar.innerHTML = '';
  },

  /* 메지루시 · 젤리슈즈 · 볼펜: 장식을 추가하고 드래그해서 배치 */
  decor(st, bar, c) {
    let it = 0, col = 0, ch = [], id = 0;
    st.innerHTML = '<svg id="sc" class="scene dgs" viewBox="0 0 360 330"></svg><p class="hint">장식을 추가한 뒤 드래그해서 원하는 곳에 달아보세요 · 더블클릭하면 떼요</p>';
    const svg = $('#sc', st);
    const partSvg = k => { if (k.startsWith('charm:')) { const [, h, n] = k.split(':'); return `<g transform="translate(-31 -10) scale(1.3)">${I.charm(h, +n)}</g>`; } return `<g transform="translate(-26 -26) scale(1.1)">${I[k]()}</g>`; };
    const draw = () => { svg.innerHTML = ART[c.items[it].a](c.colors[col]) + ch.map(p => `<g class="dg" data-id="${p.id}" transform="translate(${p.x} ${p.y})"><g class="${p.k.startsWith('charm') ? 'swy' : ''}">${partSvg(p.k)}</g></g>`).join(''); };
    const label = k => k.startsWith('charm:') ? ic('charm', k.split(':')[1], +k.split(':')[2]) : ic(k);
    const rows = () => { bar.innerHTML = (c.items.length > 1 ? rowOf('물건', c.items.map((x, i) => `<button class="chip${i === it ? ' on' : ''}" data-it="${i}">${x.n}</button>`).join('')) : '') + rowOf('색상', c.colors.map((x, i) => `<button class="sw${i === col ? ' on' : ''}" data-c="${i}" style="background:${x}" aria-label="색 ${i + 1}"></button>`).join('')) + rowOf('장식 추가', c.parts.map(k => `<button class="chip" data-k="${k}">${label(k)}</button>`).join('') + '<button class="chip" data-r="1">모두 떼기</button>'); colBar(bar); };
    bar.onclick = e => {
      const b = e.target.closest('button'); if (!b) return; const d = b.dataset;
      if (d.it) it = +d.it; if (d.c) col = +d.c;
      if (d.k) { const at = c.items[it].at; ch.push({ id: ++id, k: d.k, x: Math.max(30, Math.min(330, at[0] + (Math.random() - .5) * 150)), y: Math.max(30, Math.min(300, at[1] + 10 + Math.random() * 50)) }); if (ch.length > 8) ch.shift(); beep(700); }
      if (d.r) ch = [];
      rows(); draw();
    };
    const pt = e => { const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); };
    let drag = null;
    svg.onpointerdown = e => { const g = e.target.closest('.dg'); if (!g) return; const p = ch.find(x => x.id == g.dataset.id), q = pt(e); drag = { p, g, ox: p.x - q.x, oy: p.y - q.y }; svg.setPointerCapture(e.pointerId); g.classList.add('lift'); ch.push(ch.splice(ch.indexOf(p), 1)[0]); svg.appendChild(g); };
    svg.onpointermove = e => { if (!drag) return; const q = pt(e), p = drag.p; p.x = Math.max(20, Math.min(340, q.x + drag.ox)); p.y = Math.max(20, Math.min(310, q.y + drag.oy)); drag.g.setAttribute('transform', `translate(${p.x} ${p.y})`); };
    svg.onpointerup = svg.onpointercancel = () => { if (drag) drag.g.classList.remove('lift'); drag = null; };
    svg.ondblclick = e => { const g = e.target.closest('.dg'); if (g) { ch = ch.filter(x => x.id != g.dataset.id); draw(); } };
    rows(); draw();
  },
});