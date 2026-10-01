// Default execution on window load: Light ON default active state
window.onload = function () {
    controlLight(true);
};

// 1. Light On/Off Logic with Premium Glow & Active State styling
function controlLight(isOn) {
    const card = document.getElementById('light-card');
    const icon = document.getElementById('main-light-icon');
    const glassGlow = document.getElementById('bulb-glass-glow');
    const beam = document.getElementById('light-beam');
    const cardGlow = document.getElementById('card-glow');
    const btnOn = document.getElementById('btn-light-on');
    const btnOff = document.getElementById('btn-light-off');

    if (isOn) {
        // ১. অন ইফেক্ট
        if (icon) icon.style.filter = 'opacity(1) brightness(1.2) drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.8))';
        if (glassGlow) glassGlow.style.opacity = '1';
        if (beam) {
            beam.style.opacity = '1';
            beam.style.transform = 'scaleY(1)';
        }
        if (cardGlow) cardGlow.style.opacity = '1';
        card.classList.add('light-on-glow');
        card.classList.remove('light-off-glow');

        // ২. বাটন স্টাইল (স্থায়ী hover ক্লাসহ)
        btnOn.className = "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 sm:py-2.5 rounded-xl shadow-lg text-xs sm:text-sm transition cursor-pointer ring-2 ring-amber-300";
        btnOff.className = "bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 font-bold py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm transition cursor-pointer";

    } else {
        // ১. অফ ইফেক্ট (৩০% আবছা)
        if (icon) icon.style.filter = 'opacity(0.3) brightness(0.35) grayscale(0.6)';
        if (glassGlow) glassGlow.style.opacity = '0';
        if (beam) {
            beam.style.opacity = '0';
            beam.style.transform = 'scaleY(0)';
        }
        if (cardGlow) cardGlow.style.opacity = '0';
        card.classList.remove('light-on-glow');
        card.classList.add('light-off-glow');

        // ২. বাটন স্টাইল (স্থায়ী hover ক্লাসহ)
        btnOff.className = "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 sm:py-2.5 rounded-xl shadow-lg text-xs sm:text-sm transition cursor-pointer ring-2 ring-amber-300";
        btnOn.className = "bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 font-bold py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm transition cursor-pointer";
    }
}

// 2. Icecream Selection Logic
// ফ্লেভার কালার কনফিগারেশন
const flavorColors = {
    strawberry: { bg: '#db2777', text: '#ffffff', border: '#f472b6' }, // Pink
    vanilla:    { bg: '#fef3c7', text: '#0f172a', border: '#fde68a' }, // Soft Yellow
    chocolate:  { bg: '#78350f', text: '#fef3c7', border: '#b45309' }, // Cocoa Brown
    kulfi:      { bg: '#ca8a04', text: '#0f172a', border: '#fde047' }, // Golden Yellow
    lemon:      { bg: '#65a30d', text: '#ffffff', border: '#a3e635' }  // Citrus Green
};

// ওয়েবসাইট লোড হলে ডিফল্টভাবে Strawberry সিলেক্টেড থাকবে
window.addEventListener('DOMContentLoaded', () => {
    showIcecream('Strawberry', 'images/strawberry.png', 'strawberry');
});

function showIcecream(name, imagePath, flavorKey) {
    const imgElement = document.getElementById('icecream-img');
    const titleElement = document.getElementById('icecream-title');

    // ১. ইমেজ ও টাইটেল পরিবর্তন
    if (imgElement) {
    imgElement.style.transform = 'scale(0.95)';
    imgElement.style.opacity = '0.8';

    // সময় ১৫০০ms / ১৫০ms থেকে কমিয়ে ৩০ms করা হয়েছে (সাথে সাথে রেসপন্স করার জন্য)
    setTimeout(() => {
        imgElement.src = imagePath;
        imgElement.alt = `${name} Icecream`;
        imgElement.style.transform = 'scale(1)';
        imgElement.style.opacity = '1';
    }, 30); 
}

    if (titleElement) {
        titleElement.innerText = `${name} Icecream`;
    }

    // ২. সকল বাটনকে রিস্টোর/ইনঅ্যাক্টিভ করা
    const allBtns = document.querySelectorAll('.flavor-btn');
    allBtns.forEach(btn => {
        btn.style.backgroundColor = 'rgba(15, 23, 42, 0.8)'; // Dark slate background
        btn.style.color = '#cbd5e1'; // Slate text
        btn.style.borderColor = 'rgba(245, 158, 11, 0.3)';
        btn.style.boxShadow = 'none';
        btn.style.transform = 'scale(1)';
    });

    // ৩. সিলেক্টেড বাটনকে স্থায়ী কালারে হাইলাইট করা
    const activeBtn = document.getElementById(`btn-${flavorKey}`);
    const activeColor = flavorColors[flavorKey];

    if (activeBtn && activeColor) {
        activeBtn.style.backgroundColor = activeColor.bg;
        activeBtn.style.color = activeColor.text;
        activeBtn.style.borderColor = activeColor.border;
        activeBtn.style.boxShadow = `0 0 15px ${activeColor.bg}80`;
        activeBtn.style.transform = 'scale(1.08)';
    }
}

// 3. Day / Night Selector Logic
window.addEventListener('DOMContentLoaded', () => {
    setDayNight('day');
});

function setDayNight(mode) {
    const titleDiv = document.getElementById('dn-title');
    const bgImg = document.getElementById('dn-bg-img');
    const btnDay = document.getElementById('btn-day');
    const btnNight = document.getElementById('btn-night');

    if (mode === 'day') {
        
        // ডে মোডে ১০০% নরমাল আলো
        if (bgImg) {
            bgImg.style.filter = 'brightness(1) contrast(1)';
        }

        if (btnDay) {
            btnDay.className = "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 sm:py-2.5 rounded-xl shadow-lg text-xs sm:text-sm transition cursor-pointer ring-2 ring-amber-300";
        }
        if (btnNight) {
            btnNight.className = "bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 font-bold py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm transition cursor-pointer";
        }

    } else if (mode === 'night') {
        
        // নাইট মোডে ঠিক ২০% ভিজিবল রাখা (brightness 0.20)
        if (bgImg) {
            bgImg.style.filter = 'brightness(0.17) contrast(1.1)';
        }

        if (btnNight) {
            btnNight.className = "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 sm:py-2.5 rounded-xl shadow-lg text-xs sm:text-sm transition cursor-pointer ring-2 ring-amber-300";
        }
        if (btnDay) {
            btnDay.className = "bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 font-bold py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm transition cursor-pointer";
        }
    }
}

// 4. Burger Selection Logic
// Function to Change Burger Patty Dynamically
function changePatty(imageName, titleText, btnElement) {
    const pattyImg = document.getElementById('burger-patty-img');
    const statusText = document.getElementById('burger-status');
    const allButtons = document.querySelectorAll('.patty-btn');

    if (!pattyImg) return;

    // 1. Fade-out and scale-down animation
    pattyImg.classList.add('opacity-0', 'scale-95');

    setTimeout(() => {
        // 2. Change image source and status text
        pattyImg.src = `${imageName}`;
        if (statusText) statusText.innerText = titleText;

        // 3. Fade-in animation after image load
        pattyImg.onload = () => {
            pattyImg.classList.remove('opacity-0', 'scale-95');
        };
        
        // Backup in case cached
        pattyImg.classList.remove('opacity-0', 'scale-95');
    }, 200);

    // 4. Update Button Styles
    allButtons.forEach(btn => {
        btn.className = "patty-btn bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold py-2 px-2 text-xs sm:text-sm rounded-xl transition-all duration-200";
    });

    if (btnElement) {
        btnElement.className = "patty-btn bg-amber-500 text-slate-950 font-bold py-2 px-2 text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-md ring-2 ring-amber-300";
    }
}