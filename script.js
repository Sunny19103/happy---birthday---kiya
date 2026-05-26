// TOMBOL MULAI
const startBtn = document.getElementById('startButton');
if (startBtn) {
    startBtn.addEventListener('click', function () {
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        startParticles();
    });
}

// NAVIGASI HALAMAN
let currentPage = 1;

function showPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`page${pageNumber}`).classList.add('active');
    currentPage = pageNumber;
}

document.getElementById('next1')?.addEventListener('click', () => showPage(2));
document.getElementById('next2')?.addEventListener('click', () => showPage(3));
document.getElementById('next3')?.addEventListener('click', () => showPage(4));
document.getElementById('next4')?.addEventListener('click', () => showPage(5));
document.getElementById('next5')?.addEventListener('click', () => showPage(6));

document.getElementById('back2')?.addEventListener('click', () => showPage(1));
document.getElementById('back3')?.addEventListener('click', () => showPage(2));
document.getElementById('back4')?.addEventListener('click', () => showPage(3));
document.getElementById('back5')?.addEventListener('click', () => showPage(4));
document.getElementById('back6')?.addEventListener('click', () => showPage(5));

// KONTROL MUSIK
const audio = document.getElementById('birthdaySong');
document.getElementById('playBtn')?.addEventListener('click', () => audio?.play());
document.getElementById('pauseBtn')?.addEventListener('click', () => audio?.pause());

// COUNTDOWN ULANG TAHUN
function updateCountdown() {
    const birthday = new Date(2026, 4, 27);
    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = 'HARI INI HARIMU';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (86400000)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (3600000)) / (1000 * 60));
    const seconds = Math.floor((diff % (60000)) / 1000);

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// EFEK KONFETI
function createConfetti() {
    const colors = ['#2ab3a6', '#1a7f6b', '#0f4c5c', '#3bc4b6', '#5dd4c8', '#ffd93d', '#ffaa66'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        const size = Math.random() * 8 + 4;
        confetti.style.position = 'fixed';
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '1px';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-20px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        document.body.appendChild(confetti);

        confetti.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], { duration: 1500 + Math.random() * 1000 });

        setTimeout(() => confetti.remove(), 2000);
    }
}

// PARTIKEL JATUH
let particleInterval = null;

function startParticles() {
    if (particleInterval) clearInterval(particleInterval);
    particleInterval = setInterval(() => {
        const jumlah = Math.random() > 0.6 ? 2 : 1;
        for (let i = 0; i < jumlah; i++) {
            createFallingParticle();
        }
    }, 350);
}

function createFallingParticle() {
    const colors = ['#2ab3a6', '#1a7f6b', '#0f4c5c', '#3bc4b6', '#5dd4c8', '#ffd93d', '#ffaa66'];
    const shapes = ['●', '○', '✦', '▪', '💙', '🌊'];

    const particle = document.createElement('div');

    if (Math.random() < 0.65) {
        const size = Math.random() * 8 + 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        particle.style.textContent = '';
    } else {
        particle.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        particle.style.fontSize = (Math.random() * 12 + 10) + 'px';
        particle.style.color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = 'auto';
        particle.style.height = 'auto';
        particle.style.backgroundColor = 'transparent';
    }

    particle.style.position = 'fixed';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '-20px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9998';
    particle.style.opacity = Math.random() * 0.6 + 0.3;

    document.body.appendChild(particle);

    const duration = 2500 + Math.random() * 1500;
    const startTime = performance.now();
    const startTop = -20;
    const endTop = window.innerHeight + 50;
    const startLeft = parseFloat(particle.style.left);

    function animateParticle(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const top = startTop + (endTop - startTop) * progress;
        const sway = Math.sin(progress * Math.PI * 2.5) * 10 * (1 - progress);

        particle.style.top = top + 'px';
        particle.style.left = (startLeft + sway) + 'px';
        particle.style.opacity = 1 - progress;

        if (progress < 1) {
            requestAnimationFrame(animateParticle);
        } else {
            particle.remove();
        }
    }

    requestAnimationFrame(animateParticle);
}

// FOTO MEMBESAR SAAT DIKLIK
function createImageModal(imgSrc) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.85)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '10000';
    modal.style.cursor = 'pointer';

    const imgContainer = document.createElement('div');
    imgContainer.style.position = 'relative';
    imgContainer.style.maxWidth = '90%';
    imgContainer.style.maxHeight = '90%';

    const largeImg = document.createElement('img');
    largeImg.src = imgSrc;
    largeImg.style.maxWidth = '100%';
    largeImg.style.maxHeight = '100%';
    largeImg.style.borderRadius = '15px';
    largeImg.style.boxShadow = '0 0 30px rgba(0,0,0,0.3)';
    largeImg.style.border = '4px solid #2ab3a6';

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '-40px';
    closeBtn.style.right = '-10px';
    closeBtn.style.width = '35px';
    closeBtn.style.height = '35px';
    closeBtn.style.backgroundColor = '#2ab3a6';
    closeBtn.style.border = 'none';
    closeBtn.style.borderRadius = '50%';
    closeBtn.style.fontSize = '20px';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.color = 'white';
    closeBtn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    closeBtn.style.transition = 'all 0.2s';

    closeBtn.onmouseover = () => {
        closeBtn.style.backgroundColor = '#1a7f6b';
        closeBtn.style.transform = 'scale(1.05)';
    };
    closeBtn.onmouseout = () => {
        closeBtn.style.backgroundColor = '#2ab3a6';
        closeBtn.style.transform = 'scale(1)';
    };

    imgContainer.appendChild(largeImg);
    imgContainer.appendChild(closeBtn);
    modal.appendChild(imgContainer);

    modal.onclick = (e) => {
        if (e.target === modal || e.target === closeBtn) {
            modal.remove();
        }
    };

    document.body.appendChild(modal);
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 0.3s';
    setTimeout(() => { modal.style.opacity = '1'; }, 10);
}

document.querySelectorAll('.memory-card').forEach(card => {
    const img = card.querySelector('.photo-small img');
    if (img) {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            createImageModal(img.src);
            createConfetti();
        });
    }
});

// PESAN TERSEMBUNYI DENGAN PASSWORD
const submitBtn = document.getElementById('submitPassword');
const passwordInput = document.getElementById('passwordInput');
const passwordError = document.getElementById('passwordError');
const lockedDiv = document.getElementById('secretLocked');
const unlockedDiv = document.getElementById('secretUnlocked');

if (submitBtn) {
    submitBtn.addEventListener('click', function () {
        const password = passwordInput.value;

        if (password === '2705') {
            lockedDiv.style.display = 'none';
            unlockedDiv.style.display = 'block';
            createConfetti();
            createConfetti();
            createConfetti();
        } else {
            passwordError.textContent = 'Kata sandi salah';
            passwordInput.value = '';
            passwordInput.focus();
        }
    });
}

if (passwordInput) {
    passwordInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
}

startParticles();

console.log('Happy Birthday Kiyaa - Ocean Theme');
