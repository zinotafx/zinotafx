const appsData = [
    { 
        id: 1, 
        cat: 'action', 
        name: "ZINOTAFX MACRO V4", 
        ver: "4.0.2", 
        size: "12.5 MB", 
        rate: "4.9", 
        downloads: "50K+", 
        icon: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=150", 
        url: "https://download1638.mediafire.com/ratpww1615ogVBIZdlfoDej3bzZuO7F1TBMQfvAYeFhEzGFWp_Apx8i39-Nq950ZY-ISsvglBcN881zLZ8s3W4HBo1OSUItjFxvpWaFTe29HOHxxHQ3GltogtDvi2uWsNt_8x_yK3c4Hd1pEr0KBg-7ffqtdfXGtgaVvT4grjD1i-G0/8zdgcgqhpy1kifx/ZINOTAFX+MACRO_4.0.apk" 
    },
    { 
        id: 2, 
        cat: 'action', 
        name: "FREE FIRE MOD VIP", 
        ver: "1.104", 
        size: "450 MB", 
        rate: "4.8", 
        downloads: "100K+", 
        icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150", 
        url: "#" 
    }
];

// تهيئة الأيقونات عند تحميل الصفحة
lucide.createIcons();

function toggleSidebar() {
    const side = document.getElementById('sidebar');
    const over = document.getElementById('overlay');
    side.classList.toggle('active');
    over.style.display = side.classList.contains('active') ? 'block' : 'none';
}

function renderStore(data = appsData) {
    const list = document.getElementById('appList');
    list.innerHTML = data.map(app => `
        <div class="app-row" onclick="openPage(${app.id})">
            <img src="${app.icon}" class="app-icon">
            <div class="app-info">
                <div class="app-name">${app.name}</div>
                <div class="app-meta">${app.cat === 'action' ? 'ألعاب' : 'أدوات'} • ${app.size} • ★ ${app.rate}</div>
            </div>
            <i data-lucide="chevron-left" size="18" style="color:var(--text-dim)"></i>
        </div>
    `).join('');
    lucide.createIcons();
}

// دالة فتح صفحة تفاصيل التطبيق مع ربط صفحة المطور
function openPage(id) {
    const app = appsData.find(a => a.id === id);
    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <div class="app-header-large">
            <img src="${app.icon}">
            <div>
                <h1 style="font-size:1.6rem; line-height:1.2;">${app.name}</h1>
                <p onclick="openDevPage()" style="color:var(--primary); font-weight:700; margin-top:5px; cursor:pointer; display:inline-flex; align-items:center; gap:5px;">
                    ZINOTAFX Official <i data-lucide="badge-check" size="16"></i>
                </p>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-item"><b>${app.rate} ★</b><span>التقييم</span></div>
            <div class="stat-item"><b>${app.size}</b><span>المساحة</span></div>
            <div class="stat-item"><b>${app.downloads}</b><span>تثبيت</span></div>
        </div>

        <div class="screenshots">
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400">
        </div>

        <div style="margin: 25px 0; border-right: 4px solid var(--primary); padding-right: 15px;">
            <h3 style="margin-bottom:8px;">الوصف</h3>
            <p style="color:var(--text-dim); line-height:1.6; font-size:0.95rem;">
                تم فحص هذا الملف وتوثيقه بواسطة ZINOTAFX. يمنحك مميزات حصرية وأداء عالي الاستقرار.
            </p>
        </div>

        <button class="btn-install" id="installBtn" onclick="startDownload('${app.url}')">تثبيت مباشر</button>

        <div id="dlSection" class="download-ui">
            <p id="dlStatus" style="font-weight:700;">جاري التحقق من الحزمة...</p>
            <div class="progress-container"><div id="pBar" class="progress-bar"></div></div>
            <p style="color:var(--primary); font-size:1.2rem; font-weight:900;"><span id="pNum">0</span>%</p>
        </div>
    `;
    document.getElementById('pageModal').style.display = 'block';
    lucide.createIcons();
}

// دالة فتح صفحة المطور (بناء المحتوى ديناميكياً)
function openDevPage() {
    const container = document.getElementById('devPageContainer');
    container.innerHTML = `
        <div id="devPageModal" class="page-modal dev-glass-effect" style="display:block; z-index:9000;">
            <div class="modal-nav">
                <button onclick="closeDevPage()" class="back-circle"><i data-lucide="arrow-right"></i></button>
            </div>
            <div class="container">
                <div class="dev-card-main" style="animation: slideUp 0.4s ease-out;">
                    <div class="dev-banner"></div>
                    <div class="dev-avatar-wrapper">
                        <img src="https://i.ibb.co/LhYm0vH/zinota-logo.png" class="dev-avatar-img">
                        <div class="verified-badge"><i data-lucide="check"></i></div>
                    </div>
                    <h1 class="dev-name">ZINOTA<span>FX</span></h1>
                    <p class="dev-tag">Developer & Premium Modder</p>
                    <div class="dev-stats-box">
                        <div class="dev-stat-item"><b>150+</b><span>مشروع</span></div>
                        <div class="dev-stat-item"><b>1M+</b><span>تنزيل</span></div>
                        <div class="dev-stat-item"><b>2025</b><span>تأسيس</span></div>
                    </div>
                    <div class="social-links-grid">
                        <a href="https://t.me/zinotafx_21" target="_blank" class="s-link tg"><i data-lucide="send"></i> تليجرام</a>
                        <a href="https://youtube.com/@zinotafx.21" target="_blank" class="s-link yt"><i data-lucide="youtube"></i> يوتيوب</a>
                        <a href="https://tiktok.com/@zinotafx.21" target="_blank" class="s-link tk"><i data-lucide="music"></i> تيك توك</a>
                        <a href="https://instagram.com/zinotafx.21" target="_blank" class="s-link ig"><i data-lucide="instagram"></i> إنستقرام</a>
                    </div>
                    <p class="dev-footer-text">© 2025 ZINOTAFX - جميع الحقوق محفوظة</p>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

function closeDevPage() {
    document.getElementById('devPageContainer').innerHTML = '';
}

function startDownload(url) {
    if(url === "#") { alert("الرابط غير متوفر حالياً."); return; }
    const btn = document.getElementById('installBtn');
    const dlSection = document.getElementById('dlSection');
    const pBar = document.getElementById('pBar');
    const pNum = document.getElementById('pNum');
    const status = document.getElementById('dlStatus');

    btn.disabled = true;
    dlSection.style.display = 'block';

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            status.innerText = "اكتمل الفحص! بدأ التحميل... ✅";
            window.location.href = url;
        } else {
            width += Math.floor(Math.random() * 10) + 2;
            if (width > 100) width = 100;
            pBar.style.width = width + '%';
            pNum.innerText = width;
        }
    }, 300);
}

function closePage() { document.getElementById('pageModal').style.display = 'none'; }

function searchApps() {
    const q = document.getElementById('searchInp').value.toLowerCase();
    renderStore(appsData.filter(a => a.name.toLowerCase().includes(q)));
}

function filterCategory(cat) {
    toggleSidebar();
    if(cat === 'all') renderStore(appsData);
    else renderStore(appsData.filter(a => a.cat === cat));
}

window.onload = () => renderStore();