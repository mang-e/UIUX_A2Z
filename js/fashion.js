
/* A2Z 패션 전용 스크립트
   옥 / 메지루시 / 젤리슈즈 / 볼펜
*/

/* ---------------- 트렌드 데이터 ---------------- */

T.fashion = [
  {
    t: '옥',
    type: 'jade',
    lead: '옥을 팔찌, 목걸이, 반지 같은 패션 소품으로 즐기는 흐름이에요.',
    body: [
      '맑고 은은한 옥빛이 어떤 옷에도 포인트가 되어, 전통 소재가 요즘 감각의 액세서리로 다시 주목받고 있어요. 팔찌, 펜던트, 귀걸이, 반지로 부담 없이 착용할 수 있어요.',
      '옥가락지나 노리개를 아껴 두던 마음과 이어지는 취향이에요. 아래에서 옥 구슬을 골라 줄에 끼우고, 나만의 옥 팔찌를 완성해보세요.'
    ],
    talk: '집에 오래 전해 내려온 소품이나 액세서리가 있나요? 요즘 스타일에 어떻게 어울릴지 이야기해봐요.'
  },

  {
    t: '메지루시',
    type: 'decor',
    items: [
      { n: '우산', a: 'umb', at: [154, 278] },
      { n: '가방', a: 'bag', at: [229, 112] },
      { n: '텀블러', a: 'tum', at: [280, 128] }
    ],
    colors: [],
    parts: [
      'charm:#FFB36B:0',
      'charm:#F7B6D8:1',
      'charm:#B79CFF:2',
      'charm:#7BE0B0:0',
      'charm:#FFE16B:2',
      'charm:#9CCBF5:1'
    ],
    lead: '',
    body: [],
    talk: ''
  },

  {
    t: '젤리슈즈 꾸미기',
    type: 'decor',
    items: [
      { n: '젤리슈즈', a: 'shoe', at: [188, 164] }
    ],
    colors: [
      '#F7A8D8', '#9CCBF5', '#C9F5E1',
      '#E1E5EA', '#FFE16B'
    ],
    parts: [
      'star', 'heart', 'flower', 'bow',
      'charm:#FFB36B:0',
      'charm:#B79CFF:2'
    ],
    lead: '말랑한 젤리 소재 신발에 장식을 달아 꾸미는 유행이에요.',
    body: [
      '반투명한 젤리 신발은 색감이 맑고 가벼워서 여름뿐 아니라 일상에서도 인기예요. 신발 구멍에 작은 장식을 꽂아 나만의 신발로 만드는 재미가 있어요.',
      '어릴 적 신던 젤리 샌들의 추억이 새로운 방식으로 돌아온 셈이에요. 아래에서 색을 고르고 장식을 드래그해 원하는 곳에 달아보세요.'
    ],
    talk: '어릴 적 신던 신발 중 기억에 남는 것이 있나요? 요즘 신발과 비교해봐요.'
  },

  {
    t: '볼펜 꾸미기',
    type: 'decor',
    items: [
      { n: '볼펜', a: 'pen', at: [180, 165] }
    ],
    colors: [
      '#1C94F5', '#F65AC2', '#FFEA00',
      '#1C1C20', '#7BE0B0'
    ],
    parts: [
      'star', 'heart', 'flower', 'bow',
      'charm:#FFB36B:0',
      'charm:#B79CFF:2'
    ],
    lead: '평범한 볼펜에 스티커와 장식을 더해 나만의 펜으로 만드는 놀이예요.',
    body: [
      '볼펜에 스티커를 붙이고 작은 장식을 달아 꾸미는 놀이가 인기예요. 매일 쓰는 도구를 내 취향으로 바꾸면 필기하는 시간이 조금 더 즐거워져요.',
      '다이어리 꾸미기나 필통 꾸미기의 연장선이라 세대 구분 없이 즐길 수 있어요. 아래에서 펜 색을 고르고 장식을 드래그해 붙여보세요.'
    ],
    talk: '아끼는 문구나 필기도구가 있나요? 좋아하는 이유를 이야기해봐요.'
  }
];


/* ---------------- 소품 SVG 도안 ---------------- */

const ART = {
  umb: _c => `
    <defs>
      <linearGradient id="mjUmbCanopy" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#DFEAF0"/>
        <stop offset="52%" stop-color="#B7CEDB"/>
        <stop offset="100%" stop-color="#8EAAB9"/>
      </linearGradient>
      <linearGradient id="mjUmbHandle" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#705C50"/>
        <stop offset="45%" stop-color="#A18A75"/>
        <stop offset="100%" stop-color="#69574B"/>
      </linearGradient>
      <clipPath id="mjUmbClip">
        <path d="M31 151 C57 94 111 45 180 37
          C249 45 303 94 329 151
          C314 153 306 144 290 144
          C274 144 267 153 251 153
          C235 153 226 144 210 144
          C194 144 188 153 172 153
          C156 153 147 144 131 144
          C115 144 107 153 91 153
          C75 153 67 144 51 144
          C43 144 37 149 31 151Z"/>
      </clipPath>
    </defs>

    <ellipse cx="180" cy="303" rx="23" ry="3"
      fill="#23313A" opacity=".07"/>

    <path d="M31 151 C57 94 111 45 180 37
      C249 45 303 94 329 151
      C314 153 306 144 290 144
      C274 144 267 153 251 153
      C235 153 226 144 210 144
      C194 144 188 153 172 153
      C156 153 147 144 131 144
      C115 144 107 153 91 153
      C75 153 67 144 51 144
      C43 144 37 149 31 151Z"
      fill="url(#mjUmbCanopy)"
      stroke="#829EAC" stroke-width="1.3"/>

    <g clip-path="url(#mjUmbClip)">
      <path d="M180 37 C143 70 119 105 108 148
        L148 153 C159 107 169 64 180 37Z"
        fill="#FFF" opacity=".21"/>

      <path d="M180 37 C205 71 226 107 251 153
        L210 144 C201 101 191 62 180 37Z"
        fill="#688B9D" opacity=".16"/>

      <g fill="none" stroke="#6D8B9B"
        stroke-opacity=".53" stroke-width="1.15">
        <path d="M180 41 L108 146"/>
        <path d="M180 41 L148 151"/>
        <path d="M180 41 L210 144"/>
        <path d="M180 41 L251 151"/>
        <path d="M180 41 L290 145"/>
        <path d="M180 41 L51 145"/>
      </g>

      <path d="M67 123 C98 80 130 57 157 47"
        fill="none" stroke="#FFF" stroke-width="2.5"
        stroke-linecap="round" opacity=".28"/>
    </g>

    <path d="M31 151
      C43 149 45 144 51 144
      C67 144 75 153 91 153
      C107 153 115 144 131 144
      C147 144 156 153 172 153
      C188 153 194 144 210 144
      C226 144 235 153 251 153
      C267 153 274 144 290 144
      C306 144 314 153 329 151"
      fill="none" stroke="#7E9CAB" stroke-width="1.5"/>

    <circle cx="180" cy="39" r="5.5" fill="#647E8C"/>
    <circle cx="180" cy="38" r="2.7" fill="#DCE8ED"/>

    <path d="M180 148 V164" stroke="#89959A"
      stroke-width="9" stroke-linecap="round"/>

    <path d="M180 157 V263
      C180 278 170 288 156 288
      C145 288 143 277 150 270"
      fill="none" stroke="url(#mjUmbHandle)"
      stroke-width="9" stroke-linecap="round"/>

    <path d="M177 165 V261
      C177 272 170 280 158 282"
      fill="none" stroke="#D9C6B6"
      stroke-width="1.8" opacity=".65"/>
  `,

  bag: _c => `
    <defs>
      <linearGradient id="mjBagBody" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#E9D9C2"/>
        <stop offset="56%" stop-color="#D3BFA4"/>
        <stop offset="100%" stop-color="#BBA489"/>
      </linearGradient>
      <linearGradient id="mjBagHandle" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#8D735B"/>
        <stop offset="50%" stop-color="#AE9274"/>
        <stop offset="100%" stop-color="#856B54"/>
      </linearGradient>
      <linearGradient id="mjBagPocket" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#D4BEA0"/>
        <stop offset="100%" stop-color="#C5AD8F"/>
      </linearGradient>
    </defs>

    <ellipse cx="180" cy="295" rx="83" ry="5"
      fill="#3A3026" opacity=".07"/>

    <path d="M128 123 C128 76 145 53 180 53
      C215 53 232 76 232 123"
      fill="none" stroke="url(#mjBagHandle)"
      stroke-width="15" stroke-linecap="round"/>

    <path d="M132 119 C132 81 148 60 180 60
      C212 60 228 81 228 119"
      fill="none" stroke="#E5D4BD"
      stroke-width="3" stroke-linecap="round" opacity=".8"/>

    <path d="M103 110 Q92 110 91 123
      L83 268 Q82 285 100 287
      H260 Q278 285 277 268
      L269 123 Q268 110 257 110Z"
      fill="url(#mjBagBody)" stroke="#A68E73"
      stroke-width="1.5" stroke-linejoin="round"/>

    <path d="M256 117 L264 273 Q264 279 255 280"
      fill="none" stroke="#A68D70" stroke-width="2" opacity=".6"/>

    <path d="M95 124 Q180 131 273 124"
      fill="none" stroke="#AD9478" stroke-width="1.7"/>

    <path d="M99 131 Q180 138 269 131"
      fill="none" stroke="#F0E3D2" stroke-width="1.3"/>

    <g stroke="#F9EFE2" stroke-width="1"
      stroke-linecap="round" opacity=".24">
      <path d="M111 147 L105 245"/>
      <path d="M119 151 L115 252"/>
      <path d="M246 150 L252 255"/>
      <path d="M253 148 L259 237"/>
    </g>

    <path d="M125 183 Q125 178 132 178
      H228 Q235 178 235 185
      V244 Q235 250 228 250
      H132 Q125 250 125 244Z"
      fill="url(#mjBagPocket)" stroke="#B39A7C" stroke-width="1.3"/>

    <path d="M130 187 H230" fill="none"
      stroke="#EBDDCA" stroke-width="1.6"/>

    <path d="M132 193 V240 Q132 244 137 244
      H223 Q228 244 228 240 V193"
      fill="none" stroke="#9D8367" stroke-width="1"
      stroke-dasharray="2 4" stroke-linecap="round"/>

    <g>
      <rect x="118" y="107" width="20" height="24" rx="4"
        fill="#B4997C" stroke="#967A60"/>

      <rect x="222" y="107" width="20" height="24" rx="4"
        fill="#B4997C" stroke="#967A60"/>

      <path d="M123 112 V125 M133 112 V125
        M227 112 V125 M237 112 V125"
        stroke="#E8D6BF" stroke-width="1.1"/>

      <circle cx="128" cy="118" r="2" fill="#80674F"/>
      <circle cx="232" cy="118" r="2" fill="#80674F"/>
    </g>

    <path d="M101 275 Q180 281 259 275"
      fill="none" stroke="#AA9073" stroke-width="1.3"/>
  `,

  tum: _c => `
    <defs>
      <linearGradient id="mjTumBody" x1="0" y1="0" x2="1" y2=".2">
        <stop offset="0%" stop-color="#AFC9BC"/>
        <stop offset="30%" stop-color="#D8E7DE"/>
        <stop offset="72%" stop-color="#C5D9CE"/>
        <stop offset="100%" stop-color="#94B5A6"/>
      </linearGradient>
      <linearGradient id="mjTumHandle" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#8AA99A"/>
        <stop offset="55%" stop-color="#D9E7DE"/>
        <stop offset="100%" stop-color="#89A998"/>
      </linearGradient>
      <linearGradient id="mjTumLid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#566B63"/>
        <stop offset="48%" stop-color="#394C45"/>
        <stop offset="100%" stop-color="#293B35"/>
      </linearGradient>
    </defs>

    <ellipse cx="180" cy="296" rx="57" ry="4"
      fill="#24352D" opacity=".07"/>

    <path d="M237 117 H265
      C284 117 296 131 296 149
      V171 C296 190 284 203 265 203 H236"
      fill="none" stroke="#8AA99A" stroke-width="13"
      stroke-linecap="round" stroke-linejoin="round"/>

    <path d="M241 121 H265
      C281 121 291 134 291 149
      V171 C291 186 281 199 265 199 H241"
      fill="none" stroke="url(#mjTumHandle)"
      stroke-width="5" stroke-linecap="round"/>

    <path d="M269 127 C282 130 285 139 285 150
      V171 C285 182 280 189 269 193"
      fill="none" stroke="#6F8F80" stroke-width="1.2" opacity=".55"/>

    <path d="M119 93 H244 L231 276
      Q230 290 215 290 H148
      Q133 290 132 276Z"
      fill="url(#mjTumBody)" stroke="#8AA99A"
      stroke-width="1.5" stroke-linejoin="round"/>

    <path d="M135 111 L144 264"
      fill="none" stroke="#F7FCF8"
      stroke-width="7" stroke-linecap="round" opacity=".48"/>

    <path d="M151 112 L158 253"
      fill="none" stroke="#FFF"
      stroke-width="1.5" stroke-linecap="round" opacity=".5"/>

    <g stroke="#799F8D" stroke-width="1.2" opacity=".55">
      <path d="M199 183 H216"/>
      <path d="M204 194 H216"/>
      <path d="M199 205 H216"/>
      <path d="M204 216 H216"/>
    </g>

    <path d="M134 269 Q181 275 229 269"
      fill="none" stroke="#87AA98" stroke-width="2"/>

    <path d="M139 280 Q181 285 224 280"
      fill="none" stroke="#E3EFE8" stroke-width="1.4"/>

    <path d="M111 78 Q111 71 119 71 H244
      Q252 71 252 78 V94 H111Z"
      fill="url(#mjTumLid)" stroke="#344941" stroke-width="1.3"/>

    <path d="M116 79 H247" fill="none"
      stroke="#A4B9AD" stroke-width="1.5"/>

    <path d="M117 88 H246" fill="none"
      stroke="#263A32" stroke-width="1.3"/>

    <rect x="119" y="62" width="125" height="12" rx="5"
      fill="#50675D" stroke="#344941" stroke-width="1.2"/>

    <path d="M127 65 H235" fill="none"
      stroke="#80968B" stroke-width="1.3" stroke-linecap="round"/>

    <path d="M177 64 V35" stroke="#6E8C7D"
      stroke-width="9" stroke-linecap="round"/>

    <path d="M175 61 V37" stroke="#DCE9E0"
      stroke-width="2" stroke-linecap="round"/>

    <path d="M173 34 H181" stroke="#617D6E"
      stroke-width="2" stroke-linecap="round"/>
  `,

  /* 기존 젤리슈즈 도안 */
  shoe: c => `
    <path d="M30 252C30 202 56 176 100 172
      C138 168 150 150 176 138
      C210 122 238 134 258 162
      C278 192 320 202 334 252z"
      fill="${c}" fill-opacity=".78"/>

    <path d="M30 252H334V266
      Q334 286 312 286H52Q30 286 30 266z"
      fill="${c}"/>

    <path d="M118 176Q188 150 252 170"
      stroke="${c}" stroke-width="18" fill="none"
      stroke-linecap="round"/>

    <path d="M60 214Q110 190 168 200"
      stroke="#fff" stroke-opacity=".55"
      stroke-width="8" fill="none" stroke-linecap="round"/>

    <g fill="#fff" fill-opacity=".85">
      <circle cx="150" cy="170" r="5"/>
      <circle cx="188" cy="164" r="5"/>
      <circle cx="226" cy="168" r="5"/>
      <circle cx="86" cy="226" r="5"/>
      <circle cx="262" cy="226" r="5"/>
    </g>
  `,

  /* 기존 볼펜 도안 */
  pen: c => `
    <g transform="rotate(-24 180 165)">
      <rect x="70" y="150" width="230" height="30"
        rx="15" fill="${c}"/>

      <rect x="70" y="150" width="60" height="30"
        fill="${K}" fill-opacity=".18"/>

      <rect x="250" y="146" width="22" height="38"
        rx="6" fill="#fff" fill-opacity=".6"/>

      <path d="M70 150L30 165L70 180z" fill="${K}"/>

      <rect x="300" y="157" width="22" height="16"
        rx="4" fill="${K}"/>

      <path d="M96 158H240" stroke="#fff"
        stroke-opacity=".5" stroke-width="4"
        stroke-linecap="round"/>
    </g>
  `
};


/* ---------------- 인터랙션 모듈 ---------------- */

Object.assign(X, {

  /* 옥 팔찌 만들기 */
  jade(st, bar) {
    const U = 288, KN = 14, B = U - KN;
    const X0 = 36, CX = 180, CY = 165;
    const GAP = 1, RT = 80;
    const SK = RT / (U / (2 * Math.PI));

    const BD = [
      { n: '비취옥 구슬', w: 28, c: ['#C9F5E1', '#5FCFA0', '#1F8F65'] },
      { n: '백옥 대롱', w: 42, c: ['#FFFFFF', '#E4F3EA', '#9CC8B2'] },
      { n: '자옥 고리', w: 30, c: ['#EBDDFB', '#B79CFF', '#6E4FB5'] },
      { n: '녹옥 마름모', w: 30, c: ['#8FDCB0', '#2FA06A', '#14603F'] }
    ];

    const defs = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
      BD.map((b, i) => `
        <radialGradient id="jbg${i}" cx=".5" cy=".5" r=".7" fx=".3" fy=".25">
          <stop offset="0" stop-color="${b.c[0]}"/>
          <stop offset=".55" stop-color="${b.c[1]}"/>
          <stop offset="1" stop-color="${b.c[2]}"/>
        </radialGradient>
      `).join('') +
      '</defs></svg>';

    const shape = i => {
      const f = `url(#jbg${i})`;
      const ln = BD[i].c[2];

      return [
        `<circle r="14" fill="${f}" stroke="${ln}" stroke-opacity=".35"/>
         <ellipse cx="-4.5" cy="-6" rx="4.5" ry="3" fill="#fff" opacity=".6"/>`,

        `<rect x="-21" y="-10" width="42" height="20" rx="7"
          fill="${f}" stroke="${ln}" stroke-opacity=".45"/>
         <rect x="-16" y="-7" width="26" height="3.5" rx="1.75"
          fill="#fff" opacity=".75"/>`,

        `<path fill-rule="evenodd"
          d="M-15 0a15 15 0 1 0 30 0a15 15 0 1 0-30 0zM-5.5 0a5.5 5.5 0 1 1 11 0a5.5 5.5 0 1 1-11 0z"
          fill="${f}" stroke="${ln}" stroke-opacity=".4"/>
         <path d="M-10 -6A12 12 0 0 1-2 -11"
          stroke="#fff" stroke-opacity=".7" stroke-width="2.4"
          fill="none" stroke-linecap="round"/>`,

        `<path d="M0 -16L15 0L0 16L-15 0z"
          fill="${f}" stroke="${ln}" stroke-opacity=".45" stroke-linejoin="round"/>
         <path d="M0 -16L15 0L0 0z" fill="#fff" opacity=".28"/>
         <path d="M-15 0L0 0L0 16z" fill="#000" opacity=".1"/>`
      ][i];
    };

    const mini = i => `<svg class="bm" viewBox="-22 -18 44 36" aria-hidden="true">${shape(i)}</svg>`;
    const INIT = '원하는 구슬을 골라 줄에 끼워보세요. 줄이 가득 차면 팔찌가 완성돼요.';

    st.innerHTML = defs +
      '<svg id="sc" class="scene" viewBox="0 0 360 330"></svg>' +
      '<div class="say" id="say" aria-live="polite"></div>';

    const sc = $('#sc', st);
    const say = m => { $('#say', st).textContent = m; };

    let beads = [], done = false, busy = false, newest = -1;
    const lerp = (a, b, t) => a + (b - a) * t;
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const ez = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const used = () => beads.reduce((a, t) => a + BD[t].w, 0) + Math.max(0, beads.length - 1) * GAP;
    const left = () => B - used();
    const room = i => left() >= BD[i].w + (beads.length ? GAP : 0);
    const fit = i => !busy && !done && room(i);

    const centers = gap => {
      let s = KN / 2;
      return beads.map(t => {
        const c = s + BD[t].w / 2;
        s += BD[t].w + gap;
        return c;
      });
    };

    const run = (ms, fn) => new Promise(res => {
      const t0 = performance.now();
      const f = now => {
        const t = Math.min(1, (now - t0) / ms);
        fn(t);
        if (t < 1) requestAnimationFrame(f);
        else res();
      };
      requestAnimationFrame(f);
    });

    const draw = (tt = done ? 1 : 0, Tm = -1) => {
      const p = ez(clamp(tt / .3));
      const e = ez(clamp((tt - .25) / .75));
      const n = beads.length;
      const k = 1 + (SK - 1) * e;
      const g1 = n > 1 ? GAP + left() / (n - 1) : GAP;
      const c0 = centers(GAP), c1 = centers(g1);

      const pt = s => {
        const a = (-90 + 360 * s / U) * Math.PI / 180;
        return [lerp(X0 + s, CX + RT * Math.cos(a), e),
          lerp(CY, CY + RT * Math.sin(a), e)];
      };

      let path = '';
      for (let j = 0; j <= 72; j++) {
        const q = pt(U * j / 72);
        path += (j ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1);
      }

      let s = `<path d="${path}" stroke="${K}" stroke-width="${(3 * k).toFixed(2)}"
        fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;

      if (e < 1) {
        [0, U].forEach(v => {
          const q = pt(v);
          s += `<circle cx="${q[0].toFixed(1)}" cy="${q[1].toFixed(1)}"
            r="${(4.5 * k).toFixed(1)}" fill="${K}" opacity="${(1 - e).toFixed(2)}"/>`;
        });
      }

      beads.forEach((t, i) => {
        const sv = lerp(c0[i], c1[i], p);
        const q = pt(sv);
        const rot = ((((360 * sv / U + 180) % 360) + 360) % 360) - 180;
        const u = Tm < 0 ? 0 : clamp((Tm - i * 50) / 450);
        const d = i % 2 ? 1 : -1;

        s += `<g transform="translate(${(q[0] + d * 14 * u).toFixed(1)}
          ${(q[1] + 190 * u * u).toFixed(1)})
          rotate(${(rot * e + d * 50 * u).toFixed(1)})
          scale(${k.toFixed(3)})" opacity="${(1 - u).toFixed(2)}">
          <g class="${i === newest ? 'drop' : ''}">${shape(t)}</g>
        </g>`;
      });

      if (done && tt === 1 && Tm < 0) {
        const y = CY - RT;
        s += `<g class="pop">
          <path d="M${CX} ${y}Q${CX - 5} ${y - 17} ${CX - 12} ${y - 34}
            M${CX} ${y}Q${CX + 5} ${y - 17} ${CX + 12} ${y - 34}"
            stroke="${K}" stroke-width="3" fill="none" stroke-linecap="round"/>
          <circle cx="${CX}" cy="${y}" r="7" fill="${K}"/>
        </g>`;
      }

      sc.innerHTML = s;
    };

    const rows = () => {
      bar.innerHTML =
        rowOf('구슬', BD.map((b, i) =>
          `<button class="chip" data-b="${i}"${fit(i) ? '' : ' disabled'}>${mini(i)}${b.n}</button>`
        ).join('')) +
        rowOf('줄', `<button class="chip" data-r="1"${busy || !beads.length ? ' disabled' : ''}>다시 하기</button>`);

      colBar(bar);
    };

    const add = async i => {
      if (!fit(i)) return;

      beads.push(i);
      newest = beads.length - 1;
      beep(560 + i * 80);

      const full = BD.every((b, j) => !room(j));
      draw();
      newest = -1;

      if (!full) {
        say(`구슬 ${beads.length}알 · 남은 줄 ${Math.round(left() / B * 100)}%`);
        rows();
        return;
      }

      busy = true;
      rows();
      say('줄이 가득 찼어요! 팔찌로 묶는 중…');
      await sleep(500);
      await run(1300, t => draw(t));

      done = true;
      busy = false;
      draw();
      rows();
      say(`팔찌 완성! 구슬 ${beads.length}알로 나만의 옥 팔찌를 만들었어요.`);
      beep(880);
      await sleep(120);
      beep(1175);
    };

    const reset = async () => {
      if (busy || !beads.length) return;

      busy = true;
      rows();
      say('구슬을 빼는 중…');
      beep(400);

      if (done) await run(700, t => draw(1 - t));

      const dur = 450 + 50 * beads.length;
      await run(dur, t => draw(0, t * dur));

      beads = [];
      done = false;
      busy = false;
      draw();
      rows();
      say(INIT);
    };

    bar.onclick = e => {
      const b = e.target.closest('button');
      if (!b || b.disabled) return;
      if ('r' in b.dataset) reset();
      else add(+b.dataset.b);
    };

    say(INIT);
    rows();
    draw();
  },


  /* ---------------------------------
     메지루시 · 전용 인터랙션
  --------------------------------- */

  decor(st, bar, c) {
    if (c.t === '메지루시') {
      let it = 0, ch = [], id = 0, drag = null;

      const snapPoints = {
        umb: { x: 154, y: 278 },
        bag: { x: 229, y: 112 },
        tum: { x: 280, y: 128 }
      };

      const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

      st.innerHTML = `
        <svg id="sc" class="scene dgs mj-scene"
          viewBox="0 0 360 330" role="img"
          aria-label="메지루시 장식 체험"></svg>
        <p class="hint">장식을 추가한 뒤 손잡이 가까이 가져가 보세요. 가까워지면 자동으로 붙어요 · 더블클릭하면 떼요</p>
      `;

      const svg = $('#sc', st);

      const partSvg = k => {
        if (k.startsWith('charm:')) {
          const [, h, n] = k.split(':');
          return `<g transform="translate(-25 -8) scale(1.05)">${I.charm(h, +n)}</g>`;
        }
        return `<g transform="translate(-26 -26) scale(1.1)">${I[k]()}</g>`;
      };

      const label = k =>
        k.startsWith('charm:')
          ? ic('charm', k.split(':')[1], +k.split(':')[2])
          : ic(k);

      const draw = () => {
        const key = c.items[it].a;
        const charms = ch.filter(p => p.item === key).map(p => `
          <g class="dg mj-charm${p.attached ? ' is-snapped' : ''}"
            data-id="${p.id}" transform="translate(${p.x} ${p.y})">
            <g class="swy">${partSvg(p.k)}</g>
          </g>
        `).join('');

        svg.innerHTML = ART[key]() + charms;
      };

      const rows = () => {
        bar.innerHTML =
          rowOf('물건', c.items.map((x, i) => `
            <button class="chip${i === it ? ' on' : ''}"
              data-it="${i}" aria-pressed="${i === it}">
              ${x.n}
            </button>
          `).join('')) +
          rowOf('메지루시 추가',
            c.parts.map(k => `<button class="chip" data-k="${k}">${label(k)}</button>`).join('') +
            '<button class="chip" data-r="1">모두 떼기</button>'
          );

        colBar(bar);
      };

      bar.onclick = e => {
        const b = e.target.closest('button');
        if (!b || b.disabled) return;

        const d = b.dataset;

        if (d.it !== undefined) it = Number(d.it);

        if (d.k) {
          const key = c.items[it].a;
          const target = snapPoints[key];
          const side = target.x > 270 ? 50 : 56;

          ch.push({
            id: ++id,
            k: d.k,
            item: key,
            x: clamp(target.x + side, 26, 334),
            y: clamp(target.y - 24, 12, 276),
            attached: false
          });

          if (ch.length > 12) ch.shift();
          beep(700);
        }

        if (d.r) ch = [];

        rows();
        draw();
      };

      const pt = e => {
        const p = svg.createSVGPoint();
        p.x = e.clientX;
        p.y = e.clientY;
        return p.matrixTransform(svg.getScreenCTM().inverse());
      };

      svg.onpointerdown = e => {
        const g = e.target.closest('.mj-charm');
        if (!g) return;

        const p = ch.find(x => x.id === Number(g.dataset.id));
        if (!p) return;

        const q = pt(e);

        drag = {
          p, g,
          ox: p.x - q.x,
          oy: p.y - q.y,
          snap: null
        };

        svg.setPointerCapture(e.pointerId);
        g.classList.add('lift');
        ch.push(ch.splice(ch.indexOf(p), 1)[0]);
        svg.appendChild(g);
      };

      svg.onpointermove = e => {
        if (!drag) return;

        const q = pt(e);
        const p = drag.p;
        const rawX = clamp(q.x + drag.ox, 24, 336);
        const rawY = clamp(q.y + drag.oy, 12, 315);
        const target = snapPoints[p.item];

        const distance = Math.hypot(rawX - target.x, rawY - target.y);
        const keepAttached = drag.snap &&
          Math.hypot(rawX - drag.snap.x, rawY - drag.snap.y) < 56;

        if (distance < 40 || keepAttached) {
          p.x = target.x;
          p.y = target.y;
          p.attached = true;
          drag.snap = target;
        } else {
          p.x = rawX;
          p.y = rawY;
          p.attached = false;
          drag.snap = null;
        }

        drag.g.setAttribute('transform', `translate(${p.x} ${p.y})`);
        drag.g.classList.toggle('is-snapped', p.attached);
      };

      const endDrag = () => {
        if (drag) drag.g.classList.remove('lift');
        drag = null;
      };

      svg.onpointerup = endDrag;
      svg.onpointercancel = endDrag;

      svg.ondblclick = e => {
        const g = e.target.closest('.mj-charm');
        if (!g) return;
        const removeId = Number(g.dataset.id);
        ch = ch.filter(p => p.id !== removeId);
        draw();
      };

      rows();
      draw();
      return;
    }


    /* ---------------------------------
       젤리슈즈 · 볼펜 기존 인터랙션
    --------------------------------- */

    let it = 0, col = 0, ch = [], id = 0;

    st.innerHTML = '<svg id="sc" class="scene dgs" viewBox="0 0 360 330"></svg><p class="hint">장식을 추가한 뒤 드래그해서 원하는 곳에 달아보세요 · 더블클릭하면 떼요</p>';

    const svg = $('#sc', st);

    const partSvg = k => {
      if (k.startsWith('charm:')) {
        const [, h, n] = k.split(':');
        return `<g transform="translate(-31 -10) scale(1.3)">${I.charm(h, +n)}</g>`;
      }
      return `<g transform="translate(-26 -26) scale(1.1)">${I[k]()}</g>`;
    };

    const draw = () => {
      svg.innerHTML = ART[c.items[it].a](c.colors[col]) +
        ch.map(p => `<g class="dg" data-id="${p.id}" transform="translate(${p.x} ${p.y})"><g class="${p.k.startsWith('charm') ? 'swy' : ''}">${partSvg(p.k)}</g></g>`).join('');
    };

    const label = k =>
      k.startsWith('charm:')
        ? ic('charm', k.split(':')[1], +k.split(':')[2])
        : ic(k);

    const rows = () => {
      bar.innerHTML =
        (c.items.length > 1
          ? rowOf('물건', c.items.map((x, i) => `<button class="chip${i === it ? ' on' : ''}" data-it="${i}">${x.n}</button>`).join(''))
          : '') +
        rowOf('색상', c.colors.map((x, i) => `<button class="sw${i === col ? ' on' : ''}" data-c="${i}" style="background:${x}" aria-label="색 ${i + 1}"></button>`).join('')) +
        rowOf('장식 추가', c.parts.map(k => `<button class="chip" data-k="${k}">${label(k)}</button>`).join('') +
          '<button class="chip" data-r="1">모두 떼기</button>');

      colBar(bar);
    };

    bar.onclick = e => {
      const b = e.target.closest('button');
      if (!b) return;

      const d = b.dataset;

      if (d.it) it = +d.it;
      if (d.c) col = +d.c;

      if (d.k) {
        const at = c.items[it].at;
        ch.push({
          id: ++id,
          k: d.k,
          x: Math.max(30, Math.min(330, at[0] + (Math.random() - .5) * 150)),
          y: Math.max(30, Math.min(300, at[1] + 10 + Math.random() * 50))
        });

        if (ch.length > 8) ch.shift();
        beep(700);
      }

      if (d.r) ch = [];

      rows();
      draw();
    };

    const pt = e => {
      const p = svg.createSVGPoint();
      p.x = e.clientX;
      p.y = e.clientY;
      return p.matrixTransform(svg.getScreenCTM().inverse());
    };

    let drag = null;

    svg.onpointerdown = e => {
      const g = e.target.closest('.dg');
      if (!g) return;

      const p = ch.find(x => x.id == g.dataset.id);
      const q = pt(e);

      drag = { p, g, ox: p.x - q.x, oy: p.y - q.y };
      svg.setPointerCapture(e.pointerId);
      g.classList.add('lift');
      ch.push(ch.splice(ch.indexOf(p), 1)[0]);
      svg.appendChild(g);
    };

    svg.onpointermove = e => {
      if (!drag) return;

      const q = pt(e);
      const p = drag.p;

      p.x = Math.max(20, Math.min(340, q.x + drag.ox));
      p.y = Math.max(20, Math.min(310, q.y + drag.oy));

      drag.g.setAttribute('transform', `translate(${p.x} ${p.y})`);
    };

    svg.onpointerup = svg.onpointercancel = () => {
      if (drag) drag.g.classList.remove('lift');
      drag = null;
    };

    svg.ondblclick = e => {
      const g = e.target.closest('.dg');
      if (g) {
        ch = ch.filter(x => x.id != g.dataset.id);
        draw();
      }
    };

    rows();
    draw();
  }
});
