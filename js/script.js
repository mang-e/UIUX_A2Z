/* A2Z 공통 스크립트 — 모든 페이지(index/food/play/fashion.html)에서 가장 먼저 불러와요.
   · 공통 유틸·아이콘·카테고리 정보 · 목록/상세 화면 렌더 · 라우터
   · 페이지별 코드는 js/home.js · food.js · play.js · fashion.js 에 있어요.
   · 카테고리 페이지 안에서는 해시로 목록·상세를 전환해요 (food.html , food.html#/t/0) */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const PAL = ['#FFEA00', '#1C94F5', '#F65AC2', '#7BE0B0', '#FFB36B', '#B79CFF'];
const K = '#1C1C20', W = '#FEFEFE';

const LOGO = `<svg viewBox="0 0 72 40" role="img" aria-label="A2Z"><circle cx="9" cy="31" r="5" fill="#FFEA00"/><circle cx="20" cy="31" r="5" fill="#1C94F5"/><circle cx="31" cy="31" r="5" fill="#F65AC2"/><text x="0" y="24" font-family="SUIT Variable,SUIT,sans-serif" font-weight="900" font-size="26" letter-spacing="-1.5" fill="currentColor">A2Z</text></svg>`;

/* ---------------- SVG 아이콘 (48x48) ---------------- */
const I = {
  bowl: (a = '#FFEA00') => `<path d="M5 22h38c0 11-8 19-19 19S5 33 5 22z" fill="${a}"/><ellipse cx="24" cy="22" rx="19" ry="5" fill="#E8472B"/><path d="M34 5L24 22M40 8L28 22" stroke="${K}" stroke-width="2.4" stroke-linecap="round"/>`,
  controller: (a = '#1C94F5') => `<path d="M10 14h28c5 0 8 6 9 14s-3 10-6 8-5-6-8-6H15c-3 0-5 4-8 6s-7 0-6-8 4-14 9-14z" fill="${a}"/><path d="M15 21v6M12 24h6" stroke="${W}" stroke-width="2.4" stroke-linecap="round"/><circle cx="33" cy="22" r="2.2" fill="#F65AC2"/><circle cx="38" cy="26" r="2.2" fill="#FFEA00"/>`,
  bag: (a = '#F65AC2') => `<path d="M16 16a8 8 0 0116 0" fill="none" stroke="${K}" stroke-width="3"/><rect x="8" y="16" width="32" height="27" rx="4" fill="${a}"/><rect x="8" y="27" width="32" height="5" fill="${W}"/>`,
  blob: (a = '#F65AC2') => `<path d="M7 28c-2-13 9-21 18-19s16 9 15 19-9 12-17 12S8 36 7 28z" fill="${a}"/><ellipse cx="17" cy="19" rx="5" ry="3" fill="#fff7"/><circle cx="19" cy="28" r="1.8" fill="${K}"/><circle cx="29" cy="28" r="1.8" fill="${K}"/>`,
  ball: (a = '#7BE0B0') => `<circle cx="24" cy="25" r="17" fill="${a}"/><circle cx="24" cy="25" r="17" fill="#fff" opacity=".45"/><path d="M24 8l-3 9 5 6-3 9" stroke="${K}" stroke-width="1.6" fill="none" stroke-linejoin="round"/><ellipse cx="17" cy="17" rx="5" ry="3" fill="#fff"/>`,
  char: (a = '#FFB36B', k = 0) => [`<circle cx="12" cy="15" r="6" fill="${a}"/><circle cx="36" cy="15" r="6" fill="${a}"/>`, `<ellipse cx="16" cy="10" rx="4.5" ry="10" fill="${a}"/><ellipse cx="32" cy="10" rx="4.5" ry="10" fill="${a}"/>`, `<path d="M9 24L11 6l11 10zM39 24L37 6 26 16z" fill="${a}"/>`][k % 3] + `<circle cx="24" cy="29" r="15" fill="${a}"/><circle cx="18" cy="28" r="2" fill="${K}"/><circle cx="30" cy="28" r="2" fill="${K}"/><circle cx="13.5" cy="33" r="2.5" fill="#F65AC2" opacity=".45"/><circle cx="34.5" cy="33" r="2.5" fill="#F65AC2" opacity=".45"/><path d="M22 33q2 2 4 0" stroke="${K}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`,
  charm: (a = '#FFB36B', k = 0) => `<circle cx="24" cy="8" r="6" fill="#7CC6FB" fill-opacity=".2" stroke="#7CC6FB" stroke-width="2.2"/><g transform="translate(6 11) scale(.75)">${I.char(a, k)}</g>`,
  jacket: (a = '#6B8EAD') => `<path d="M17 6L6 14l4 10 5-3v21h18V21l5 3 4-10-11-8-7 7z" fill="${a}"/><path d="M24 13v29" stroke="${K}" stroke-width="1.6"/>`,
  sneaker: (a = '#F65AC2') => `<path d="M4 31c6 0 8-6 10-10l6 4 8 2c8 1 12 4 12 8v3H4z" fill="${a}"/><path d="M4 37h40" stroke="${K}" stroke-width="3" stroke-linecap="round"/><path d="M19 25l3-4M24 27l3-4" stroke="${W}" stroke-width="2" stroke-linecap="round"/>`,
  radio: (a = '#FFB36B') => `<rect x="6" y="14" width="36" height="25" rx="4" fill="${a}"/><circle cx="17" cy="27" r="7" fill="${W}"/><path d="M30 22h8M30 27h8M30 32h8" stroke="${K}" stroke-width="2"/><path d="M32 14l8-8" stroke="${K}" stroke-width="2"/>`,
  cap: (a = '#1C94F5') => `<path d="M8 28a16 14 0 0132 0z" fill="${a}"/><path d="M6 28h38c0 5-9 6-21 4z" fill="${K}"/>`,
  book: (a = '#7BE0B0') => `<rect x="9" y="6" width="30" height="36" rx="3" fill="${a}"/><rect x="14" y="12" width="20" height="5" fill="${W}"/><path d="M9 37h30" stroke="${K}" stroke-width="2"/>`,
  shades: (a = K) => `<rect x="5" y="16" width="16" height="13" rx="5" fill="${a}"/><rect x="27" y="16" width="16" height="13" rx="5" fill="${a}"/><path d="M21 20h6" stroke="${a}" stroke-width="2.6"/>`,
  mochi: (a = '#FF5470') => `<ellipse cx="24" cy="30" rx="19" ry="13" fill="${W}" stroke="#B9BFC9" stroke-width="2"/><circle cx="24" cy="29" r="7.5" fill="${a}"/><path d="M24 22v15M16.5 29h15" stroke="#fff" stroke-opacity=".5" stroke-width="1.5"/>`,
  pizza: () => `<path d="M4 12q20-10 40 0L24 44z" fill="#FFD84D"/><path d="M4 12q20-10 40 0" stroke="#D9A441" stroke-width="5" fill="none"/><circle cx="18" cy="20" r="3.5" fill="#E8472B"/><circle cx="29" cy="18" r="3.5" fill="#E8472B"/><circle cx="23" cy="30" r="3.5" fill="#E8472B"/>`,
  loaf: () => `<path d="M8 22a8 8 0 018-8h16a8 8 0 018 8c0 3-2 4-3 5v13H11V27c-1-1-3-2-3-5z" fill="#E9A85C"/><path d="M17 20l3 6M25 20l3 6" stroke="#fff8" stroke-width="2" stroke-linecap="round"/>`,
  cbread: () => `${I.loaf()}<circle cx="35" cy="34" r="9" fill="#F65AC2"/><path d="M35 28l1.6 3.4 3.7.4-2.8 2.5.8 3.7-3.3-1.9-3.3 1.9.8-3.7-2.8-2.5 3.7-.4z" fill="${W}"/>`,
  croissant: () => `<path d="M4 34c2-14 10-22 20-22s18 8 20 22c-4 0-5-4-9-4-3 0-3 4-6 4s-3-4-6-4-3 4-6 4-4-4-7-4-4 4-6 4z" fill="#E9A85C"/><path d="M16 18l3 10M24 14v14M32 18l-3 10" stroke="#B87A35" stroke-width="2"/>`,
  bun: () => `<ellipse cx="24" cy="28" rx="18" ry="13" fill="#D9934A"/><path d="M14 23q10-8 20 0" stroke="#fff7" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
  bangle: (a = '#6FCFA5') => `<circle cx="24" cy="24" r="15" fill="none" stroke="${a}" stroke-width="9"/><path d="M13 15a15 15 0 0112-6" stroke="#fff" stroke-opacity=".8" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  jar: (a = '#8A5A3C') => `<path d="M17 9h14v5c9 3 13 9 13 17 0 8-7 13-20 13S4 39 4 31c0-8 4-14 13-17z" fill="${a}"/><rect x="14" y="5" width="20" height="6" rx="3" fill="${K}"/><path d="M11 24q13 7 26 0" stroke="#fff" stroke-opacity=".3" stroke-width="2.4" fill="none"/>`,
  shoe: (a = '#D8B58A') => `<path d="M4 36c0-9 2-17 8-21l7 3c3 2 7 4 13 5 8 1 13 4 13 11v5H4z" fill="${a}"/><path d="M4 39h40" stroke="${K}" stroke-width="3" stroke-linecap="round"/><path d="M8 15q1-4 4-3t4-1 4 1 3 3" stroke="${W}" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M17 24l13 5" stroke="${K}" stroke-width="2.6" stroke-linecap="round"/><circle cx="24" cy="26.5" r="2" fill="#E8C65A"/>`,
  tomato: () => `<circle cx="24" cy="27" r="15" fill="#E8472B"/><path d="M24 11l-5 6 5-2 5 2z" fill="#4CAF50"/>`,
  chili: () => `<path d="M12 10c18-2 28 10 26 30-10-4-22-12-26-30z" fill="#D9382B"/><path d="M12 10l-4-4" stroke="#4CAF50" stroke-width="3" stroke-linecap="round"/>`,
  leaf: () => `<path d="M24 44c-10-6-14-20-6-34 4-5 8-5 12 0 8 14 4 28-6 34z" fill="#6CC070"/><path d="M24 40V14" stroke="#fff" stroke-opacity=".6" stroke-width="2"/>`,
  mushroom: () => `<path d="M6 26a18 16 0 0136 0z" fill="#C9996B"/><rect x="18" y="26" width="12" height="14" rx="4" fill="#F1E3CF"/>`,
  beef: () => `<rect x="6" y="12" width="36" height="24" rx="10" fill="#C0504D"/><path d="M14 22h20M16 28h14" stroke="#F4B5B0" stroke-width="3" stroke-linecap="round"/>`,
  noodle: () => `<path d="M8 14c8-6 12 6 20 0s10-4 12 2M8 24c8-6 12 6 20 0s10-4 12 2M8 34c8-6 12 6 20 0s10-4 12 2" stroke="#F3D58C" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  cheese: () => `<path d="M4 36L44 16v20z" fill="#FFD84D"/><circle cx="30" cy="30" r="2.5" fill="#E6B800"/><circle cx="19" cy="33" r="2" fill="#E6B800"/>`,
  olive: () => `<circle cx="24" cy="24" r="14" fill="#3F4A2A"/><circle cx="24" cy="24" r="5" fill="#E1E5EA"/>`,
  corn: () => `<circle cx="24" cy="24" r="12" fill="#FFD23F"/><circle cx="19" cy="20" r="3" fill="#fff" opacity=".5"/>`,
  bacon: () => `<path d="M6 12q9 6 18 0t18 0v9q-9 6-18 0t-18 0z" fill="#D9534F"/><path d="M6 27q9 6 18 0t18 0v9q-9 6-18 0t-18 0z" fill="#E98A86"/>`,
  clock: () => `<circle cx="24" cy="24" r="17" fill="${W}" stroke="${K}" stroke-width="3"/><path d="M24 13v11l7 5" stroke="${K}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  camera: () => `<rect x="5" y="14" width="38" height="26" rx="5" fill="#4B4F59"/><circle cx="24" cy="27" r="9" fill="#B9BFC9"/><circle cx="24" cy="27" r="5" fill="${K}"/><rect x="14" y="9" width="10" height="6" rx="2" fill="#4B4F59"/>`,
  vase: () => `<path d="M18 6h12v7c10 4 12 12 8 20-3 6-8 9-14 9s-11-3-14-9c-4-8-2-16 8-20z" fill="#7BE0B0"/><path d="M13 25q11 5 22 0" stroke="${W}" stroke-width="2.5" fill="none"/>`,
  record: () => `<circle cx="24" cy="24" r="19" fill="${K}"/><circle cx="24" cy="24" r="7" fill="#F65AC2"/><circle cx="24" cy="24" r="1.8" fill="${W}"/><path d="M10 24a14 14 0 0114-14" stroke="#fff" stroke-opacity=".4" stroke-width="2" fill="none"/>`,
  bow: () => `<path d="M24 24L6 12v24zM24 24l18-12v24z" fill="#F65AC2"/><circle cx="24" cy="24" r="5" fill="${W}"/>`,
  star: () => `<path d="M24 4l6 13 14 2-10 10 3 14-13-7-13 7 3-14L4 19l14-2z" fill="#FFEA00"/>`,
  flower: () => `<g fill="${W}"><circle cx="24" cy="10" r="8"/><circle cx="37" cy="19" r="8"/><circle cx="32" cy="35" r="8"/><circle cx="16" cy="35" r="8"/><circle cx="11" cy="19" r="8"/></g><circle cx="24" cy="24" r="6" fill="#FFEA00"/>`,
  heart: () => `<path d="M24 42C6 28 6 12 17 11c4 0 7 3 7 6 0-3 3-6 7-6 11 1 11 17-7 31z" fill="#F65AC2"/>`,
};
const ic = (n, a, b) => `<svg class="ic" viewBox="0 0 48 48" aria-hidden="true">${I[n](a, b)}</svg>`;

const PAGE = { food: 'food.html', play: 'play.html', fashion: 'fashion.html' };
const CATS = {
  food: { n: '먹거리', i: 'bowl', d: '줄 서서 먹는 이유가 있어요. 요즘 맛집 문법을 맛보기로 체험해보세요.' },
  play: { n: '놀거리', i: 'controller', d: '손끝으로, 발품으로, 수집으로. 요즘 세대가 노는 방식을 직접 만져보세요.' },
  fashion: { n: '패션', i: 'bag', d: '입는 것을 넘어 꾸미고 고르는 즐거움. <br> 내 취향대로 조합해보세요.' },
};

const LAB = { food: 'FOOD', play: 'PLAY', fashion: 'FASHION' };

/* ---------------- 트렌드 데이터 (카테고리별 데이터는 food.js · play.js · fashion.js 에서 채워요) ---------------- */
const T = {};

/* ---------------- 공통 유틸 ---------------- */
let ac, uid = 0;
const beep = (f = 520) => { try { ac = ac || new AudioContext(); const o = ac.createOscillator(), g = ac.createGain(); o.type = 'square'; o.frequency.value = f; g.gain.setValueAtTime(.07, ac.currentTime); g.gain.exponentialRampToValueAtTime(.001, ac.currentTime + .08); o.connect(g).connect(ac.destination); o.start(); o.stop(ac.currentTime + .09); } catch (e) {} };
const noise = (sec, vol, pow) => { try { ac = ac || new AudioContext(); const n = ac.sampleRate * sec, b = ac.createBuffer(1, n, ac.sampleRate), d = b.getChannelData(0); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, pow); const s = ac.createBufferSource(), g = ac.createGain(); g.gain.value = vol; s.buffer = b; s.connect(g).connect(ac.destination); s.start(); } catch (e) {} };
const crunch = () => noise(.07, .25, 2), crack = () => noise(.12, .3, 3);
const bounce = el => { el.classList.remove('bn'); void el.offsetWidth; el.classList.add('bn'); };
const rowOf = (label, html) => `<div class="grp"><em>${label}</em>${html}</div>`;
const colBar = bar => { bar.style.flexDirection = 'column'; bar.style.alignItems = 'center'; };
const won = v => v.toLocaleString() + '원';

/* ---------------- 인터랙션 모듈 (카테고리별 모듈은 food.js · play.js · fashion.js 에서 채워요) ---------------- */
const X = {};

/* ---------------- 화면 렌더 ---------------- */
const app = $('#app'), nav = $('#nav');
$('.logo').innerHTML = LOGO;

/* 목록 카드: 세로 변은 수직, 위·아래 변은 카드마다 다른 각도의 사각형 (TL, TR, BR, BL — 영역 대비 비율) */
const GEO = [
  [[0, .0907], [.3543, 0], [.3543, .9176], [0, .993]],
  [[.3723, .0137], [.7051, .0659], [.7051, .4711], [.3723, .5275]],
  [[.7223, .0769], [1, 0], [1, .434], [.7223, .4725]],
  [[.374, .5645], [.9991, .4643], [.9991, .8969], [.374, 1]],
];
function roundedPath(pts, r) {
  const n = pts.length; let d = '';
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i + n - 1) % n], p1 = pts[i], p2 = pts[(i + 1) % n];
    const v1 = [p0[0] - p1[0], p0[1] - p1[1]], v2 = [p2[0] - p1[0], p2[1] - p1[1]], l1 = Math.hypot(...v1), l2 = Math.hypot(...v2);
    const a = [p1[0] + v1[0] / l1 * r, p1[1] + v1[1] / l1 * r], b = [p1[0] + v2[0] / l2 * r, p1[1] + v2[1] / l2 * r];
    d += `${i ? 'L' : 'M'}${a[0].toFixed(1)} ${a[1].toFixed(1)}Q${p1[0].toFixed(1)} ${p1[1].toFixed(1)} ${b[0].toFixed(1)} ${b[1].toFixed(1)}`;
  }
  return d + 'Z';
}
function layoutCards(mo) {
  const W = mo.clientWidth, H = mo.clientHeight;
  $$('.c3', mo).forEach((el, i) => {
    const g = GEO[i]; if (!g) return;
    const P = g.map(([x, y]) => [x * W, y * H]), xs = P.map(p => p[0]), ys = P.map(p => p[1]);
    const x0 = Math.min(...xs), y0 = Math.min(...ys), w = Math.max(...xs) - x0, h = Math.max(...ys) - y0;
    const Q = P.map(p => [p[0] - x0, p[1] - y0]), d = roundedPath(Q, 14), [, , BR, BL] = Q, xt = Math.min(w * .7, 340);
    Object.assign(el.style, { left: x0 + 'px', top: y0 + 'px', width: w + 'px', height: h + 'px', clipPath: `path('${d}')` });
    $('.ol', el).innerHTML = `<path d="${d}"/>`;
    const ct = $('.ct', el); ct.classList.remove('nop'); ct.style.bottom = (h - (BL[1] + (BR[1] - BL[1]) * xt / w) + 46) + 'px';
    const topEdge = g[0][1] * H - y0 + (g[1][1] - g[0][1]) * H * (w - 40) / w;
    if (h - parseFloat(ct.style.bottom) - ct.offsetHeight < topEdge + 28) ct.classList.add('nop');
  });
}
function category(k) {
  const C = CATS[k], ts = T[k];
  const chev = '<svg viewBox="0 0 8 12" width="7" height="11"><path d="M1.5 1.5l4.5 4.5-4.5 4.5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const card = (t, i) => `<a class="c3${t.img ? ' has-img' : ''}" href="${PAGE[k]}#/t/${i}"><div class="ph"${t.img ? ` style="background-image:url(${t.img})"` : ''}></div><svg class="ol"></svg><div class="ct"><h3>${t.t}</h3><p>${t.lead.split('.')[0]}.</p><span class="vm">VIEW MORE ${chev}</span></div></a>`;
  app.innerHTML = `<section class="view cat4"><div class="cat4-head"><span class="tagp ${k}">${LAB[k]}</span><h2>${C.n}</h2><p>${C.d}</p></div><div class="mo2">${ts.slice(0, 4).map(card).join('')}</div></section>`;
  const mo = $('.mo2'); layoutCards(mo); new ResizeObserver(() => layoutCards(mo)).observe(mo);
}

function trend(k, i) {
  const list = T[k], t = list[i], prev = list[(i + list.length - 1) % list.length], next = list[(i + 1) % list.length];
  app.innerHTML = `<section class="view tpage"><div class="tw"><a class="back" href="${PAGE[k]}">← ${CATS[k].n} 목록</a>
    <h1>${t.t}</h1><p class="lead">${t.lead}</p>${t.body.map(p => `<p class="tx">${p}</p>`).join('')}
    <div class="stage-wrap"><div class="stage" id="st"></div><div class="stage-bar" id="bar"></div></div>
    <div class="pager"><a href="${PAGE[k]}#/t/${(i + list.length - 1) % list.length}">← ${prev.t}</a><a href="${PAGE[k]}#/t/${(i + 1) % list.length}">${next.t} →</a></div></div></section>`;
  X[t.type]($('#st'), $('#bar'), t);
}

function route() {
  const page = document.body.dataset.page || 'home';
  const cat = CATS[page] ? page : null;
  const [a, i] = location.hash.replace('#/', '').split('/');
  document.body.className = cat ? '' : 'home'; document.body.dataset.c = cat || '';
  nav.innerHTML = Object.keys(CATS).map(c => `<a href="${PAGE[c]}" class="${c === cat ? 'on' : ''}" style="${c === cat ? '' : ''}">${CATS[c].n}</a>`).join('');
  scrollTo(0, 0);
  if (!cat) home(); else if (a === 't') trend(cat, +i || 0); else category(cat);
}

addEventListener('hashchange', route);
/* 페이지별 스크립트(home.js 등)가 모두 로드된 뒤 첫 화면을 그려요 */
addEventListener('DOMContentLoaded', route);
