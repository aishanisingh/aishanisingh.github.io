/* ============================================
   Aishani Singh — Personal Site
   Minimal interaction layer
   ============================================ */

(function () {
    'use strict';

    /* ---------- Experience tabs ---------- */
    function initExperienceTabs() {
        const tabs   = document.querySelectorAll('.exp-tab');
        const panels = document.querySelectorAll('.exp-panel');
        if (!tabs.length) return;

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');

                tabs.forEach((t) => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                panels.forEach((p) => p.classList.remove('active'));

                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');

                const targetPanel = document.querySelector(
                    '.exp-panel[data-panel="' + target + '"]'
                );
                if (targetPanel) targetPanel.classList.add('active');
            });

            // Keyboard navigation between tabs (← →)
            tab.addEventListener('keydown', (e) => {
                if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
                e.preventDefault();
                const list = Array.from(tabs);
                const i = list.indexOf(tab);
                const next = e.key === 'ArrowRight'
                    ? list[(i + 1) % list.length]
                    : list[(i - 1 + list.length) % list.length];
                next.focus();
                next.click();
            });
        });
    }

    /* ---------- Mobile menu ---------- */
    function initMobileMenu() {
        const toggle = document.getElementById('nav-toggle');
        const menu   = document.getElementById('mobile-menu');
        if (!toggle || !menu) return;

        const close = () => {
            menu.classList.remove('active');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        };
        const open = () => {
            menu.classList.add('active');
            toggle.classList.add('active');
            toggle.setAttribute('aria-expanded', 'true');
        };

        toggle.addEventListener('click', () => {
            menu.classList.contains('active') ? close() : open();
        });

        // Close on link click
        menu.querySelectorAll('a').forEach((a) => {
            a.addEventListener('click', close);
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !toggle.contains(e.target)) {
                close();
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') close();
        });
    }

    /* ---------- Smooth scroll for in-page anchors ---------- */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((a) => {
            a.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#' || href.length < 2) return;
                const target = document.querySelector(href);
                if (!target) return;
                e.preventDefault();
                const navH = document.querySelector('.nav')?.offsetHeight || 0;
                const y = target.getBoundingClientRect().top + window.scrollY - navH + 1;
                window.scrollTo({ top: y, behavior: 'smooth' });
            });
        });
    }

    /* ---------- Nav state on scroll ---------- */
    function initNavScroll() {
        const nav = document.querySelector('.nav');
        if (!nav) return;
        let lastY = window.scrollY;
        const onScroll = () => {
            const y = window.scrollY;
            nav.classList.toggle('scrolled', y > 8);
            lastY = y;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ---------- Init ---------- */
    document.addEventListener('DOMContentLoaded', () => {
        initExperienceTabs();
        initMobileMenu();
        initSmoothScroll();
        initNavScroll();
    });
})();
