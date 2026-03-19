/* ================================================
   AslExport — JavaScript fayl
   Ishlatish: <script src="aslexport.js"></script>
   HTML faylida <script>...</script> ni olib tashlang
   va </body> oldiga shu qatorni qo'shing
================================================ */

// ══════════════════════════════════════════
// DATA
// ══════════════════════════════════════════
const PRODUCTS = [
  {id:1,name:"O'rik",nameEn:"Apricot",region:"Samarqand",emoji:"🍑",farmer:"Alisher Karimov",price:2.80,qty:2000,cat:"meva",cert:["GlobalG.A.P","Organic"],stars:4.9,views:142},
  {id:2,name:"Uzum",nameEn:"Grape",region:"Farg'ona",emoji:"🍇",farmer:"Bobur Toshmatov",price:1.60,qty:1500,cat:"meva",cert:["Halol"],stars:4.7,views:98},
  {id:3,name:"Qovun",nameEn:"Melon",region:"Andijon",emoji:"🍈",farmer:"Jamshid Rahimov",price:0.90,qty:5000,cat:"meva",cert:["Phytosanitary"],stars:4.8,views:211},
  {id:4,name:"Pomidor",nameEn:"Tomato",region:"Toshkent",emoji:"🍅",farmer:"Sherzod Mirzayev",price:0.65,qty:3000,cat:"sabzavot",cert:["GlobalG.A.P"],stars:4.6,views:87},
  {id:5,name:"Qalampir",nameEn:"Pepper",region:"Qashqadaryo",emoji:"🌶️",farmer:"Nodir Alijonov",price:1.20,qty:800,cat:"sabzavot",cert:["Halol","Organic"],stars:4.9,views:56},
  {id:6,name:"Yong'oq",nameEn:"Walnut",region:"Namangan",emoji:"🌰",farmer:"Otabek Sobirov",price:6.50,qty:400,cat:"quruq",cert:["ISO 22000","GlobalG.A.P"],stars:5.0,views:340},
  {id:7,name:"Gilos",nameEn:"Cherry",region:"Samarqand",emoji:"🫐",farmer:"Jasur Nazarov",price:4.20,qty:600,cat:"meva",cert:["Organic","Phytosanitary"],stars:4.8,views:178},
  {id:8,name:"Bug'doy",nameEn:"Wheat",region:"Buxoro",emoji:"🌾",farmer:"Timur Kalandarov",price:0.28,qty:10000,cat:"don",cert:["ISO 22000"],stars:4.5,views:44},
  {id:9,name:"Sabzi",nameEn:"Carrot",region:"Xorazm",emoji:"🥕",farmer:"Mansur Ortiqov",price:0.48,qty:2500,cat:"sabzavot",cert:["Halol"],stars:4.7,views:63},
  {id:10,name:"Shaftoli",nameEn:"Peach",region:"Farg'ona",emoji:"🍑",farmer:"Eldor Hasanov",price:1.80,qty:1200,cat:"meva",cert:["GlobalG.A.P","Organic"],stars:4.8,views:125},
  {id:11,name:"Piyoz",nameEn:"Onion",region:"Sirdaryo",emoji:"🧅",farmer:"Bahodir Tursunov",price:0.35,qty:8000,cat:"sabzavot",cert:["Phytosanitary"],stars:4.4,views:39},
  {id:12,name:"Mayiz",nameEn:"Raisin",region:"Namangan",emoji:"🍇",farmer:"Kamol Rashidov",price:3.20,qty:500,cat:"quruq",cert:["Organic","Halol","ISO 22000"],stars:4.9,views:290},
];

const ORDERS = [
  {emoji:"🍑",name:"O'rik — 500 kg",buyer:"🇩🇪 Hans Mueller, Berlin",amount:"$1,400",date:"Yetkazilish: 3 kun",status:"active",statusTxt:"Tasdiqlandi"},
  {emoji:"🍇",name:"Uzum — 1.2 tonna",buyer:"🇦🇪 Ahmad Khalid, Dubai",amount:"$1,920",date:"Jo'natildi: 2 kun oldin",status:"shipped",statusTxt:"Yo'lda"},
  {emoji:"🍈",name:"Qovun — 3 tonna",buyer:"🇨🇳 Li Wei, Shanghai",amount:"$2,700",date:"Buyurtma: bugun",status:"active",statusTxt:"Kutilmoqda"},
  {emoji:"🍅",name:"Pomidor — 800 kg",buyer:"🇷🇺 Sergey Petrov, Moskva",amount:"$520",date:"Yetkazildi: kecha",status:"done",statusTxt:"Yetkazildi ✓"},
  {emoji:"🌰",name:"Yong'oq — 200 kg",buyer:"🇩🇪 Klaus Bauer, Frankfurt",amount:"$1,300",date:"Yetkazildi: 3 kun oldin",status:"done",statusTxt:"Yetkazildi ✓"},
  {emoji:"🫐",name:"Gilos — 300 kg",buyer:"🇦🇪 Fatima Al-Rashid, Abu Dhabi",amount:"$1,260",date:"Yetkazilish: 5 kun",status:"active",statusTxt:"Tayyorlanmoqda"},
];

const CHATS = [
  {id:1,name:"Hans Mueller",flag:"🇩🇪",bg:"linear-gradient(135deg,#1d4a8e,#4a8eba)",country:"Germaniya",preview:"500 kg o'rik haqida so'radim",time:"10:24",unread:2,
   msgs:[
    {me:false,text:"Salom! 500 kg o'rik kerak edi. Sertifikatingiz bormi?",time:"10:18"},
    {me:true, text:"Ha, GlobalG.A.P va Organic sertifikatlarimiz bor. Qachon kerak?",time:"10:20"},
    {me:false,text:"Iyul boshida. Narx bo'yicha kelisha olamizmi? $2.60/kg bo'lsa?",time:"10:22"},
    {me:true, text:"$2.70 dan tushirmasam bo'ladi, sifatini hisobga olsangiz arzon.",time:"10:23"},
    {me:false,text:"Mayli, kelishdik! Shartnoma yuborasizmi?",time:"10:24"},
  ]},
  {id:2,name:"Ahmad Khalid",flag:"🇦🇪",bg:"linear-gradient(135deg,#8e4a1d,#c8804a)",country:"UAE",preview:"Uzum namunasi haqida",time:"Kecha",unread:0,
   msgs:[
    {me:false,text:"Assalomu alaykum! Uzum namunasini yuborib ko'rsangiz bo'ladimi?",time:"Kecha 15:30"},
    {me:true, text:"Albatta! Qaysi manzilga jo'natay? DHL bilan yuboramiz.",time:"Kecha 16:00"},
    {me:false,text:"Dubai warehouse: Sheikh Zayed Road, Al Quoz Industrial 4.",time:"Kecha 16:20"},
    {me:true, text:"Tushunarli! Ertaga jo'natamiz.",time:"Kecha 16:25"},
  ]},
  {id:3,name:"Li Wei",flag:"🇨🇳",bg:"linear-gradient(135deg,#8e1d1d,#c84a4a)",country:"Xitoy",preview:"3 tonna qovun buyurtmasi",time:"2 kun",unread:1,
   msgs:[
    {me:false,text:"Hello! We need 3 tons of melon for Shanghai distribution.",time:"2 kun"},
    {me:true, text:"We have it ready. $0.90/kg, minimum 2 tons. Phytosanitary cert included.",time:"2 kun"},
    {me:false,text:"Quality certificate also needed. Can you provide?",time:"2 kun"},
    {me:true, text:"Yes, we have all documents ready.",time:"2 kun"},
    {me:false,text:"Great! Send us the invoice please.",time:"2 kun"},
  ]},
];

let currentLang = 'uz';
let currentCat = 'all';
let currentChatId = 1;
let currentOrderFilter = 'all';
let selectedProduct = null;

// ══════════════════════════════════════════
// PAGE NAV
// ══════════════════════════════════════════
const PAGE_META = {
  dashboard: {title:'Dashboard', desc:'Xush kelibsiz, Alisher! 🌿'},
  market:    {title:'Bozor', desc:'Barcha mahsulotlarni ko\'ring va buyurtma bering'},
  post:      {title:'E\'lon berish', desc:'Yangi mahsulot e\'lon qo\'shing'},
  orders:    {title:'Buyurtmalar', desc:'Barcha buyurtmalarni boshqarish'},
  prices:    {title:'Narxlar', desc:'Jonli global bozor narxlari'},
  chat:      {title:'Chat', desc:'Xaridorlar bilan muloqot'},
  analytics: {title:'Analitika', desc:'Chuqur savdo tahlili'},
  settings:  {title:'Sozlamalar', desc:'Profil va sozlamalar'},
};

function goPage(id, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const pg = document.getElementById('page-' + id);
  if (pg) pg.classList.add('on');
  if (el) el.classList.add('active');
  const meta = PAGE_META[id] || {};
  document.getElementById('tb-page').textContent = meta.title || id;
  document.getElementById('tb-desc').textContent = meta.desc || '';
}

// ══════════════════════════════════════════
// LANG
// ══════════════════════════════════════════
function setLang(lang, btn) {
  currentLang = lang;
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.remove('on'));
  document.querySelectorAll('.lang-opt').forEach(b => { if(b.textContent.toLowerCase().includes(lang) || (lang==='en'&&b.textContent==='EN') || (lang==='uz'&&b.textContent==='UZ')) b.classList.add('on'); });
  btn.classList.add('on');
  document.querySelectorAll('[data-uz]').forEach(el => {
    el.textContent = lang === 'uz' ? el.dataset.uz : el.dataset.en;
  });
  renderMarket();
}

// ══════════════════════════════════════════
// CHARTS
// ══════════════════════════════════════════
function drawBarChart(svgId, data, color='#50c86e', color2='rgba(80,200,110,0.2)') {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  const W = 520, H = parseInt(svg.getAttribute('viewBox').split(' ')[3]);
  const max = Math.max(...data);
  const n = data.length;
  const bw = (W - (n+1)*4) / n;
  let html = '';
  // area path
  const pts = data.map((v,i) => {
    const x = 4 + i*(bw+4) + bw/2;
    const y = H - 14 - ((v/max)*(H-22));
    return `${x},${y}`;
  });
  const first = pts[0].split(','), last = pts[pts.length-1].split(',');
  html += `<defs><linearGradient id="g${svgId}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${color}" stop-opacity="0.3"/><stop offset="100%" stop-color="${color}" stop-opacity="0"/></linearGradient></defs>`;
  html += `<path d="M${first[0]},${H-2} L${pts.join(' L')} L${last[0]},${H-2} Z" fill="url(#g${svgId})"/>`;
  html += `<polyline points="${pts.join(' ')}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
  // dots
  pts.forEach((p,i) => {
    const [x,y] = p.split(',');
    if(i===data.length-1) html += `<circle cx="${x}" cy="${y}" r="4" fill="${color}" stroke="var(--c-bg2)" stroke-width="2"/>`;
  });
  svg.innerHTML = html;
}

function drawPriceChart() {
  const svg = document.getElementById('price-chart');
  if (!svg) return;
  const data = [1.80, 1.95, 2.10, 2.35, 2.60, 2.80];
  const W=340, H=80, max=3.2, min=1.5;
  const pts = data.map((v,i) => {
    const x = 10 + i*(W-20)/5;
    const y = H-10 - ((v-min)/(max-min))*(H-20);
    return `${x},${y}`;
  });
  const first=pts[0].split(','), last=pts[pts.length-1].split(',');
  svg.innerHTML = `
    <defs><linearGradient id="gpc" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#50c86e" stop-opacity="0.25"/><stop offset="100%" stop-color="#50c86e" stop-opacity="0"/></linearGradient></defs>
    <path d="M${first[0]},${H} L${pts.join(' L')} L${last[0]},${H} Z" fill="url(#gpc)"/>
    <polyline points="${pts.join(' ')}" fill="none" stroke="#50c86e" stroke-width="2.5" stroke-linejoin="round"/>
    ${pts.map((p,i)=>{const[x,y]=p.split(',');return `<circle cx="${x}" cy="${y}" r="3.5" fill="${i===5?'#50c86e':'#34a854'}" stroke="var(--c-bg2)" stroke-width="1.5"/>`;}).join('')}
  `;
}

// ══════════════════════════════════════════
// MARKET
// ══════════════════════════════════════════
function setCat(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('#cat-chips .chip').forEach(c => c.classList.remove('on'));
  btn.classList.add('on');
  renderMarket();
}

function renderMarket() {
  const search = (document.getElementById('mkt-search')?.value || '').toLowerCase();
  const filtered = PRODUCTS.filter(p => {
    const matchCat = currentCat === 'all' || p.cat === currentCat;
    const n = currentLang === 'uz' ? p.name : p.nameEn;
    const matchSearch = !search || n.toLowerCase().includes(search) || p.region.toLowerCase().includes(search) || p.farmer.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });
  const grid = document.getElementById('prod-grid');
  if (!grid) return;
  document.getElementById('mkt-count').textContent = filtered.length + ' ta mahsulot';
  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--c-text3);font-size:0.9rem;">🔍 Mahsulot topilmadi</div>`;
    return;
  }
  grid.innerHTML = filtered.map(p => {
    const stars = '⭐'.repeat(Math.floor(p.stars)) + (p.stars%1?'✨':'');
    const certBadge = p.cert.length ? `<div class="prod-certified">${p.cert[0]}</div>` : '';
    return `
    <div class="prod-card" onclick="openProduct(${p.id})">
      <div class="prod-img">
        ${certBadge}
        <span>${p.emoji}</span>
        <div class="prod-region">📍 ${p.region}</div>
      </div>
      <div class="prod-body">
        <div class="prod-name">${currentLang==='uz'?p.name:p.nameEn}</div>
        <div class="prod-farmer">👨‍🌾 ${p.farmer}</div>
        <div class="prod-row">
          <div class="prod-price">$${p.price.toFixed(2)}/kg</div>
          <div class="prod-qty">📦 ${p.qty.toLocaleString()} kg</div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div class="prod-stars">${p.stars} ⭐</div>
          <div style="font-size:0.68rem;color:var(--c-text3);">👁 ${p.views}</div>
        </div>
        <button class="btn btn-green btn-sm btn-full" onclick="event.stopPropagation();openProduct(${p.id})">Buyurtma berish →</button>
      </div>
    </div>`;
  }).join('');
}

function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  selectedProduct = p;
  document.getElementById('modal-emoji').textContent = p.emoji;
  document.getElementById('modal-name').textContent = currentLang==='uz' ? p.name : p.nameEn;
  document.getElementById('modal-desc').textContent = `${p.region} viloyati · ${p.farmer}`;
  document.getElementById('modal-badges').innerHTML = p.cert.map(c => `<span class="badge green">${c}</span>`).join('') + `<span class="badge grey">⭐ ${p.stars}</span>`;
  document.getElementById('modal-details').innerHTML = `
    <div class="f-group"><label class="f-label">Narx</label><div style="font-family:var(--font-mono);font-size:1.1rem;color:var(--c-green);font-weight:700;">$${p.price.toFixed(2)}/kg</div></div>
    <div class="f-group"><label class="f-label">Mavjud miqdor</label><div style="font-weight:600;">${p.qty.toLocaleString()} kg</div></div>
    <div class="f-group"><label class="f-label">Hudud</label><div style="font-weight:600;">📍 ${p.region}</div></div>
    <div class="f-group"><label class="f-label">Fermer</label><div style="font-weight:600;">👨‍🌾 ${p.farmer}</div></div>
  `;
  document.getElementById('prod-modal').classList.add('show');
}

function closeProdModal(e) {
  if (e.target === document.getElementById('prod-modal')) {
    document.getElementById('prod-modal').classList.remove('show');
  }
}

function orderNow() {
  document.getElementById('prod-modal').classList.remove('show');
  if (selectedProduct) showToast(`📦 ${selectedProduct.name} buyurtmasi qabul qilindi!`, 'success');
}

function openChatWith() {
  document.getElementById('prod-modal').classList.remove('show');
  goPage('chat', document.querySelector('[data-page=chat]'));
}

// ══════════════════════════════════════════
// POST LISTING
// ══════════════════════════════════════════
const CAT_EMOJI = {meva:'🍑', sabzavot:'🥕', don:'🌾', quruq:'🥜'};
let myListingCount = 2;

function submitListing() {
  const name  = document.getElementById('p-name').value.trim();
  const cat   = document.getElementById('p-cat').value;
  const qty   = document.getElementById('p-qty').value;
  const price = document.getElementById('p-price').value;
  if (!name || !cat || !qty || !price) {
    showToast('⚠️ Yulduzcha (*) bilan belgilangan maydonlarni to\'ldiring!', 'error'); return;
  }
  const region = document.getElementById('p-region').value;
  const emoji = CAT_EMOJI[cat] || '🌿';
  const tbody = document.getElementById('my-list-body');
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${emoji} ${name} — ${region}</td><td style="font-family:var(--font-mono);color:var(--c-gold)">$${parseFloat(price).toFixed(2)}</td><td><span class="badge green">Faol</span></td>`;
  tbody.insertBefore(tr, tbody.firstChild);
  myListingCount++;
  document.getElementById('listing-count').textContent = myListingCount;
  clearForm();
  showToast(`✅ "${name}" e'loni muvaffaqiyatli joylandi!`, 'success');
}

function clearForm() {
  ['p-name','p-qty','p-price','p-desc'].forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
  const cat = document.getElementById('p-cat'); if(cat) cat.value = '';
  document.querySelectorAll('#cert-wrap input, #market-wrap input').forEach(c => c.checked = false);
}

// ══════════════════════════════════════════
// ORDERS
// ══════════════════════════════════════════
const ORDER_BADGE = {active:'gold', shipped:'blue', done:'green'};

function renderOrders(filter='all') {
  const list = document.getElementById('orders-list');
  if (!list) return;
  const filtered = filter === 'all' ? ORDERS : ORDERS.filter(o => o.status === filter);
  if (!filtered.length) {
    list.innerHTML = `<div style="text-align:center;padding:40px;color:var(--c-text3);">Bu holat uchun buyurtma yo'q</div>`; return;
  }
  list.innerHTML = filtered.map(o => `
    <div class="order-card">
      <div class="order-emoji">${o.emoji}</div>
      <div class="order-body">
        <div class="order-name">${o.name}</div>
        <div class="order-meta">${o.buyer} · ${o.date}</div>
      </div>
      <div class="order-right">
        <div class="order-amount">${o.amount}</div>
        <div style="margin-top:5px;"><span class="badge ${ORDER_BADGE[o.status]}">${o.statusTxt}</span></div>
      </div>
    </div>
  `).join('');
}

function filterOrders(f, btn) {
  currentOrderFilter = f;
  document.querySelectorAll('#page-orders .chip').forEach(c => c.classList.remove('on'));
  btn.classList.add('on');
  renderOrders(f);
}

// ══════════════════════════════════════════
// CHAT
// ══════════════════════════════════════════
function renderChatList() {
  const el = document.getElementById('chat-list-scroll');
  if (!el) return;
  el.innerHTML = CHATS.map(c => `
    <div class="chat-row${c.id===currentChatId?' on':''}" onclick="openChat(${c.id})">
      <div class="chat-ava" style="background:${c.bg}">${c.flag}</div>
      <div class="chat-row-info">
        <div class="chat-row-name">${c.name}</div>
        <div class="chat-row-preview">${c.preview}</div>
      </div>
      <div class="chat-row-right">
        <div class="chat-row-time">${c.time}</div>
        ${c.unread>0?`<div class="chat-unread">${c.unread}</div>`:''}
      </div>
    </div>
  `).join('');
}

function openChat(id) {
  currentChatId = id;
  const c = CHATS.find(x => x.id === id);
  if (!c) return;
  c.unread = 0;
  renderChatList();
  document.getElementById('active-ava').textContent = c.flag;
  document.getElementById('active-ava').style.background = c.bg;
  document.getElementById('active-name').textContent = `${c.name} (${c.country})`;
  const scroll = document.getElementById('chat-messages');
  scroll.innerHTML = c.msgs.map(m => `
    <div class="msg-row${m.me?' me':' them'}">
      ${!m.me ? `<div class="chat-ava" style="width:28px;height:28px;font-size:0.85rem;background:${c.bg};">${c.flag}</div>` : ''}
      <div>
        <div class="msg-bubble">${m.text}</div>
        <div class="msg-time">${m.time}</div>
      </div>
    </div>
  `).join('');
  scroll.scrollTop = scroll.scrollHeight;
}

function sendMsg() {
  const inp = document.getElementById('chat-inp');
  const text = inp.value.trim();
  if (!text) return;
  const c = CHATS.find(x => x.id === currentChatId);
  if (!c) return;
  const now = new Date();
  const time = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
  c.msgs.push({me:true, text, time});
  c.preview = text;
  inp.value = '';
  openChat(currentChatId);
  const replies = [
    'Rahmat, javobingiz uchun!',
    'Tushundim, shartnomani yuboraman.',
    'Yaxshi, kelishdik!',
    'OK, hujjatlarni tayyorlaymiz.',
    'Zo\'r! Buyurtmani rasmiylashtirish mumkinmi?',
    'Narx bo\'yicha kelishdik, davom etamiz.',
  ];
  setTimeout(() => {
    c.msgs.push({me:false, text: replies[Math.floor(Math.random()*replies.length)], time});
    c.preview = c.msgs[c.msgs.length-1].text;
    c.unread = 1;
    if (currentChatId !== c.id) renderChatList();
    else { openChat(currentChatId); }
  }, 1000 + Math.random()*800);
}

// ══════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════
let toastTimer;
function showToast(msg, type='success') {
  const toast = document.getElementById('toast');
  const icons = {success:'✅', error:'⚠️', info:'ℹ️'};
  document.getElementById('toast-icon').textContent = icons[type] || '✅';
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ══════════════════════════════════════════
// GLOBAL SEARCH
// ══════════════════════════════════════════
function globalSearch(val) {
  if (!val) return;
  const page = document.getElementById('page-market');
  if (!page.classList.contains('on')) {
    goPage('market', document.querySelector('[data-page=market]'));
  }
  document.getElementById('mkt-search').value = val;
  renderMarket();
}

// ══════════════════════════════════════════
// CANVAS PARTICLES
// ══════════════════════════════════════════
(function() {
  const canvas = document.getElementById('canvas-bg');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1
    };
  }

  function init() {
    resize();
    particles = Array.from({length: 80}, makeParticle);
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(80,200,110,${p.alpha})`;
      ctx.fill();
    });
    // draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i+1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(80,200,110,${0.04 * (1 - dist/100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', () => { resize(); });
  init();
  tick();
})();

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
(function init() {
  // Charts
  const monthData = [1200,1800,1400,2200,2900,3200,3420,2900,2600,2300,1900,1600];
  drawBarChart('dash-chart', monthData);
  drawBarChart('analytics-chart', monthData);
  drawPriceChart();

  // Market
  renderMarket();

  // Orders
  renderOrders();

  // Chat
  renderChatList();
  openChat(1);

  // Animate progress bars on load
  setTimeout(() => {
    document.querySelectorAll('.prog-fill').forEach(el => {
      const w = el.style.width;
      el.style.width = '0%';
      setTimeout(() => el.style.width = w, 100);
    });
  }, 300);
})();
