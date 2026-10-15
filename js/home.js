/* A2Z 메인(index.html) 전용 스크립트 — 홈 화면 · 사이트 소개 · 튜토리얼 커서 · 3D 오브젝트. js/script.js 다음에 불러와요. */

const smooth = pts => {
  const n = pts.length; let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i + n - 1) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    d += `C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)} ${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)} ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)} ${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)} ${p2[0]} ${p2[1]}`;
  }
  return `<svg viewBox="-3 -3 106 106" preserveAspectRatio="none"><path d="${d}z"/></svg>`;
};
const BLOB = {
  food: smooth([[30, 8], [70, 2], [100, 20], [97, 52], [72, 74], [52, 100], [36, 82], [27, 58], [2, 42], [8, 18]]),
  play: smooth([[46, 0], [80, 6], [100, 32], [96, 66], [70, 86], [40, 100], [8, 94], [12, 62], [0, 30], [22, 12]]),
  fashion: smooth([[58, 0], [96, 24], [100, 66], [68, 100], [22, 94], [0, 50], [24, 10]]),
};

const burst = (n, ro, ri) => { let p = ''; for (let i = 0; i < n * 2; i++) { const a = Math.PI * i / n - Math.PI / 2, r = i % 2 ? ri : ro; p += `${i ? 'L' : 'M'}${(50 + r * Math.cos(a)).toFixed(1)} ${(50 + r * Math.sin(a)).toFixed(1)}`; } return p + 'z'; };
const BADGE = { food: ['FOOD', '맛보기', '#FFEA00', K], play: ['PLAY', '즐기기', '#1C94F5', W], fashion: ['FASHION', '꾸미기', '#F65AC2', K] };
const badge = k => { const [en, ko, c, tc] = BADGE[k]; return `<span class="bd"><svg viewBox="0 0 100 100"><path d="${burst(14, 48, 36)}" fill="${c}" stroke="${K}" stroke-width="1.6" stroke-linejoin="round"/><text x="50" y="48" text-anchor="middle" font-size="${en.length > 5 ? 12 : 16}" font-weight="800" fill="${tc}" font-family="SUIT Variable,sans-serif">${en}</text><text x="50" y="63" text-anchor="middle" font-size="11" font-weight="800" fill="${tc}" font-family="SUIT Variable,sans-serif">${ko}</text></svg></span>`; };
const POP = [[10, 36, 'burst', '#FFEA00', 34], [66, 11, 'spark', '#1C94F5', 30], [36, 80, 'dot', '#FFEA00', 24], [93, 24, 'ring', '#F65AC2', 26], [53, 58, 'spark', '#F65AC2', 22], [24, 88, 'burst', '#1C94F5', 22]];
const popSvg = (t, c) => t === 'burst' ? `<svg viewBox="0 0 100 100"><path d="${burst(8, 48, 26)}" fill="${c}" stroke="${K}" stroke-width="3" stroke-linejoin="round"/></svg>`
  : t === 'spark' ? `<svg viewBox="0 0 24 24"><path d="M12 1C13 8 16 11 23 12C16 13 13 16 12 23C11 16 8 13 1 12C8 11 11 8 12 1z" fill="${c}" stroke="${K}" stroke-width="1.2" stroke-linejoin="round"/></svg>`
  : `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="${t === 'dot' ? c : 'none'}" stroke="${t === 'dot' ? K : c}" stroke-width="${t === 'dot' ? 1.4 : 3}"/></svg>`;
const pops = () => POP.map(([x, y, t, c, w]) => `<span class="pp" style="left:${x}%;top:${y}%;width:${w}px">${popSvg(t, c)}</span>`).join('');

const ABOUT_STEPS = { food: ['읽고', '맛보고'], play: ['읽고', '즐기고'], fashion: ['읽고', '꾸미고'] };
function about(ks) {
  const cat = k => `<a class="ab-cat ${k}" href="${PAGE[k]}"><span class="tagp ${k}">${LAB[k]}</span><h4>${CATS[k].n}</h4><p>${CATS[k].d}</p><span class="view-more">VIEW →</span></a>`;
  return `<section class="about" id="about">
    <div class="ab-in">
      <div class="ab-head">
        <span class="ab-kick">ABOUT A2Z</span>
        <h2 class="ab-logo"><span>A</span><em>2</em><span>Z</span></h2>
        <p class="ab-sub">A to Z에서 <b>to</b>를 <b>2</b>로 바꿨어요.<br>A부터 Z까지, 전 세대가 함께 최신 트렌드를 경험하는 놀이터예요.</p>
      </div>
      <div class="ab-grid">
        <div class="ab-card why"><span class="tagp play">NAME</span><h3>왜 A2Z일까요?</h3><p>가장 앞의 A부터 맨 끝의 Z까지, 알파벳 전체를 다 아우르듯 <b>모든 세대</b>가 한자리에 모인다는 뜻이에요. 가운데의 <em>to</em>는 숫자 <em>2</em>로 바꿔서, 세대와 세대 사이를 잇는 다리이자 &lsquo;둘이 함께&rsquo;라는 의미를 담았어요.</p></div>
        <div class="ab-card young"><span class="tagp food">10대 · 20대</span><h3>마음껏 즐겨요</h3><p>지금 가장 핫한 유행을 읽고 직접 해보면서 내 취향을 마음껏 즐겨보세요.</p></div>
        <div class="ab-card elder"><span class="tagp fashion">윗세대</span><h3>왜 좋아하는지 공감해요</h3><p>직접 체험해 보면 &ldquo;요즘 애들은 왜 이런 걸 좋아할까?&rdquo; 하던 궁금증이 &ldquo;아, 그래서 좋아하는구나&rdquo; 하는 공감으로 바뀌어요.</p></div>
      </div>
      <div class="ab-how">
        <div class="ab-how-t"><span class="ab-kick">HOW IT WORKS</span><h3>세 가지 카테고리,<br>읽고 바로 체험해요</h3><p>카테고리마다 요즘 유행하는 트렌드를 골라 설명을 읽고, 그 자리에서 간단한 체험까지 해볼 수 있어요.</p></div>
        <div class="ab-cats">${ks.map(cat).join('')}</div>
      </div>
      <a class="ab-top" href="#/" onclick="scrollTo({top:0,behavior:'smooth'});return false">↑ 처음으로</a>
    </div>
  </section>`;
}

function home() {
  const ks = Object.keys(CATS);
  app.innerHTML = `<section class="view space">${pops()}${ks.map(k => `<a class="hb ${k}" href="${PAGE[k]}" aria-label="${CATS[k].n}"><div class="shape">${BLOB[k]}</div>${badge(k)}<div class="txt"><span class="tagp ${k}">${LAB[k]}</span><h2>${CATS[k].n}</h2><p>${CATS[k].d}</p><span class="vlink">VIEW <svg viewBox="0 0 20 12" width="20" height="12" aria-hidden="true"><path d="M1 6h17M13 1.5L18 6l-5 4.5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div></a>`).join('')}
    <div class="ripple"></div>
    <svg class="cursor" viewBox="0 0 24 24"><path d="M5 2l14 11-6.5 1.2L9.8 21z" fill="#FEFEFE" stroke="#1C1C20" stroke-width="1.5" stroke-linejoin="round"/></svg>
    <div class="tip">오브젝트를 클릭해보세요</div>
    <a class="cue" href="#about" aria-label="사이트 소개로 스크롤"><span>SCROLL</span><svg viewBox="0 0 12 16" width="12" height="16"><path d="M6 1v13M1.5 9.5L6 14l4.5-4.5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></a></section>${about(ks)}`;
  const sp = $('.space');
  space3d(sp);
  if (!$('.gl', sp)) $$('.shape', sp).forEach((s, i) => s.insertAdjacentHTML('beforeend', ic(CATS[ks[i]].i)));
  tutorial(sp);
}

async function tutorial(sp) {
  const cur = $('.cursor', sp), rp = $('.ripple', sp), tip = $('.tip', sp), orbs = $$('.hb', sp); let stop = false, i = 0;
  orbs.forEach(o => o.addEventListener('pointerenter', () => { stop = true; cur.remove(); rp.remove(); tip.classList.add('off'); }));
  await sleep(900);
  while (!stop && sp.isConnected) {
    const o = orbs[i++ % 3], r = $('.shape', o).getBoundingClientRect(), s = sp.getBoundingClientRect();
    const x = r.left - s.left + r.width * .5, y = r.top - s.top + r.height * .5;
    try {
      await cur.animate([{ transform: `translate(${s.width * .5}px,${s.height * .95}px)`, opacity: 0 }, { opacity: 1, offset: .2 }, { transform: `translate(${x}px,${y}px)`, opacity: 1 }], { duration: 1500, easing: 'ease-in-out', fill: 'forwards' }).finished;
      if (stop) break;
      rp.style.left = x + 'px'; rp.style.top = y + 'px';
      rp.animate([{ transform: 'scale(.4)', opacity: 1 }, { transform: 'scale(2)', opacity: 0 }], 700);
      sp.dispatchEvent(new CustomEvent('pulse', { detail: orbs.indexOf(o) }));
      $('.shape', o).animate([{ scale: 1 }, { scale: .9 }, { scale: 1.08 }, { scale: 1 }], 500);
      await sleep(1200); if (stop) break;
      await cur.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: 'forwards' }).finished;
      await sleep(500);
    } catch (e) { break; }
  }
}

document.addEventListener('click', e => {
  const a = e.target.closest('a.cue'); if (!a) return;
  e.preventDefault(); const t = $('#about'); if (t) t.scrollIntoView({ behavior: 'smooth' });
});

/* ---------------- 메인 3D (Three.js r128) ----------------
   먹거리=라면 그릇 / 놀거리=게임 컨트롤러 / 패션=모자+선글라스.
   각 .hb 블록 안의 .shape(도형) 중심에 오브젝트를 올려둔다(DOM 위치를 읽어 3D 좌표로 변환). */
function space3d(sp) {
  if (typeof THREE === 'undefined') return;
  let R; try { R = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return; }
  R.setPixelRatio(Math.min(devicePixelRatio, 2)); R.outputEncoding = THREE.sRGBEncoding;
  const cv = R.domElement; cv.className = 'gl'; sp.appendChild(cv);
  const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(45, 1, .1, 100); cam.position.z = 10;
  scene.add(new THREE.AmbientLight(0xffffff, .85));
  const dl = new THREE.DirectionalLight(0xffffff, .8); dl.position.set(3, 5, 6); scene.add(dl);
  const S = r => new THREE.SphereGeometry(r, 32, 24), B = (x, y, z) => new THREE.BoxGeometry(x, y, z);
  const add = (g, geo, col, pos = [0, 0, 0], sc = [1, 1, 1]) => {
    const m = new THREE.Mesh(geo, typeof col === 'object' ? col : new THREE.MeshStandardMaterial({ color: col, roughness: .4 }));
    m.position.set(...pos); m.scale.set(...sc); g.add(m); return m;
  };
  const food = g => {
    add(g, new THREE.LatheGeometry([[0, -.7], [.55, -.7], [.9, -.45], [1.25, .35], [1.32, .5], [1.2, .5], [.85, -.3], [0, -.35]].map(p => new THREE.Vector2(...p)), 48),
      new THREE.MeshStandardMaterial({ color: 0xFFEA00, roughness: .35, side: THREE.DoubleSide }));
    add(g, new THREE.CircleGeometry(1.1, 40), 0xE8472B, [0, .3, 0]).rotation.x = -Math.PI / 2;
    add(g, new THREE.TorusGeometry(.45, .09, 10, 30), 0xFFD27A, [.25, .34, -.1]).rotation.x = Math.PI / 2;
    add(g, S(.3), 0xFEFEFE, [-.4, .4, .2], [1, .7, 1]); add(g, S(.14), 0xFFB300, [-.4, .55, .2]);
    add(g, S(.25), 0x4CAF50, [.55, .42, .5], [1, .6, 1]);
    [.3, .6].forEach(z => add(g, new THREE.CylinderGeometry(.04, .04, 2.9, 8), 0x1C1C20, [0, .62, z]).rotation.z = Math.PI / 2);
  };
  const play = g => {
    add(g, S(1), 0x1C94F5, [0, 0, 0], [1.45, .45, .85]);
    [-1, 1].forEach(s => add(g, S(1), 0x1C94F5, [s * 1.0, -.02, .62], [.5, .42, .95]));
    add(g, B(.55, .1, .17), 0xFEFEFE, [-.75, .43, -.1]); add(g, B(.17, .1, .55), 0xFEFEFE, [-.75, .43, -.1]);
    [[.2, 0, 0xF65AC2], [-.2, 0, 0xFFEA00], [0, .2, 0x7BE0B0], [0, -.2, 0xFEFEFE]].forEach(([x, z, c]) => add(g, S(.12), c, [.75 + x, .43, -.1 + z]));
    [-.4, .4].forEach(x => add(g, new THREE.CylinderGeometry(.17, .2, .14, 20), 0x1C1C20, [x, .43, .35]));
  };
  const fashion = g => {
    add(g, new THREE.SphereGeometry(1.1, 32, 20, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xF65AC2, roughness: .5, side: THREE.DoubleSide }), [0, 0, 0], [1, .9, 1]);
    add(g, new THREE.CylinderGeometry(1.2, 1.2, .1, 32, 1, false, -Math.PI / 2, Math.PI), 0xE04AAE, [0, -.02, .05], [1, 1, 1.45]);
    add(g, S(.12), 0xFEFEFE, [0, .98, 0]);
    [-1, 1].forEach(s => { add(g, S(1), 0xFEFEFE, [s * .65, -.95, 1.0], [.55, .4, .1]); add(g, S(1), 0x1C1C20, [s * .65, -.95, 1.07], [.46, .32, .06]); });
    add(g, B(.3, .07, .07), 0xFEFEFE, [0, -.88, 1.0]);
  };
  const objs = [['food', food, .5, 0], ['play', play, 1.0, 0], ['fashion', fashion, .35, .15]].map(([k, fn, tx, ty]) => {
    const root = new THREE.Group(), tilt = new THREE.Group(), spin = new THREE.Group();
    fn(spin); tilt.rotation.x = tx; tilt.position.y = ty; tilt.add(spin); root.add(tilt); scene.add(root);
    const b = $(`.hb.${k}`, sp);
    return { root, tilt, spin, tx, h: 0, p: 0, yaw: 0, s: 1, b, sh: $('.shape', b) };
  });

  let W, H, pu;
  const size = () => { W = sp.clientWidth; H = sp.clientHeight; R.setSize(W, H, false); cam.aspect = W / H; cam.updateProjectionMatrix(); pu = H / 8.284; };
  size(); const ro = new ResizeObserver(size); ro.observe(sp);

  const mouse = { x: 0, y: 0 }; let hov = -1, t0 = performance.now();
  sp.addEventListener('pointermove', e => { const r = sp.getBoundingClientRect(); mouse.x = (e.clientX - r.left) / r.width - .5; mouse.y = (e.clientY - r.top) / r.height - .5; });
  sp.addEventListener('pulse', e => objs[e.detail].p = 1);
  objs.forEach((o, i) => { ['pointerenter', 'focus'].forEach(ev => o.b.addEventListener(ev, () => hov = i)); ['pointerleave', 'blur'].forEach(ev => o.b.addEventListener(ev, () => hov = -1)); });

  const tick = t => {
    if (!sp.isConnected) { ro.disconnect(); R.dispose(); return; }
    const d = Math.min((t - t0) / 1000, .05); t0 = t;
    const sr = sp.getBoundingClientRect();
    objs.forEach((o, i) => {
      const r = o.sh.getBoundingClientRect();   // 도형 중심 → 3D 좌표
      const cx = r.left - sr.left + r.width / 2, cy = r.top - sr.top + r.height / 2;
      o.s = Math.min(r.width, r.height) * 1.0 / (3.3 * pu);
      o.h += ((hov === i ? 1 : 0) - o.h) * .12; o.p *= .9; o.yaw += d * o.h * 3;
      o.root.scale.setScalar(o.s * (1 + .12 * o.h - .14 * o.p));
      o.root.position.set((cx - W / 2) / pu, -(cy - H / 2) / pu + Math.sin(t / 900 + i * 2) * .1, 0);
      o.spin.rotation.y = Math.sin(t / 1400 + i * 2) * .4 + mouse.x * .5 + o.yaw;
      o.tilt.rotation.x = o.tx + mouse.y * .25;
    });
    R.render(scene, cam); requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
