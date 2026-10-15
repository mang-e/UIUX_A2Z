/* A2Z 패션(fashion.html) 전용 스크립트 — 트렌드 데이터 · 체험 모듈(옥/메지루시/젤리슈즈/볼펜). js/script.js 다음에 불러와요. */
 
/* ---------------- 트렌드 데이터 ---------------- */
T.fashion = [
  { t: '옥', type: 'jade',
    lead: '옥을 팔찌, 목걸이, 반지 같은 패션 소품으로 즐기는 흐름이에요.',
    body: ['맑고 은은한 옥빛이 어떤 옷에도 포인트가 되어, 전통 소재가 요즘 감각의 액세서리로 다시 주목받고 있어요. 팔찌, 펜던트, 귀걸이, 반지로 부담 없이 착용할 수 있어요.',
      '아래에서 옥 구슬을 골라 줄에 끼우고, 나만의 옥 팔찌를 완성해보세요.'],
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
  /* 옥: 줄에 옥 구슬을 끼워 팔찌 만들기 — 줄이 차면 팔찌로 묶이고, 다시 하기를 누르면 구슬이 빠져요 */
  jade(st, bar) {
    const U = 288, KN = 14, B = U - KN, X0 = 36, CX = 180, CY = 165, GAP = 1, RT = 80, SK = RT / (U / (2 * Math.PI));
    /* 구슬 4종: 이름 · 줄 방향 길이(w) · 옥빛(밝은색, 기본색, 어두운색) */
    const BD = [
      { n: '비취옥 구슬', w: 28, c: ['#C9F5E1', '#5FCFA0', '#1F8F65'] },
      { n: '백옥 대롱', w: 42, c: ['#FFFFFF', '#E4F3EA', '#9CC8B2'] },
      { n: '자옥 고리', w: 30, c: ['#EBDDFB', '#B79CFF', '#6E4FB5'] },
      { n: '녹옥 마름모', w: 30, c: ['#8FDCB0', '#2FA06A', '#14603F'] },
    ];
    const defs = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' + BD.map((b, i) => `<radialGradient id="jbg${i}" cx=".5" cy=".5" r=".7" fx=".3" fy=".25"><stop offset="0" stop-color="${b.c[0]}"/><stop offset=".55" stop-color="${b.c[1]}"/><stop offset="1" stop-color="${b.c[2]}"/></radialGradient>`).join('') + '</defs></svg>';
    const shape = i => {
      const f = `url(#jbg${i})`, ln = BD[i].c[2];
      return [
        `<circle r="14" fill="${f}" stroke="${ln}" stroke-opacity=".35"/><ellipse cx="-4.5" cy="-6" rx="4.5" ry="3" fill="#fff" opacity=".6"/>`,
        `<rect x="-21" y="-10" width="42" height="20" rx="7" fill="${f}" stroke="${ln}" stroke-opacity=".45"/><rect x="-16" y="-7" width="26" height="3.5" rx="1.75" fill="#fff" opacity=".75"/>`,
        `<path fill-rule="evenodd" d="M-15 0a15 15 0 1 0 30 0a15 15 0 1 0-30 0zM-5.5 0a5.5 5.5 0 1 1 11 0a5.5 5.5 0 1 1-11 0z" fill="${f}" stroke="${ln}" stroke-opacity=".4"/><path d="M-10 -6A12 12 0 0 1-2 -11" stroke="#fff" stroke-opacity=".7" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
        `<path d="M0 -16L15 0L0 16L-15 0z" fill="${f}" stroke="${ln}" stroke-opacity=".45" stroke-linejoin="round"/><path d="M0 -16L15 0L0 0z" fill="#fff" opacity=".28"/><path d="M-15 0L0 0L0 16z" fill="#000" opacity=".1"/>`,
      ][i];
    };
    const mini = i => `<svg class="bm" viewBox="-22 -18 44 36" aria-hidden="true">${shape(i)}</svg>`;
    const INIT = '원하는 구슬을 골라 줄에 끼워보세요. 줄이 가득 차면 팔찌가 완성돼요.';
    st.innerHTML = defs + '<svg id="sc" class="scene" viewBox="0 0 360 330"></svg><div class="say" id="say" aria-live="polite"></div>';
    const sc = $('#sc', st), say = m => { $('#say', st).textContent = m; };
 
    let beads = [], done = false, busy = false, newest = -1;
    const lerp = (a, b, t) => a + (b - a) * t, clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const ez = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const used = () => beads.reduce((a, t) => a + BD[t].w, 0) + Math.max(0, beads.length - 1) * GAP;
    const left = () => B - used();
    const room = i => left() >= BD[i].w + (beads.length ? GAP : 0);
    const fit = i => !busy && !done && room(i);
    const centers = gap => { let s = KN / 2; return beads.map(t => { const c = s + BD[t].w / 2; s += BD[t].w + gap; return c; }); };
    const run = (ms, fn) => new Promise(res => { const t0 = performance.now(); const f = now => { const t = Math.min(1, (now - t0) / ms); fn(t); t < 1 ? requestAnimationFrame(f) : res(); }; requestAnimationFrame(f); });
 
    /* tt: 0=일자 줄, 1=팔찌 · T: 구슬이 빠지는 시간(ms), -1이면 빠지지 않음 */
    const draw = (tt = done ? 1 : 0, T = -1) => {
      const p = ez(clamp(tt / .3)), e = ez(clamp((tt - .25) / .75)), n = beads.length, k = 1 + (SK - 1) * e;
      const g1 = n > 1 ? GAP + left() / (n - 1) : GAP, c0 = centers(GAP), c1 = centers(g1);
      const pt = s => { const a = (-90 + 360 * s / U) * Math.PI / 180; return [lerp(X0 + s, CX + RT * Math.cos(a), e), lerp(CY, CY + RT * Math.sin(a), e)]; };
      let path = ''; for (let j = 0; j <= 72; j++) { const q = pt(U * j / 72); path += (j ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1); }
      let s = `<path d="${path}" stroke="${K}" stroke-width="${(3 * k).toFixed(2)}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      if (e < 1) [0, U].forEach(v => { const q = pt(v); s += `<circle cx="${q[0].toFixed(1)}" cy="${q[1].toFixed(1)}" r="${(4.5 * k).toFixed(1)}" fill="${K}" opacity="${(1 - e).toFixed(2)}"/>`; });
      beads.forEach((t, i) => {
        const sv = lerp(c0[i], c1[i], p), q = pt(sv), rot = ((((360 * sv / U + 180) % 360) + 360) % 360) - 180;
        const u = T < 0 ? 0 : clamp((T - i * 50) / 450), d = i % 2 ? 1 : -1;
        s += `<g transform="translate(${(q[0] + d * 14 * u).toFixed(1)} ${(q[1] + 190 * u * u).toFixed(1)}) rotate(${(rot * e + d * 50 * u).toFixed(1)}) scale(${k.toFixed(3)})" opacity="${(1 - u).toFixed(2)}"><g class="${i === newest ? 'drop' : ''}">${shape(t)}</g></g>`;
      });
      if (done && tt === 1 && T < 0) { const y = CY - RT; s += `<g class="pop"><path d="M${CX} ${y}Q${CX - 5} ${y - 17} ${CX - 12} ${y - 34}M${CX} ${y}Q${CX + 5} ${y - 17} ${CX + 12} ${y - 34}" stroke="${K}" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="${CX}" cy="${y}" r="7" fill="${K}"/></g>`; }
      sc.innerHTML = s;
    };
    const rows = () => {
      bar.innerHTML = rowOf('구슬', BD.map((b, i) => `<button class="chip" data-b="${i}"${fit(i) ? '' : ' disabled'}>${mini(i)}${b.n}</button>`).join(''))
        + rowOf('줄', `<button class="chip" data-r="1"${busy || !beads.length ? ' disabled' : ''}>다시 하기</button>`);
      colBar(bar);
    };
 
    const add = async i => {
      if (!fit(i)) return;
      beads.push(i); newest = beads.length - 1; beep(560 + i * 80);
      const full = BD.every((b, j) => !room(j));
      draw(); newest = -1;
      if (!full) { say(`구슬 ${beads.length}알 · 남은 줄 ${Math.round(left() / B * 100)}%`); rows(); return; }
      busy = true; rows(); say('줄이 가득 찼어요! 팔찌로 묶는 중…');
      await sleep(500); await run(1300, t => draw(t));
      done = true; busy = false; draw(); rows();
      say(`팔찌 완성! 구슬 ${beads.length}알로 나만의 옥 팔찌를 만들었어요.`);
      beep(880); await sleep(120); beep(1175);
    };
    const reset = async () => {
      if (busy || !beads.length) return;
      busy = true; rows(); say('구슬을 빼는 중…'); beep(400);
      if (done) await run(700, t => draw(1 - t));
      const dur = 450 + 50 * beads.length; await run(dur, t => draw(0, t * dur));
      beads = []; done = false; busy = false; draw(); rows(); say(INIT);
    };
 
    bar.onclick = e => { const b = e.target.closest('button'); if (!b || b.disabled) return; if ('r' in b.dataset) reset(); else add(+b.dataset.b); };
    say(INIT); rows(); draw();
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
