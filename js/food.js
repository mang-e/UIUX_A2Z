/* A2Z 먹거리(food.html) 전용 스크립트 — 트렌드 데이터 · 체험 모듈(마라탕/한정선/피자설기/라면). js/script.js 다음에 불러와요. */

/* ---------------- 트렌드 데이터 ---------------- */
T.food = [
  { t: '토마토마라탕', type: 'dish', mode: 'pick', base: '#E8603A', sip: 1,
    img: 'img/malatang.jpg',
    items: [['토마토', 'tomato', null, 2], ['청경채', 'leaf', null, 2], ['버섯', 'mushroom', null, 2], ['소고기', 'beef', null, 2], ['당면', 'noodle', null, 3], ['치즈', 'cheese', null, 2], ['고추', 'chili', null, 2]],
    lead: '새콤한 토마토 국물에 얼얼한 마라를 더한 퓨전 마라탕이에요.',
    body: ['토마토의 새콤함이 마라의 얼얼한 매운맛을 부드럽게 감싸서, 매운 음식이 부담스러운 사람도 즐길 수 있어요. 재료를 직접 골라 담는 마라탕의 특성상 ‘나만의 조합’을 공유하는 재미가 더해져요.',
      '익숙한 김치찌개에 라면사리를 넣어 먹던 것처럼, 아는 맛에 새로움을 더하는 방식이에요. 아래에서 재료를 골라 그릇에 담고 한입씩 먹어보세요.'],
    talk: '좋아하는 국물 요리에 나만의 재료를 더한 적이 있나요? 나만의 조합을 이야기해봐요.' },
  { t: '한정선', type: 'dish', mode: 'fixed', base: '#F3F5F8',
    img: 'img/hanjung.png',
    items: [['딸기', 'mochi', '#FF5470', 4], ['귤', 'mochi', '#FF9F1C', 4], ['샤인머스캣', 'mochi', '#9BD65A', 4], ['복숭아', 'mochi', '#FFB4A2', 4]],
    lead: '과일이 통째로 들어간 쫀득한 찹쌀떡이에요.',
    body: ['부드러운 찹쌀떡 속에 과일이 통째로 들어 있어서, 한입 베어 물면 과일 단면이 드러나요. 한정 수량으로 판매되는 경우가 많아 나오자마자 사라져서 ‘오픈런’이 벌어지기도 해요.',
      '찹쌀떡은 오래된 간식이지만 과일을 더해 새로운 모습이 됐어요. 쫀득한 겉과 상큼한 속의 조합을 아래에서 직접 베어 물어 확인해보세요.'],
    talk: '명절이나 특별한 날 줄 서서 사 먹던 간식이 있나요? 요즘 한정 간식과 비교해봐요.' },
  { t: '피자설기', type: 'pizza',
    img: 'img/pizza.jpg',
    lead: '쫀득한 설기 떡 위에 피자 토핑을 올린 퓨전 간식이에요.',
    body: ['떡 케이크 같은 설기 위에 치즈, 토마토, 올리브 같은 피자 토핑을 얹은 간식이에요. 전통 떡과 양식의 만남이라는 낯선 조합이 오히려 신선하게 받아들여졌어요.',
      '쫀득한 식감과 짭짤한 토핑이 어우러져 한 조각씩 나눠 먹기 좋아요. 아래에서 토핑을 골라 올린 뒤 조각을 한입씩 먹어보세요.'],
    talk: '떡이나 빵에 의외의 재료를 올려 먹어본 적이 있나요? 가장 신기했던 조합은 무엇인가요?' },
  { t: '라면 말려먹기', type: 'ramen',
    img: 'img/raman.jpg',
    lead: '짜게 끓인 라면의 면을 접시에 말려 꼬들꼬들하게 먹는 방법이에요.',
    body: ['조금 짜게 끓인 라면에서 면만 접시에 건져 잠시 두면, 면이 마르면서 조금 건조하고 뻑뻑해져요. 그때 먹으면 평소와 다른 꼬들꼬들하고 짭짤한 식감이 나서 과자처럼 즐기는 사람도 많아요.',
      '너무 오래 두면 딱딱해지고 너무 빨리 먹으면 평범한 라면이라, 기다리는 시간이 맛을 좌우해요. 아래에서 직접 끓이고 말린 뒤 먹어보세요.'],
    talk: '라면을 맛있게 먹는 나만의 방법이 있나요? 서로의 레시피를 이야기해봐요.' },
];

/* ---------------- 먹는 체험용 유틸 ---------------- */
const BP = [-.5, 3.5, 1.6, .35, 2.8].map(a => [24 + 17 * Math.cos(a), 26 + 15 * Math.sin(a)]);
/* 한입씩 베어 문 자국이 남는 SVG */
const bitten = (inner, n, id) => `<svg class="ic" viewBox="0 0 48 48"><defs><mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48"><rect width="48" height="48" fill="#fff"/>${BP.slice(0, n).map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="${7 + i * 1.3}" fill="#000"/>`).join('')}</mask></defs><g mask="url(#${id})">${inner}</g></svg>`;
function piece(inner, max, onBite, onGone) {
  const el = document.createElement('button'), id = 'bm' + (++uid); let n = 0; el.className = 'pc';
  const draw = () => el.innerHTML = bitten(inner, n, id); draw();
  el.onclick = () => { if (n >= max) return; n++; crunch(); draw(); bounce(el); onBite && onBite(); if (n >= max) { el.classList.add('gone'); setTimeout(() => el.remove(), 300); onGone && onGone(); } };
  return el;
}

/* ---------------- 인터랙션 모듈 ---------------- */
Object.assign(X, {
  /* 먹는 접시: 한입씩 베어 먹기 (토마토마라탕 · 한정선) */
  dish(st, bar, c) {
    let bites = 0, done = 0, sip = 0; const live = new Map();
    st.innerHTML = `<div class="plate" id="pl" style="--b:${c.base}"><i class="base"></i></div><div class="count" id="ct"></div><p class="hint" id="hn"></p>`;
    const pl = $('#pl', st);
    const upd = () => {
      const els = [...live.values()], n = els.length;
      els.forEach((e, i) => { const a = 2 * Math.PI * i / n - Math.PI / 2, r = n === 1 ? 0 : 30; e.style.left = 50 + r * Math.cos(a) + '%'; e.style.top = 50 + r * Math.sin(a) + '%'; });
      pl.style.setProperty('--s', sip * 5 + '%');
      $('#ct', st).textContent = `한입 ${bites}번 · 다 먹은 것 ${done}개`;
      $('#hn', st).textContent = n ? '재료를 눌러 한입씩 먹어보세요' : (done ? '잘 먹었습니다!' : '아래에서 재료를 골라 담아보세요');
    };
    const add = it => { const el = piece(I[it[1]](it[2]), it[3], () => { bites++; upd(); }, () => { done++; live.delete(it[0]); upd(); }); el.title = it[0]; live.set(it[0], el); pl.appendChild(el); };
    if (c.mode === 'fixed') { c.items.forEach(add); bar.innerHTML = '<button class="chip" id="rs">새 접시 받기</button>'; $('#rs', bar).onclick = () => X.dish(st, bar, c); }
    else {
      bar.innerHTML = rowOf('재료', c.items.map(it => `<button class="chip" data-k="${it[0]}">${it[0]}</button>`).join('')) + rowOf('', '<button class="chip" data-a="sip">국물 한 모금</button><button class="chip" data-a="rs">새 그릇</button>'); colBar(bar);
      bar.onclick = e => {
        const b = e.target.closest('.chip'); if (!b) return;
        if (b.dataset.k) { const it = c.items.find(x => x[0] === b.dataset.k); if (live.has(it[0])) { live.get(it[0]).remove(); live.delete(it[0]); b.classList.remove('on'); } else { add(it); b.classList.add('on'); beep(640); } }
        if (b.dataset.a === 'sip' && sip < 6) { sip++; noise(.15, .12, 1); }
        if (b.dataset.a === 'rs') return X.dish(st, bar, c);
        upd();
      };
    }
    upd();
  },

  /* 피자설기: 토핑을 올리고 조각을 한입씩 */
  pizza(st, bar) {
    const TP = [['토마토', 'tomato'], ['치즈', 'cheese'], ['올리브', 'olive'], ['콘', 'corn'], ['베이컨', 'bacon']]; let sel = [], bites = Array(8).fill(0);
    const P = (a, r) => [100 + r * Math.cos(a), 100 + r * Math.sin(a)], rad = Math.PI / 4;
    st.innerHTML = '<svg class="pz" viewBox="0 0 200 200"></svg><div class="count" id="ct"></div><p class="hint">토핑을 올린 뒤 조각을 눌러 한입씩 먹어보세요</p>';
    const render = () => {
      let defs = '', body = '<circle cx="100" cy="100" r="97" fill="#FEFEFE" stroke="#1C1C20" stroke-width="2"/>';
      for (let i = 0; i < 8; i++) {
        const a0 = i * rad - Math.PI / 2, a1 = a0 + rad, am = a0 + rad / 2, [x0, y0] = P(a0, 90), [x1, y1] = P(a1, 90);
        defs += `<mask id="pm${i}" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200"><rect width="200" height="200" fill="#fff"/>${Array.from({ length: bites[i] }, (_, b) => { const [bx, by] = P(am, 96 - b * 2); return `<circle cx="${bx}" cy="${by}" r="${16 + b * 10}" fill="#000"/>`; }).join('')}</mask>`;
        const tops = sel.map((t, j) => { const [tx, ty] = P(am + (j % 2 ? .12 : -.12), 36 + (j % 3) * 15); return `<g transform="translate(${tx - 9} ${ty - 9}) scale(.38)">${I[t[1]]()}</g>`; }).join('');
        if (bites[i] < 3) body += `<g class="sl" data-i="${i}" mask="url(#pm${i})"><path d="M100 100L${x0} ${y0}A90 90 0 0 1 ${x1} ${y1}Z" fill="#F7E7C4" stroke="#1C1C20" stroke-width="2" stroke-linejoin="round"/><path d="M${x0} ${y0}A90 90 0 0 1 ${x1} ${y1}" stroke="#E2B97A" stroke-width="9" fill="none"/>${tops}</g>`;
      }
      $('.pz', st).innerHTML = `<defs>${defs}</defs>${body}`;
      const gone = bites.filter(b => b >= 3).length; $('#ct', st).textContent = `먹은 조각 ${gone}/8`;
    };
    st.onclick = e => { const g = e.target.closest('.sl'); if (!g) return; const i = +g.dataset.i; if (bites[i] < 3) { bites[i]++; crunch(); render(); } };
    bar.innerHTML = rowOf('토핑', TP.map(t => `<button class="chip" data-k="${t[0]}">${t[0]}</button>`).join('')) + rowOf('', '<button class="chip" data-a="rs">새 피자설기</button>'); colBar(bar);
    bar.onclick = e => { const b = e.target.closest('.chip'); if (!b) return; if (b.dataset.a) { sel = []; bites.fill(0); $$('.chip', bar).forEach(x => x.classList.remove('on')); } else { const t = TP.find(x => x[0] === b.dataset.k), at = sel.indexOf(t); if (at > -1) { sel.splice(at, 1); b.classList.remove('on'); } else { sel.push(t); b.classList.add('on'); beep(640); } } render(); };
    render();
  },

  /* 라면 말려먹기: 끓이기 → 간 맞추기 → 건지기 → 말리기 → 먹기 */
  ramen(st, bar) {
    let step = 0, salt = 1, dry = 0, bites = 0, iv, tip = '';
    const BC = [[70, 100], [200, 112], [130, 80], [160, 140], [100, 140]];
    const waves = (d, x0, y0, rows, n) => { const a = 12 * (1 - d * .85), col = d < .4 ? '#F6D98B' : d < .75 ? '#EBC66E' : '#D9A94B'; let p = ''; for (let k = 0; k < rows; k++) p += `<path d="M${x0} ${y0 + k * 11}q10 ${-a} 20 0${'t20 0'.repeat(n)}" stroke="${col}" stroke-width="6" fill="none" stroke-linecap="round"/>`; return p; };
    const plate = (d, b) => `<svg class="rm" viewBox="0 0 300 200"><defs><mask id="nm" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="200"><rect width="300" height="200" fill="#fff"/>${BC.slice(0, b).map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="32" fill="#000"/>`).join('')}</mask></defs><ellipse cx="150" cy="130" rx="135" ry="62" fill="#FEFEFE" stroke="#1C1C20" stroke-width="2"/><ellipse cx="150" cy="130" rx="105" ry="46" fill="#E1E5EA"/>${b < 4 ? `<g mask="url(#nm)">${waves(d, 45, 90, 6, 6)}</g>` : ''}</svg>`;
    const pot = () => `<svg class="rm" viewBox="0 0 300 200"><path d="M70 72h160v78q0 20-20 20H90q-20 0-20-20z" fill="#4B4F59"/><rect x="48" y="86" width="22" height="10" rx="5" fill="#4B4F59"/><rect x="230" y="86" width="22" height="10" rx="5" fill="#4B4F59"/><ellipse cx="150" cy="72" rx="80" ry="16" fill="#2A2B31"/><ellipse cx="150" cy="74" rx="70" ry="12" fill="${['#D9A441', '#C9772F', '#A8531F'][salt]}"/><path d="M100 76q10-6 20 0t20 0t20 0t20 0" stroke="#F6D98B" stroke-width="5" fill="none" stroke-linecap="round"/><path class="stm" d="M120 54q-8-12 0-24M150 54q-8-12 0-24M180 54q-8-12 0-24" stroke="#B9BFC9" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`;
    const feel = () => dry < .3 ? '아직 촉촉해서 평범한 라면 같아요. 조금 더 기다려볼걸!' : dry < .75 ? (salt === 0 ? '꼬들꼬들해요! 다만 간이 심심하니 다음엔 더 짜게 끓여보세요.' : salt === 2 ? '꼬들꼬들하지만 정말 짜요! 물이 필요해요.' : '꼬들꼬들하고 짭짤해요. 딱 좋은 상태예요!') : '뻑뻑하고 딱딱해요. 너무 오래 두었어요.';
    const go = () => {
      clearInterval(iv); st.onclick = null;
      bar.innerHTML = '<button class="chip" id="rs">처음부터 다시</button>'; $('#rs', bar).onclick = () => { step = 0; dry = 0; bites = 0; tip = ''; go(); };
      if (step === 0) { st.innerHTML = `${pot()}<div class="say">물이 끓으면 라면을 넣어요</div><button class="bigbtn" id="a">라면 끓이기</button>`; $('#a', st).onclick = () => { step = 1; go(); }; }
      else if (step === 1) { st.innerHTML = `${pot()}<div class="say">간을 골라요. 이 방법은 조금 짜게 끓여요</div><div class="grp">${['보통', '조금 짜게', '아주 짜게'].map((s, i) => `<button class="bigbtn" data-i="${i}">${s}</button>`).join('')}</div>`; st.onclick = e => { const b = e.target.closest('[data-i]'); if (b) { salt = +b.dataset.i; step = 2; go(); } }; }
      else if (step === 2) { st.innerHTML = `${pot()}<div class="say">면이 익었어요. 국물은 두고 면만 건져요</div><button class="bigbtn" id="a">면만 접시에 건지기</button>`; $('#a', st).onclick = () => { step = 3; go(); }; }
      else {
        st.innerHTML = '<div id="nd"></div><div class="meter"><i id="mt"></i></div><div class="say" id="sy"></div><button class="bigbtn" id="fan">부채질하기</button>';
        const paint = () => { $('#nd', st).innerHTML = plate(dry, bites); $('#mt', st).style.width = Math.min(100, dry * 100) + '%'; $('#sy', st).textContent = tip || (dry < .3 ? '면이 마르는 중이에요. 조금 기다려요' : dry < .75 ? '꼬들꼬들해졌어요! 지금 먹어보세요' : '꽤 말랐어요. 더 딱딱해지기 전에!'); };
        $('#fan', st).onclick = () => { dry = Math.min(1, dry + .1); paint(); };
        iv = setInterval(() => { if (!st.isConnected) return clearInterval(iv); dry = Math.min(1, dry + .02); if (bites < 4) paint(); }, 400);
        st.onclick = e => { if (!e.target.closest('#nd') || bites >= 4) return; bites++; crunch(); tip = feel(); if (bites >= 4) { tip = '잘 먹었습니다! ' + tip; clearInterval(iv); } paint(); };
        paint();
      }
    };
    go();
  },
});
