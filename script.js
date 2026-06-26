// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Cursor Glow (desktop only)
const glow = document.getElementById('cursor-glow');
if (glow && window.innerWidth > 900) {
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
}

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
const toggle = document.getElementById('nav-toggle');
const mobMenu = document.getElementById('mob-menu');
if (toggle) {
    toggle.addEventListener('click', () => {
        mobMenu.classList.toggle('active');
        const spans = toggle.querySelectorAll('span');
        if (mobMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.transform = 'rotate(-45deg) translate(2px, -2px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.transform = '';
        }
    });
    mobMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            mobMenu.classList.remove('active');
            toggle.querySelectorAll('span').forEach(s => s.style.transform = '');
        });
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const id = this.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Cookie Consent Banner (NDPA 2023)
const cookieBanner = document.getElementById('cookie-banner');
const acceptCookies = document.getElementById('accept-cookies');
if (cookieBanner && acceptCookies) {
    if (!localStorage.getItem('tta-cookies-accepted')) {
        setTimeout(() => { cookieBanner.style.display = 'block'; }, 1200);
    }
    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('tta-cookies-accepted', 'true');
        cookieBanner.style.display = 'none';
    });
}

// Contact form -> real WhatsApp handoff (was a fake success state; now actually delivers the enquiry)
const form = document.getElementById('contact-form');
const WA_NUMBER = '2347084554203';
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn-submit');
        const orig = btn.textContent;
        const fields = form.querySelectorAll('input, select, textarea');
        const name = (fields[0] && fields[0].value || '').trim();
        const phone = (fields[1] && fields[1].value || '').trim();
        const service = (fields[2] && fields[2].value || '').trim();
        const details = (fields[3] && fields[3].value || '').trim();
        const text =
            'New quote request from your website\n\n' +
            'Name: ' + name + '\n' +
            'Phone: ' + phone + '\n' +
            'Service: ' + service + '\n' +
            'Details: ' + details;
        const waUrl = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
        btn.textContent = 'Opening WhatsApp...';
        btn.style.opacity = '0.7';
        const win = window.open(waUrl, '_blank');
        setTimeout(() => {
            btn.style.opacity = '1';
            if (win) {
                btn.textContent = 'Request Sent ✓';
                setTimeout(() => { btn.textContent = orig; form.reset(); }, 4000);
            } else {
                // popup blocked: send them via the current tab instead so the enquiry still goes through
                window.location.href = waUrl;
            }
        }, 600);
    });
}
