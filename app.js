// =====================================================================
//  キヤノン株式会社 様｜社員向けストックフォトサービス登録画像の撮影（工場内ポートレート）
//  モデル候補資料（2026年10月版）
// =====================================================================

const PLACEHOLDER = '情報待ち';
const NA = '—';

// 撮影日：2026/10/23（金）12:15〜16:15（予備日なし）
const AVAILABILITY = Object.fromEntries(
  ['rina', 'mio', 'ai', 'miki', 'masaki', 'tatsuya', 'kosuke'].map(id => [id, [{ date: '10/23（金）', status: 'ok' }]])
);

// 女性4名（リナ／ミオ／アイ／ミキ）
const FEMALES = [
  {
    "id": "rina",
    "name": "リナ",
    "age": 35,
    "clothesSize": "S or Mサイズ",
    "station": "青井駅",
    "height": 162,
    "size": "B 83cm / W 61cm / H 87cm",
    "shoe": "22.5cm",
    "exp": "—",
    "location": "東京都",
    "extra": [
      [
        "体重",
        "46.5kg"
      ],
      [
        "趣味",
        "ヨガ"
      ]
    ],
    "videos": [
      "https://youtu.be/CzzzQ_VzfHs",
      "https://youtu.be/t_pOcQUdZRg"
    ],
    "achievementTitle": "出演実績",
    "achievementSections": [
      {
        "title": "製造・作業服関連",
        "items": [
          "本田技研工業株式会社 Honda FIT",
          "三菱自動車工業株式会社 デリカミニ",
          "Hyundai Mobility Japan",
          "田中貴金属工業 シャワーヘッド",
          "三菱重工業（MC対談）",
          "ユウアイ電子50周年式典（イベント進行）"
        ]
      },
      {
        "title": "広告",
        "items": [
          "農林水産省 米粉パンを食べよう",
          "日本乳癌検診学会 全国乳がん検診",
          "東武鉄道株式会社 東武バス",
          "株式会社オリエンタルランド 東京ディズニーシー ソワリン",
          "株式会社近鉄ユニバーサルシティ",
          "株式会社メガトップ 眼鏡市場",
          "カネボウ株式会社 トワニー",
          "コーセーミルボンコスメティックス",
          "箱根プリンスホテル",
          "軽井沢プリンスホテル",
          "株式会社ヒマラヤ アンドライフ",
          "株式会社デサント",
          "株式会社ルネサンス",
          "株式会社銀座きもの青木",
          "株式会社セブン-イレブン・ジャパン モンスト編"
        ]
      },
      {
        "title": "CM（主演）",
        "items": [
          "中国汾酒",
          "レイヴィーナチュラル",
          "アイペット うちの子保険",
          "安楽亭 明日のカルビ、ファミリーカルビ。"
        ]
      },
      {
        "title": "プロモーション",
        "items": [
          "ヨックモック",
          "STRAPPER 2WAYスムースストラップライト 母役",
          "Totoco小田原",
          "鴨川館"
        ]
      },
      {
        "title": "ナビゲーター",
        "items": [
          "日本郵政株式会社",
          "メデュラナビゲーター"
        ]
      },
      {
        "title": "アパレル",
        "items": [
          "モンクレール 着画モデル",
          "森英恵 着画モデル",
          "銀座きもの青木",
          "4°C Webモデル",
          "KEYUCA",
          "DESCENTE",
          "ワコール",
          "co-op生活協同組合 カタログ"
        ]
      },
      {
        "title": "書籍表紙・雑誌掲載",
        "items": [
          "マーケティング検定3級問題集",
          "最高の髪型解剖図鑑",
          "ゼクシィ"
        ]
      },
      {
        "title": "MC対談",
        "items": [
          "本麒麟",
          "楽天ドラゴン"
        ]
      },
      {
        "title": "イベント進行",
        "items": [
          "東急バス タンデムライナー開通式",
          "東京キャンピングカーショー Honda",
          "シロカコーヒー"
        ]
      },
      {
        "title": "YouTube番組MC",
        "items": [
          "セントラル短資FX",
          "ドクターチョイス"
        ]
      },
      {
        "title": "MCリポーター",
        "items": [
          "ヒトサラジャーナル 番組MCレポーター",
          "シェフズテーブルラジオ MC",
          "モテシル リポーター"
        ]
      }
    ]
  },
  {
    "id": "mio",
    "name": "ミオ",
    "age": 33,
    "clothesSize": "XS or Sサイズ",
    "station": "武蔵小杉駅",
    "height": 153,
    "size": "B 82cm / W 55cm / H 86cm",
    "shoe": "22.5cm",
    "exp": "—",
    "location": "東京都（石川県出身）",
    "extra": [
      [
        "体重",
        "47kg"
      ]
    ],
    "videos": [
      "https://youtu.be/0al9w8zdlHs",
      "https://youtu.be/SeRlnOSx54k"
    ],
    "achievementTitle": "出演経歴・実績",
    "achievementSections": [
      {
        "title": "製造・作業服関連",
        "items": [
          "Panasonic"
        ]
      },
      {
        "title": "出演経歴",
        "items": [
          "MicheBloomin' PR",
          "9unq（クアンク）PR",
          "PLACOLE & DRESSY",
          "Regression クレイマスク",
          "Eclat Charme",
          "東京ミッドタウン八重洲",
          "東京プリンスホテル",
          "Afternoon Tea"
        ]
      },
      {
        "title": "雑誌掲載",
        "items": [
          "美人百花",
          "non-no",
          "anan"
        ]
      },
      {
        "title": "舞台",
        "items": [
          "ガンバの冒険",
          "翼を下さい",
          "アラビアンナイト"
        ]
      },
      {
        "title": "映画",
        "items": [
          "ネバーダンス（佐藤克則 監督）",
          "夢の中へ（宮崎彩代 監督／女優賞）",
          "お姫様になりたくて（川地廣和 監督）",
          "恋に至る病（木村承子 監督）"
        ]
      },
      {
        "title": "ドラマ",
        "items": [
          "世にも奇妙な物語（生徒役）"
        ]
      },
      {
        "title": "企業PV",
        "items": [
          "KDDI"
        ]
      }
    ]
  },
  {
    "id": "ai",
    "name": "アイ",
    "age": 27,
    "clothesSize": "Mサイズ",
    "station": "巣鴨駅",
    "height": 162,
    "size": "B 84cm / W 59cm / H 85cm",
    "shoe": "24.0cm",
    "exp": "—",
    "location": "東京都",
    "extra": [],
    "videos": [
      "https://youtu.be/VKIoEIuxl8g"
    ],
    "achievementTitle": "出演実績 ／ BEAUTY・ADVERTISING・WEB MOVIE",
    "achievementSections": [
      {
        "title": "製造・作業服関連",
        "items": [
          "日野自動車 デュトロ（商品紹介動画）",
          "DAIKEN（SNS動画）"
        ]
      },
      {
        "title": "CM・広告",
        "items": [
          "三菱倉庫（CM）",
          "Aカード（CM）",
          "KDDI PONTAパス（WEB広告）",
          "パナソニックホームズ（PR映像）",
          "BASE BREAD（広告）",
          "JT（WEB）"
        ]
      },
      {
        "title": "BEAUTY / MEDICAL",
        "items": [
          "TCB東京中央美容外科（WEB広告）",
          "AGAスキンクリニックレディース（WEB広告）",
          "MEDULLA ソニックシャンプー（広告）",
          "VIAGE（広告）",
          "UNDEUX SUPERBODY（広告）"
        ]
      },
      {
        "title": "WEB / PROMOTION",
        "items": [
          "バイク王（LP広告）"
        ]
      },
      {
        "title": "STILL / POSTER",
        "items": [
          "明治（ポスター）",
          "ユニ・チャーム（シルコット）",
          "ATELIER ÉCRAT"
        ]
      },
      {
        "title": "CORPORATE / VP",
        "items": [
          "医療・美容・住宅・ライフスタイル領域など多数出演"
        ]
      }
    ]
  },
  {
    "id": "miki",
    "name": "ミキ",
    "age": 32,
    "clothesSize": "Mサイズ",
    "station": "平和島駅",
    "height": 160,
    "size": "B 85cm / W 61cm / H 86cm",
    "shoe": "23.0cm",
    "exp": "—",
    "location": "東京都",
    "extra": [
      [
        "体重",
        "42kg"
      ]
    ],
    "videos": [
      "https://youtube.com/shorts/kXTf0U_0560"
    ],
    "achievementTitle": "出演実績",
    "achievementSections": [
      {
        "title": "ミスコン",
        "items": [
          "ミスワイン2018 日本大会ファイナリスト",
          "第13回 真心笑顔美人 ファイナリスト",
          "ミスアース2019 埼玉大会ファイナリスト"
        ]
      },
      {
        "title": "TV",
        "items": [
          "本田ヒルズクリニック CM",
          "パンテーン ミラクルズ",
          "ガリレオX〜顔の科学〜 顔モデル",
          "通販番組 テレマルシェ",
          "某通販 ネックシャツ着用モデル"
        ]
      },
      {
        "title": "誌面モデル",
        "items": [
          "ガールズバイカー 表紙",
          "大手生命保険会社 月刊誌 美容ヘアメイク特集",
          "文藝春秋 梅こんぶ広告 雑誌掲載",
          "雑誌LDK ストレッチ特集",
          "アミューズメントパーク 制服 カタログ",
          "リバーサルジム チラシ"
        ]
      },
      {
        "title": "Web出演（メイン出演のみ記載）",
        "items": [
          "東京スカイツリー 公式YouTube「涼」",
          "タカラトミー おうちにポケモン PIKACHU 2024 イメージモデル",
          "タカラトミー おうちにポケモン EIEVUI 2025 イメージモデル",
          "ハーモニーグリーン スキンケアPV (How to)"
        ]
      },
      {
        "title": "広告",
        "items": [
          "マイナビ進学",
          "ベルミス",
          "バイク王"
        ]
      },
      {
        "title": "イベント",
        "items": [
          "筑波サーキット レースクイーン 2020〜2023",
          "kross×over 21 ラウンドガール",
          "Yahoo!検索大賞 2019 ごちゃまぜコーデ 被写体モデル",
          "東京モーターショー 2019 東海理化"
        ]
      }
    ]
  }
];

// 男性3名（マサキ／タツヤ／コウスケ）
const MALES = [
  {
    "id": "masaki",
    "name": "マサキ",
    "age": 27,
    "height": 175,
    "clothesSize": "Lサイズ",
    "size": "B 96cm / W 75cm / H 90cm",
    "shoe": "26.5〜27.0cm",
    "exp": "—",
    "location": "千葉県松戸市（愛媛県出身）",
    "station": "馬橋駅",
    "extra": [
      [
        "体重",
        "62kg"
      ]
    ],
    "videos": [
      "https://www.instagram.com/reel/DXgjRtqlNEE/"
    ],
    "achievementTitle": "出演実績",
    "achievementSections": [
      {
        "title": "製造・作業服関連",
        "items": [
          "ワークマン（商品パッケージ、広告媒体）",
          "LEXUS（アプリケーションOPムービー）",
          "TOYOTA（アプリケーションOPムービー）",
          "Panasonic（広告媒体、産経新聞）"
        ]
      },
      {
        "title": "その他",
        "items": [
          "アツギ（ECサイトモデル）",
          "ミズノ（商品使用イメージ映像）",
          "TATRAS（広告媒体、採用ページ）",
          "銀のさら（アクスタモデル）",
          "株式会社船橋屋（採用ページ）",
          "ブライダルモデル多数"
        ]
      }
    ]
  },
  {
    "id": "tatsuya",
    "name": "タツヤ",
    "age": 35,
    "height": 183,
    "clothesSize": "XLサイズ",
    "size": "B 100cm / W 81cm / H 100cm",
    "shoe": "27.5cm",
    "exp": "—",
    "location": "情報待ち",
    "extra": [
      [
        "体重",
        "79kg"
      ]
    ],
    "videos": [
      "https://youtu.be/Z91g3RjfF9M",
      "https://youtu.be/f2h_1QVTDC0"
    ],
    "achievementTitle": "出演実績",
    "achievementSections": [
      {
        "title": "製造・作業服関連",
        "items": [
          "TOYO SAFETY",
          "富士電機"
        ]
      },
      {
        "title": "スチール",
        "items": [
          "越谷レイクタウンmori",
          "あきんどスシロー",
          "丸亀製麺",
          "東京ドームシティ",
          "あべのハルカス",
          "Jackery"
        ]
      },
      {
        "title": "映像",
        "items": [
          "公益財団法人日本賃貸住宅管理協会",
          "桐生信用金庫",
          "FWD生命",
          "東京ドームホテル",
          "安楽亭"
        ]
      },
      {
        "title": "MV",
        "items": [
          "Roys「VENOM」",
          "宮田みほ「君と夏のせい。」"
        ]
      }
    ]
  },
  {
    "id": "kosuke",
    "name": "コウスケ",
    "age": 28,
    "height": 175,
    "clothesSize": "Lサイズ",
    "size": "B 81cm / W 69cm / H 90cm",
    "shoe": "25.5cm",
    "exp": "—",
    "location": "東京都（福岡県出身）",
    "station": "高幡不動駅（京王線）",
    "extra": [],
    "videos": [
      "https://youtu.be/pfO-BTJdoAI",
      "https://youtu.be/v9ykJvvQI_k"
    ],
    "achievementTitle": "出演実績",
    "achievementSections": [
      {
        "title": "製造・作業服関連",
        "items": [
          "ユニフォームタウン カタログ",
          "CITIZEN LP",
          "NEC LP",
          "レック 激落ちくん",
          "三菱自動車グローバル 海外TVCM"
        ]
      },
      {
        "title": "その他",
        "items": [
          "ミッドタウン八重洲 サイネージ映像",
          "JAバンク静岡 TVCM",
          "静岡トヨタ TVCM",
          "TAKA-Q",
          "成田空港サイネージ映像 警備員役",
          "東急ハンズ メール会員サイト",
          "KDDI povo2.0 インタビュー映像",
          "オークウッドホテル麻布",
          "三日月ホテル鬼怒川温泉",
          "PCA hub TVCM",
          "長野県チノ旅映像",
          "伊豆縦貫自動車道 PR映像",
          "株式会社公益社 Web",
          "VFX factory PR映像",
          "株式会社共進 TVCM",
          "acoustic world",
          "マイナビニュース 記事",
          "アスキー 記事",
          "朝日新聞デジタル 記事",
          "palmwork",
          "RASIK",
          "ROYAL CANIN",
          "ONE AND UNIQUE",
          "Printstar",
          "グランスノー奥伊吹"
        ]
      }
    ]
  }
];


// ============ プロフィール項目 ============
function known(v) { return v !== undefined && v !== null && v !== '' && v !== PLACEHOLDER && v !== NA; }
function extraVal(m, label) { const e = (m.extra || []).find(([l]) => l === label); return e ? e[1] : undefined; }
function specFields(m) {
  const base = [
    { l: '身長',       v: typeof m.height === 'number' ? m.height + 'cm' : m.height },
    { l: '服のサイズ', v: m.clothesSize },
    { l: '年齢',       v: typeof m.age === 'number' ? m.age + '歳' : m.age },
    { l: 'サイズ',     v: m.size },
    { l: 'シューズ',   v: m.shoe },
    { l: '在住地',     v: m.location },
    { l: '最寄り駅',   v: m.station },
    { l: '体重',       v: extraVal(m, '体重') },
    { l: '芸歴',       v: typeof m.exp === 'number' ? m.exp + '年' : m.exp },
    { l: 'ヘアカラー', v: m.hairColor },
    { l: '瞳カラー',   v: m.eyeColor },
  ];
  const extras = (m.extra || []).filter(([l]) => l !== '体重').map(([l, v]) => ({ l, v }));
  return [...base, ...extras];
}
const COMMON_SPECS = specFields({}).map(f => f.l)
  .filter(l => [...FEMALES, ...MALES].every(m => known((specFields(m).find(f => f.l === l) || {}).v)));

// 番号ラベルの接頭辞（旧テンプレートの「新婦役／新郎役」に代わる中立表記）
const NUM_PREFIX = 'MODEL ';

let currentTab = 'female';
let lbList = FEMALES;
let lbIdx = 0;
let lbShot = 0;

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

function getPhotos(m) {
  const genderKey = currentTab === 'female' ? 'female' : 'male';
  return (typeof PHOTO_DATA !== 'undefined' && PHOTO_DATA[genderKey] && PHOTO_DATA[genderKey][m.id]) || [];
}
function photoSrc(photo) { return 'data:image/jpeg;base64,' + photo.b64; }

function ytId(url) {
  const m = String(url).match(/(?:shorts\/|youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : '';
}
function heightDisp(h) { return typeof h === 'number' ? h + 'cm' : h; }
function ageDisp(a)    { return typeof a === 'number' ? a + '歳' : a; }
function expDisp(e)    { return typeof e === 'number' ? e + '年' : (e != null ? e : '—'); }

// ============ Grid render ============
function buildCard(m, i, gender) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.id = m.id;

  const numLabel = NUM_PREFIX + String(i + 1).padStart(2, '0');
  const savedTab = currentTab;
  currentTab = gender;
  const photos = getPhotos(m);
  currentTab = savedTab;
  const firstPhoto = photos[0];
  const photoCountLabel = photos.length ? photos.length + '枚' : '写真情報待ち';

  card.innerHTML = `
    <div class="card-photo">
      ${firstPhoto
        ? `<img class="card-img" src="${photoSrc(firstPhoto)}" alt="${m.name}" loading="lazy">`
        : '<div class="card-img-empty"></div>'}
      <span class="card-no">${numLabel}</span>
      <span class="card-photocount">${photoCountLabel}</span>
    </div>
    <div class="card-body">
      <div class="card-name">
        <span class="nm">${m.name}</span>
        ${known(m.age) ? `<span class="age">${ageDisp(m.age)}</span>` : ''}
      </div>
      ${known(m.location) ? `<div class="card-loc">${m.location}</div>` : ''}
      <div class="card-stat">
        <span><span class="l">身長</span>${heightDisp(m.height)}</span>
      </div>
      ${m.cardNote ? `<div class="card-note">${m.cardNote}</div>` : ''}
    </div>
  `;
  card.addEventListener('click', () => {
    currentTab = gender;
    lbList = gender === 'female' ? FEMALES : MALES;
    openLightbox(i);
  });
  return card;
}

function renderAllGrids() {
  const gf = $('#gridFemale');
  const gm = $('#gridMale');
  if (gf) { gf.innerHTML = ''; FEMALES.forEach((m, i) => gf.appendChild(buildCard(m, i, 'female'))); }
  if (gm) { gm.innerHTML = ''; MALES.forEach((m, i)   => gm.appendChild(buildCard(m, i, 'male'))); }
}

// ============ Lightbox ============
const lb = $('#lb');

function openLightbox(idx) {
  lbList = currentTab === 'female' ? FEMALES : MALES;
  lbIdx = idx;
  lbShot = 0;
  renderLightbox();
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

function renderLightbox() {
  const m = lbList[lbIdx];
  const numLabel = NUM_PREFIX + String(lbIdx + 1).padStart(2, '0');
  const photos = getPhotos(m);
  const photo = photos[lbShot];

  const main = $('#lbMain');
  main.innerHTML = '';
  if (photo) {
    const img = document.createElement('img');
    img.src = photoSrc(photo);
    img.alt = m.name;
    img.className = lbShot === 0 ? 'lb-img-cover' : 'lb-img-natural';
    main.appendChild(img);
  } else {
    main.innerHTML = '<div style="color:rgba(255,255,255,.4);font-size:13px;letter-spacing:.1em;">写真情報待ち</div>';
  }

  const strip = $('#lbStrip');
  strip.innerHTML = '';
  photos.forEach((p, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'lb-thumb' + (i === lbShot ? ' active' : '');
    const tImg = document.createElement('img');
    tImg.src = photoSrc(p);
    tImg.alt = String(i + 1).padStart(2, '0');
    thumb.appendChild(tImg);
    const no = document.createElement('span');
    no.className = 'lb-thumb-no';
    no.textContent = String(i + 1).padStart(2, '0');
    thumb.appendChild(no);
    thumb.addEventListener('click', () => { lbShot = i; renderLightbox(); });
    strip.appendChild(thumb);
  });

  $('#lbId').innerHTML = photos.length
    ? `<span class="accent">${numLabel}</span>&nbsp;／&nbsp;<strong>${String(lbShot + 1).padStart(2, '0')}</strong> / ${photos.length}枚`
    : `<span class="accent">${numLabel}</span>&nbsp;／&nbsp;写真情報待ち`;

  $('#lbName').innerHTML = typeof m.age === 'number'
    ? `${m.name} <span class="age">${m.age}歳</span>` : `${m.name}`;
  $('#lbLoc').textContent = known(m.location) ? m.location : '';

  // プロフィール項目：全員わかっている項目を上に同じ順で、個別にわかっている項目をその下に並べる（不明な項目は表示しない）
  const specsBox = document.querySelector('.specs');
  specsBox.innerHTML = '';
  const fields = specFields(m).filter(f => known(f.v));
  const rows = [...COMMON_SPECS.map(l => fields.find(f => f.l === l)), ...fields.filter(f => !COMMON_SPECS.includes(f.l))];
  rows.forEach(f => {
    const d = document.createElement('div');
    d.className = 'spec';
    d.innerHTML = `<div class="spec-l">${f.l}</div><div class="spec-v">${f.v}</div>`;
    specsBox.appendChild(d);
  });

  // イメージ動画（specsの直後に表示）
  document.querySelectorAll('.lb-videos').forEach(e => e.remove());
  if (m.videos && m.videos.length) {
    const box = document.createElement('div');
    box.className = 'lb-videos';
    box.style.cssText = 'margin-top:20px;padding-top:20px;border-top:1px solid rgba(255,255,255,.1);';
    box.innerHTML =
      '<div style="font-family:var(--mono);font-size:10px;letter-spacing:.16em;color:var(--accent);margin-bottom:12px;text-transform:uppercase;font-weight:600;">MOVIE ／ イメージ動画</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:12px;">' +
      m.videos.map(u => {
        const ig = String(u).match(/instagram\.com\/(?:reel|p)\/([A-Za-z0-9_-]+)/);
        if (ig) {
          return `<div style="position:relative;width:240px;max-width:100%;height:430px;border-radius:8px;overflow:hidden;background:#fff;">
          <iframe src="https://www.instagram.com/reel/${ig[1]}/embed" title="イメージ動画" loading="lazy" scrolling="no"
            allowtransparency="true" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
        </div>`;
        }
        const id = ytId(u);
        return `<div style="position:relative;width:200px;max-width:100%;aspect-ratio:9/16;border-radius:8px;overflow:hidden;background:#000;">
          <iframe src="https://www.youtube.com/embed/${id}" title="イメージ動画" loading="lazy"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen
            style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
        </div>`;
      }).join('') +
      '</div>';
    const specsEl = document.querySelector('.specs');
    specsEl.parentNode.insertBefore(box, specsEl.nextSibling);
  }

  const avail = AVAILABILITY[m.id] || [];
  const schedSection = $('#lbSchedule');
  if (avail.length) {
    schedSection.style.display = '';
    $('#lbScheduleCards').innerHTML = avail.map(d => {
      const cls   = d.status === 'ok' ? 'avail-ok' : d.status === 'ng' ? 'avail-ng' : 'avail-pending';
      const badge = d.status === 'ok' ? '○' : d.status === 'ng' ? '✕' : '－';
      const label = d.status === 'ok' ? '対応可' : d.status === 'ng' ? '対応不可' : '未定';
      return `<div class="avail-card ${cls}"><span class="avail-date">${d.date}</span><span class="avail-badge">${badge}</span><span class="avail-label">${label}</span></div>`;
    }).join('');
  } else { schedSection.style.display = 'none'; }

  const achSection = $('#lbAchievements');
  if (m.achievementSections && m.achievementSections.length) {
    achSection.style.display = '';
    $('#lbAchTitle').textContent = m.achievementTitle || '活動実績';
    $('#lbAchList').innerHTML = m.achievementSections.map(sec => `
      <li class="ach-section-title">${sec.title}</li>
      ${sec.items.map(a => `<li>${a}</li>`).join('')}`).join('');
  } else if (m.achievements && m.achievements.length) {
    achSection.style.display = '';
    $('#lbAchTitle').textContent = m.achievementTitle || '実績';
    const noteHtml = m.achievementNote ? `<li class="ach-note">${m.achievementNote}</li>` : '';
    $('#lbAchList').innerHTML = noteHtml + m.achievements.map(a => `<li>${a}</li>`).join('');
  } else { achSection.style.display = 'none'; }

  // 競合などの注意事項（枠で強調）
  document.querySelectorAll('.lb-warning-box').forEach(e => e.remove());
  if (m.warning) {
    const box = document.createElement('div');
    box.className = 'lb-warning-box';
    box.style.cssText = 'margin-top:22px;padding:16px 18px;border:1.5px solid var(--accent);border-radius:8px;background:rgba(196,69,45,.14);';
    box.innerHTML =
      `<div style="display:flex;align-items:center;gap:8px;font-weight:700;color:#ff9b86;font-size:13px;letter-spacing:.03em;margin-bottom:10px;">
         <span style="flex-shrink:0;width:18px;height:18px;border-radius:50%;background:var(--accent);color:#fff;font-size:12px;display:flex;align-items:center;justify-content:center;">!</span>
         ${m.warning.title}
       </div>` +
      m.warning.body.map(t => `<p style="margin:0 0 8px;font-size:12px;line-height:1.75;color:rgba(255,255,255,.88);">${t}</p>`).join('');
    const btns = document.querySelector('.lb-actions-bottom');
    btns.parentNode.insertBefore(box, btns);
  }

  // 全モデル（女性→男性）の最初と最後ではボタン自体を表示しない
  $('#lbPrev').style.visibility = hasModel(-1) ? '' : 'hidden';
  $('#lbNext').style.visibility = hasModel(1) ? '' : 'hidden';
}

// モデル移動：女性の最後→男性の最初、男性の最初→女性の最後へそのまま移動
function stepModel(delta) {
  let idx = lbIdx + delta;
  if (idx < 0) {
    if (currentTab !== 'male' || !FEMALES.length) return null;
    return { tab: 'female', list: FEMALES, idx: FEMALES.length - 1 };
  }
  if (idx >= lbList.length) {
    if (currentTab !== 'female' || !MALES.length) return null;
    return { tab: 'male', list: MALES, idx: 0 };
  }
  return { tab: currentTab, list: lbList, idx };
}
function hasModel(delta) { return !!stepModel(delta); }
function moveModel(delta) {
  const s = stepModel(delta);
  if (!s) return;
  currentTab = s.tab; lbList = s.list; lbIdx = s.idx; lbShot = 0;
  renderLightbox();
}
$('#lbPrev').addEventListener('click', () => moveModel(-1));
$('#lbNext').addEventListener('click', () => moveModel(1));
$('#lbClose').addEventListener('click', closeLightbox);
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft')  moveModel(-1);
  if (e.key === 'ArrowRight') moveModel(1);
  if (e.key === 'ArrowUp')   { e.preventDefault(); if (lbShot > 0) { lbShot--; renderLightbox(); } }
  if (e.key === 'ArrowDown') { e.preventDefault(); const ph = getPhotos(lbList[lbIdx]); if (lbShot < ph.length - 1) { lbShot++; renderLightbox(); } }
});

renderAllGrids();
