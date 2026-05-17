// ========== NAVIGASI HALAMAN ==========
let currentPage = 1;

// Pindah ke halaman berikutnya (NEXT)
document.getElementById('next1')?.addEventListener('click', () => {
    goToPage(2);
});

document.getElementById('next2')?.addEventListener('click', () => {
    goToPage(3);
});

document.getElementById('next3')?.addEventListener('click', () => {
    goToPage(4);
});

document.getElementById('next4')?.addEventListener('click', () => {
    goToPage(5);
});

// Kembali ke halaman sebelumnya (BACK)
document.getElementById('back2')?.addEventListener('click', () => {
    goToPage(1);
});

document.getElementById('back3')?.addEventListener('click', () => {
    goToPage(2);
});

document.getElementById('back4')?.addEventListener('click', () => {
    goToPage(3);
});

document.getElementById('back5')?.addEventListener('click', () => {
    goToPage(4);
});

// Fungsi pindah halaman
function goToPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(`page${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    currentPage = pageNumber;
    
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

// ========== KONTROL MUSIK (HALAMAN 3) ==========
const audio = document.getElementById('birthdaySong');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');

if (playBtn) {
    playBtn.addEventListener('click', () => {
        if (audio) {
            audio.play();
            createMusicNote();
        }
    });
}

if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
        if (audio) {
            audio.pause();
        }
    });
}

function createMusicNote() {
    const notes = ['♪', '♫', '🎵', '🎶'];
    for (let i = 0; i < 8; i++) {
        const note = document.createElement('div');
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.position = 'fixed';
        note.style.left = Math.random() * window.innerWidth + 'px';
        note.style.bottom = '20px';
        note.style.fontSize = '20px';
        note.style.pointerEvents = 'none';
        note.style.zIndex = '9999';
        note.style.opacity = '1';
        note.style.transition = 'all 1.5s ease';
        document.body.appendChild(note);
        
        setTimeout(() => {
            note.style.transform = 'translateY(-150px)';
            note.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            note.remove();
        }, 1500);
    }
}

// ========== TOMBOL BUKA DI HALAMAN 4 ==========
const openBtn = document.getElementById('openLetterBtn');

if (openBtn) {
    openBtn.addEventListener('click', () => {
        createConfetti();
        
        alert('💖✨ For you, Kiyaa! ✨💖\n\nYou are so special to me!\n\nSemoga kamu selalu bahagia! 🎂');
        
        openBtn.textContent = '✨ Terbuka ✨';
        openBtn.disabled = true;
        openBtn.style.opacity = '0.7';
        openBtn.style.cursor = 'not-allowed';
    });
}

// ========== TOMBOL SELESAI DI HALAMAN 5 ==========
const finishBtn = document.getElementById('finishBtn');

if (finishBtn) {
    finishBtn.addEventListener('click', () => {
        createConfetti();
        
        setTimeout(() => {
            createConfetti();
        }, 300);
        
        setTimeout(() => {
            createConfetti();
        }, 600);
        
        alert('🎉✨ Happy Birthday Kiyaa! ✨🎉\n\nTerima kasih sudah melihat website ini!\n\nSemoga semua kebaikan datang padamu!\n\nSee you! 👋💖');
        
        finishBtn.textContent = '🎊 TERSAMPAIKAN 🎊';
        finishBtn.disabled = true;
        finishBtn.style.opacity = '0.7';
        finishBtn.style.cursor = 'not-allowed';
    });
}

// ========== EFEK KONFETI ==========
function createConfetti() {
    const colors = ['#e8c8a0', '#d4b88c', '#c9a06c', '#b88c5a', '#e0c8a0', '#f0d0a8', '#c4a070'];
    
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        const size = Math.random() * 10 + 5;
        confetti.style.position = 'fixed';
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-20px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        document.body.appendChild(confetti);
        
        confetti.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 1500 + Math.random() * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => confetti.remove(), 2500);
    }
}

// ========== EFEK KLIK DI MEMORY CARDS (HALAMAN 2) ==========
document.querySelectorAll('.memory-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.97)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
        createConfetti();
    });
});

console.log('🎂 Happy Birthday Kiyaa! 🎂');