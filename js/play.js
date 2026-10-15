/* A2Z 놀거리(play.html) 전용 스크립트 — 트렌드 데이터 · 체험 모듈(말랑이/왁뿌볼/먼작귀/동묘 쇼핑). js/script.js 다음에 불러와요. */

/* ---------------- 트렌드 데이터 ---------------- */
T.play = [
  { t: '말랑이 · 탱글 · 키캡', type: 'squish',
    lead: '손끝으로 만지고, 비틀고, 누르는 촉감 장난감이 다시 인기예요.',
    body: ['말랑이는 누르면 천천히 눌렸다가 느릿하게 되돌아오는 쫀득한 장난감이에요. 모양과 질감이 다양해서 마음에 드는 것을 골라 모으는 재미가 있어요. 탱글은 아치형 곡선 플라스틱 조각을 마디마디 이어 놓은 피젯 토이로, 손으로 비틀고 꺾고 돌리며 놀아요. 키캡은 키보드 윗부분을 꾸미는 작은 부품으로, 누를 때 나는 소리와 색 조합까지 즐기는 취미가 됐어요.',
      '어릴 적 구슬이나 슬라임을 만지작거리던 기억이 있다면 낯설지 않아요. 손을 계속 움직이면 마음이 차분해져서, 바쁜 하루 중 잠깐 쉬어 가는 도구로도 쓰여요. 아래에서 모양과 질감을 골라 직접 눌러보고 비틀어보세요.'],
    talk: '어릴 적 손에 쥐고 놀던 장난감이 있나요? 지금의 말랑이와 무엇이 닮았고 무엇이 다른지 이야기해봐요.' },
  { t: '왁뿌볼', type: 'wax',
    lead: '말랑이 겉에 왁스를 입힌, 깨는 맛이 있는 장난감이에요.',
    body: ['말랑이 위에 왁스를 부어 얇게 굳힌 장난감이에요. 겉은 단단해 보이지만 꽉 누르면 와작 소리와 함께 갈라지고, 그 안에서 말랑한 속이 드러나요.',
      '깨지는 순간의 소리와 촉감, 단단함과 말랑함의 대비가 재미 포인트예요. 얼음을 깨 먹거나 과자 껍질을 부수던 느낌과도 닮았어요. 아래에서 꾹 눌러 껍질을 깨보세요.'],
    talk: '“바삭하다가 말랑한” 반전이 있는 놀이나 음식이 떠오르나요? 하나씩 말해봐요.' },
  { t: '먼작귀', type: 'clicker',
    lead: '‘먼가 작고 귀여운 녀석’의 줄임말로, 작은 캐릭터가 건네는 소소한 위로예요.',
    body: ['작고 둥근 캐릭터들의 일상이 담긴 이야기로, 굿즈를 모으고 가방에 달며 좋아하는 마음을 표현하는 문화로 이어졌어요. 귀여운 것을 곁에 두는 것만으로도 하루가 조금 가벼워진다고 해요.',
      '귀여움은 세대를 가리지 않는 마음이에요. 아래 체험에서는 가상의 캐릭터를 쓰다듬어 귀여움 점수를 모으고, 간식을 주거나 친구를 불러 새 캐릭터를 만나보세요.'],
    talk: '요즘 나를 웃게 하는 작고 귀여운 것은 무엇인가요? 사진이나 이야기로 나눠봐요.' },
  { t: '동묘 쇼핑', type: 'flea', budget: 30000,
    shops: [
      { n: '빈티지 옷가게', c: '#F65AC2', items: [['jacket', '데님 재킷', 9000, '#6B8EAD'], ['cap', '볼캡', 4000, '#1C94F5'], ['shades', '선글라스', 3000, K], ['sneaker', '헌 운동화', 8000, '#F65AC2']] },
      { n: '골동품 잡화점', c: '#FFEA00', items: [['radio', '라디오', 7000, '#FFB36B'], ['camera', '필름 카메라', 9000], ['clock', '탁상시계', 5000], ['vase', '화병', 6000]] },
      { n: '책방 · 음반 가게', c: '#1C94F5', items: [['book', '옛날 책', 2000, '#7BE0B0'], ['record', 'LP 음반', 4000], ['blob', '말랑이 인형', 3000, '#F7B6D8'], ['bag', '천가방', 5000, '#FFB36B']] },
    ],
    lead: '서울 동묘 구제시장에서 오래된 옷과 물건 사이의 보물을 찾는 쇼핑이에요.',
    body: ['동묘 앞 구제시장은 빈티지 옷, 골동품, 헌책과 음반까지 골목마다 다른 물건이 쌓여 있는 곳이에요. 적은 돈으로 나만의 물건을 찾고, 가게 주인과 값을 흥정하는 재미까지 있어서 요즘 젊은 세대에게도 인기 있는 장소가 됐어요.',
      '예전 시장에서 물건을 고르고 깎아보던 기억과 닮았어요. 아래에서 가게를 돌아다니며 물건을 고르고 흥정한 뒤, 마지막에 영수증으로 오늘의 쇼핑을 확인해보세요.'],
    talk: '시장이나 중고 가게에서 건진 보물이 있나요? 가격과 사연을 함께 이야기해봐요.' },
];

/* ---------------- 인터랙션 모듈 ---------------- */
Object.assign(X, {
  /* 말랑이(모양·질감 선택, 스프링 물리) · 탱글(닫힌 고리) · 키캡 */
  squish(st, bar) {
    let mode = 'm', shp = 0, mat = 0, n = 0, rid = 0;
    const SH = [['푸딩', '#F7B6D8', '<path d="M14 62C10 32 34 16 52 16s40 18 36 46c-3 22-20 28-38 28S16 84 14 62z"/>'],
      ['별', '#FFE16B', '<path d="M50 12L61 38L89 41L68 59L75 87L50 72L25 87L32 59L11 41L39 38Z" stroke-width="12" stroke-linejoin="round"/>'],
      ['구름', '#9CCBF5', '<circle cx="34" cy="58" r="22"/><circle cx="58" cy="44" r="26"/><circle cx="74" cy="64" r="18"/><rect x="32" y="60" width="44" height="22" rx="10"/>'],
      ['하트', '#F65AC2', '<path d="M50 88C14 62 8 34 28 24c11-5 22 0 22 11 0-11 11-16 22-11 20 10 14 38-22 64z"/>'],
      ['고양이', '#FFB36B', '<path d="M18 40L22 10L44 26zM82 40L78 10L56 26z"/><circle cx="50" cy="56" r="34"/>'],
      ['딸기', '#FF5470', '<path d="M50 90C20 78 8 52 16 36c8-14 60-14 68 0 8 16-4 42-34 54z"/>']];
    const MT = [['쫀득', 180, 9], ['슬로우', 20, 10], ['탱탱', 320, 5]];
    const face = `<circle cx="38" cy="57" r="3.4" fill="${K}"/><circle cx="62" cy="57" r="3.4" fill="${K}"/><path d="M45 66q5 5 10 0" stroke="${K}" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="30" cy="66" r="4" fill="#F65AC2" opacity=".4"/><circle cx="70" cy="66" r="4" fill="#F65AC2" opacity=".4"/><ellipse cx="32" cy="32" rx="9" ry="5" fill="#fff" opacity=".5" transform="rotate(-25 32 32)"/>`;
    const sv = (i, cls) => `<svg class="${cls}" viewBox="0 0 100 100"><g fill="${SH[i][1]}" stroke="${SH[i][1]}">${SH[i][2]}</g>${cls === 'sq3' ? face : ''}</svg>`;
    const draw = () => {
      bar.innerHTML = rowOf('종류', [['m', '말랑이'], ['t', '탱글'], ['k', '키캡']].map(([k, l]) => `<button class="chip${k === mode ? ' on' : ''}" data-m="${k}">${l}</button>`).join('')) + (mode === 'm' ? rowOf('질감', MT.map((m, i) => `<button class="chip${i === mat ? ' on' : ''}" data-t="${i}">${m[0]}</button>`).join('')) : ''); colBar(bar);
      rid++; if (mode === 'k') keys(); else if (mode === 't') tangle(); else squ();
    };
    bar.onclick = e => { const b = e.target.closest('.chip'); if (!b) return; if (b.dataset.m) mode = b.dataset.m; if (b.dataset.t) mat = +b.dataset.t; draw(); };
    function squ() {
      st.innerHTML = `<div class="sqwrap">${sv(shp, 'sq3')}</div><div class="thumbs">${SH.map((s, i) => `<button class="thb${i === shp ? ' on' : ''}" data-i="${i}" aria-label="${s[0]}">${sv(i, 'th')}</button>`).join('')}</div><div class="count">만진 횟수 <b id="n">${n}</b> · ${SH[shp][0]}</div><p class="hint">꾹 눌렀다 놓아보세요 · 아래에서 다른 모양을 골라보세요</p>`;
      const el = $('.sq3', st), me = rid, [, k, cd] = MT[mat]; let sx = 1, sy = 1, vx = 0, vy = 0, tx = 1, ty = 1;
      const loop = () => { if (me !== rid || !el.isConnected) return; const dt = 1 / 60; vx += (-k * (sx - tx) - cd * vx) * dt; vy += (-k * (sy - ty) - cd * vy) * dt; sx += vx * dt; sy += vy * dt; el.style.transform = `scale(${sx},${sy})`; requestAnimationFrame(loop); };
      loop();
      const up = () => { if (ty !== 1) { n++; $('#n', st).textContent = n; } tx = ty = 1; };
      el.onpointerdown = () => { tx = 1.3; ty = .6; beep(150); }; el.onpointerup = up; el.onpointerleave = up; el.onpointercancel = up;
      $$('.thb', st).forEach(b => b.onclick = () => { shp = +b.dataset.i; squ(); });
    }
    function tangle() {
      st.innerHTML = '<canvas class="tgc"></canvas><p class="hint">마디가 이어진 고리를 잡고 끌어서 비틀고 꺾어보세요</p>';
      const cv = $('canvas', st), x = cv.getContext('2d'), dp = Math.min(devicePixelRatio, 2), w = cv.clientWidth, h = cv.clientHeight;
      cv.width = w * dp; cv.height = h * dp; x.scale(dp, dp);
      const n = 28, P = [], O = [];
      for (let i = 0; i < n; i++) { const t = 2 * Math.PI * i / n, k = 1 + .28 * Math.sin(3 * t); P.push([w / 2 + w * .3 * k * Math.cos(t), h / 2 + h * .3 * k * Math.sin(t)]); O.push([...P[i]]); }
      let per = 0; for (let i = 0; i < n; i++) per += Math.hypot(P[(i + 1) % n][0] - P[i][0], P[(i + 1) % n][1] - P[i][1]);
      const L = per / n; let d = -1;
      const at = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
      cv.onpointerdown = e => { const q = at(e); let m = 70; P.forEach((p, i) => { const k = Math.hypot(p[0] - q[0], p[1] - q[1]); if (k < m) { m = k; d = i; } }); cv.setPointerCapture(e.pointerId); beep(300); };
      cv.onpointermove = e => { if (d < 0) return; const q = at(e); P[d] = [q[0], q[1]]; O[d] = [q[0], q[1]]; };
      cv.onpointerup = () => d = -1;
      const fix = (a, b, len, mn) => { const A = P[a], B = P[b], dx = B[0] - A[0], dy = B[1] - A[1], s = Math.hypot(dx, dy) || .001; if (mn && s >= len) return; const f = (s - len) / s, wa = a === d ? 0 : 1, wb = b === d ? 0 : 1, t = wa + wb; if (!t) return; A[0] += dx * f * wa / t; A[1] += dy * f * wa / t; B[0] -= dx * f * wb / t; B[1] -= dy * f * wb / t; };
      const draw2 = () => {
        x.clearRect(0, 0, w, h); x.lineCap = x.lineJoin = 'round'; const lw = w * .05;
        for (let i = 0; i < n; i++) { x.strokeStyle = (i >> 1) % 2 ? '#9CCBF5' : '#F7A8D8'; x.lineWidth = lw; x.beginPath(); x.moveTo(...P[i]); x.lineTo(...P[(i + 1) % n]); x.stroke(); }
        x.strokeStyle = 'rgba(255,255,255,.5)'; x.lineWidth = lw * .2; x.beginPath(); P.forEach((p, i) => x[i ? 'lineTo' : 'moveTo'](p[0] - lw * .15, p[1] - lw * .2)); x.closePath(); x.stroke();
      };
      const step = () => {
        if (!cv.isConnected) return;
        P.forEach((p, i) => { if (i === d) return; const vx = (p[0] - O[i][0]) * .94, vy = (p[1] - O[i][1]) * .94; O[i] = [p[0], p[1]]; p[0] += vx; p[1] += vy; });
        for (let k = 0; k < 8; k++) {
          for (let i = 0; i < n; i++) fix(i, (i + 1) % n, L, 0);
          for (let i = 0; i < n; i++) fix(i, (i + 2) % n, L * 1.8, 1);
          P.forEach(p => { p[0] = Math.min(w - 24, Math.max(24, p[0])); p[1] = Math.min(h - 24, Math.max(24, p[1])); });
        }
        draw2(); requestAnimationFrame(step);
      };
      step();
    }
    function keys() {
      let th = 0, typed = ''; const TH = [['#FFEA00', '#1C94F5', '#F65AC2'], ['#FEFEFE', '#E1E5EA', '#B9BFC9'], ['#7BE0B0', '#FFB36B', '#B79CFF']];
      const L = ['A', '2', 'Z', 'T', 'R', 'E', 'N', 'D'];
      const paint = () => $$('.key', st).forEach((k, i) => k.style.background = TH[th][i % 3]);
      st.innerHTML = `<div class="say" id="ty">키를 눌러 글자를 쳐보세요</div><div class="keys">${L.map(l => `<button class="key">${l}</button>`).join('')}</div><button class="bigbtn" id="th">키캡 색상 바꾸기</button><p class="hint">눌러서 딸깍 소리를 들어보세요 (소리 켜기)</p>`;
      paint(); $('#th', st).onclick = () => { th = (th + 1) % 3; paint(); };
      $$('.key', st).forEach((k, i) => k.onpointerdown = () => { beep(260 + i * 50); k.classList.add('dn'); setTimeout(() => k.classList.remove('dn'), 120); typed = (typed + L[i]).slice(-14); $('#ty', st).textContent = typed; });
    }
    draw();
  },

  /* 왁뿌볼: 꾹 누르면 껍질이 갈라지고 깨짐 */
  wax(st, bar) {
    let iv, hold, broken, col;
    const build = () => {
      clearInterval(iv); hold = 0; broken = false; col = PAL[Math.floor(Math.random() * 6)];
      st.innerHTML = `<div class="waxwrap"><div class="wax" id="wx" style="--c:${col}"><div class="shell"><svg viewBox="0 0 100 100" fill="none" stroke="${K}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path class="k1" d="M52 6 L45 28 L55 40 L48 58"/><path class="k1" d="M55 40 L74 46"/><path class="k2" d="M30 20 L38 38 L24 52 L30 74"/><path class="k2" d="M48 58 L66 72 L62 92"/><path class="k3" d="M80 24 L70 34 L84 52 L76 70"/><path class="k3" d="M24 52 L8 56"/></svg></div></div></div><div class="count" id="pr">꾹 눌러보세요</div><p class="hint">누르고 있을수록 껍질에 금이 가요 (소리 켜기)</p>`;
      const wx = $('#wx', st), pr = $('#pr', st), wrap = wx.parentElement;
      const shatter = () => { $('.shell', wx).remove(); for (let i = 0; i < 14; i++) { const a = Math.random() * 6.28, d = 90 + Math.random() * 90; wrap.insertAdjacentHTML('beforeend', `<i class="shard" style="--x:${Math.cos(a) * d}px;--y:${Math.sin(a) * d}px;--r:${Math.random() * 360}deg;--c:${col}"></i>`); } setTimeout(() => $$('.shard', wrap).forEach(x => x.remove()), 1100); };
      const stop = () => { clearInterval(iv); if (wx.classList.contains('sq')) { wx.classList.remove('sq'); bounce(wx); } };
      wx.onpointerdown = () => {
        wx.classList.add('sq'); beep(160);
        iv = setInterval(() => {
          hold++; if (broken) return;
          if (hold === 4) { wx.classList.add('l1'); crack(); pr.textContent = '사삭… 금이 갔어요'; }
          if (hold === 8) { wx.classList.add('l2'); crack(); pr.textContent = '조금만 더!'; }
          if (hold === 12) { wx.classList.add('l3'); crack(); }
          if (hold === 15) { broken = true; shatter(); crack(); pr.textContent = '와작! 속은 말랑말랑'; }
        }, 130);
      };
      wx.onpointerup = stop; wx.onpointerleave = stop;
    };
    bar.innerHTML = '<button class="chip" id="nw">새 왁뿌볼 꺼내기</button>'; $('#nw', bar).onclick = build; build();
  },

  /* 먼작귀: 클리커 */
  clicker(st, bar) {
    let sc = 0, pw = 1, ps = 0, cur = 0;
    const CH = [[0, '#FFB36B', 0], [30, '#F7B6D8', 1], [120, '#B79CFF', 2], [400, '#7BE0B0', 0], [1000, '#FFE16B', 1]];
    const UP = [['간식 주기', '쓰다듬기 +1', 15, () => pw++], ['친구 부르기', '초당 +1', 40, () => ps++], ['리본 달기', '쓰다듬기 +3', 120, () => pw += 3], ['단체 사진', '초당 +5', 300, () => ps += 5]];
    const cost = UP.map(u => u[2]);
    st.innerHTML = '<div class="count">귀여움 <b id="sc">0</b> · 초당 <b id="ps">0</b></div><div class="clkwrap"><button class="clk" id="clk" aria-label="쓰다듬기"></button></div><div class="crew2" id="cr"></div><div class="ups" id="up"></div><p class="hint">캐릭터를 눌러 귀여움을 모으고, 점수로 업그레이드해 새 캐릭터를 만나보세요</p>';
    const ui = () => {
      $('#sc', st).textContent = Math.floor(sc); $('#ps', st).textContent = ps;
      $('#clk', st).innerHTML = ic('char', CH[cur][1], CH[cur][2]);
      $('#cr', st).innerHTML = CH.map((c, i) => `<button class="cc${sc >= c[0] || i <= cur ? '' : ' lock'}${i === cur ? ' on' : ''}" data-i="${i}" ${sc >= c[0] ? '' : 'disabled'}>${ic('char', c[1], c[2])}</button>`).join('');
      $('#up', st).innerHTML = UP.map((u, i) => `<button class="upg" data-i="${i}" ${sc >= cost[i] ? '' : 'disabled'}><b>${u[0]}</b><small>${u[1]} · ${Math.ceil(cost[i])}</small></button>`).join('');
    };
    st.onclick = e => {
      const c = e.target.closest('.cc'), u = e.target.closest('.upg'), k = e.target.closest('#clk');
      if (c) cur = +c.dataset.i;
      if (u && sc >= cost[u.dataset.i]) { const i = +u.dataset.i; sc -= cost[i]; cost[i] *= 1.45; UP[i][3](); beep(900); }
      if (k) { sc += pw; bounce(k); beep(500 + Math.random() * 200); const f = document.createElement('span'); f.className = 'fl'; f.textContent = '+' + pw; f.style.left = 30 + Math.random() * 40 + '%'; $('.clkwrap', st).appendChild(f); setTimeout(() => f.remove(), 800); }
      ui();
    };
    const iv = setInterval(() => { if (!st.isConnected) return clearInterval(iv); if (ps) { sc += ps; ui(); } }, 1000);
    bar.innerHTML = '<span class="hint">모은 점수는 이 화면에서만 유지돼요</span>'; ui();
  },

  /* 동묘 쇼핑: 가게 돌아다니기 · 흥정 · 영수증 */
  flea(st, bar, c) {
    let sh = 0, sel = null, basket = [], rc = false;
    const spent = () => basket.reduce((a, b) => a + b.p, 0);
    const aw = col => `<svg class="aw" viewBox="0 0 320 50" preserveAspectRatio="none">${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 40}" y="0" width="40" height="32" fill="${i % 2 ? '#FEFEFE' : col}"/><circle cx="${i * 40 + 20}" cy="32" r="18" fill="${i % 2 ? '#FEFEFE' : col}"/>`).join('')}</svg>`;
    const render = () => {
      if (rc) {
        st.innerHTML = `<div class="receipt"><h4>동묘 구제시장</h4><small>오늘의 쇼핑 영수증</small><hr>${basket.length ? basket.map(b => `<div class="rl"><span>${b.n}</span><span>${won(b.p)}</span></div>`).join('') : '<div class="rl"><span>산 물건 없음</span><span>-</span></div>'}<hr><div class="rl"><b>합계</b><b>${won(spent())}</b></div><div class="rl"><span>남은 돈</span><span>${won(c.budget - spent())}</span></div><div class="rl"><span>흥정 성공</span><span>${basket.filter(b => b.h).length}회</span></div><hr><small>*** 또 오세요 ***</small></div><button class="bigbtn" data-a="back">다시 쇼핑하기</button>`;
        return;
      }
      const s = c.shops[sh];
      const deal = sel ? `<b>${s.items[sel.i][1]}</b> ${won(sel.p)} <button class="chip" data-a="buy">${basket.some(b => b.n === s.items[sel.i][1]) ? '환불' : '사기'}</button><button class="chip" data-a="hag" ${sel.tried ? 'disabled' : ''}>깎아달라고 하기</button><div class="hint">${sel.m || ''}</div>` : '<span class="hint">물건을 눌러 가격을 확인하고 흥정해보세요</span>';
      st.innerHTML = `${aw(s.c)}<div class="stallname">${s.n}</div><div class="shelf">${s.items.map((it, i) => `<button class="item${basket.some(b => b.n === it[1]) ? ' in' : ''}${sel && sel.i === i ? ' pick' : ''}" data-i="${i}">${ic(it[0], it[3])}<small>${it[1]}<br>${won(it[2])}</small></button>`).join('')}</div><div class="deal">${deal}</div><div class="count">장바구니 ${basket.length}개 · 남은 돈 ${won(c.budget - spent())}</div>`;
    };
    const bars = () => { bar.innerHTML = rc ? '' : rowOf('가게 이동', c.shops.map((s, i) => `<button class="chip${i === sh ? ' on' : ''}" data-s="${i}">${s.n}</button>`).join('')) + rowOf('', '<button class="chip" data-a="rc">영수증 보기</button><button class="chip" data-a="clr">비우기</button>'); colBar(bar); };
    const act = e => {
      const b = e.target.closest('button'); if (!b) return; const d = b.dataset, s = c.shops[sh];
      if (d.s !== undefined) { sh = +d.s; sel = null; beep(400); }
      if (d.i !== undefined && b.classList.contains('item')) { const it = s.items[+d.i]; const had = basket.find(x => x.n === it[1]); sel = { i: +d.i, p: had ? had.p : it[2], tried: !!had }; }
      if (d.a === 'hag' && sel && !sel.tried) { sel.tried = true; if (Math.random() < .55) { sel.p = Math.round(s.items[sel.i][2] * (.7 + Math.random() * .2) / 100) * 100; sel.h = 1; sel.m = '“에이, 그럼 이 가격에 가져가세요!” 깎았어요'; beep(800); } else sel.m = '“그건 힘들어~ 이게 최저가예요”'; }
      if (d.a === 'buy' && sel) { const it = s.items[sel.i], at = basket.findIndex(x => x.n === it[1]); if (at > -1) basket.splice(at, 1); else if (spent() + sel.p <= c.budget) { basket.push({ n: it[1], p: sel.p, h: sel.h }); beep(600); sel = null; } else sel.m = '돈이 부족해요!'; }
      if (d.a === 'rc') rc = true; if (d.a === 'back') rc = false; if (d.a === 'clr') { basket = []; sel = null; }
      bars(); render();
    };
    st.onclick = act; bar.onclick = act; bars(); render();
  },
});
