// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for back links and internal navigation
  document.querySelectorAll('a[href^="index.html"], a.back-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });

  // Back button on LiveWebsite.html page
  const backBtn = document.getElementById('backToPortfolio');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // Fade-in effect on page load
  document.body.style.opacity = 0;
  window.requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 1s ease-in';
    document.body.style.opacity = 1;
  });

  // Back to Top Button Creation
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = '↑ Top';
  backToTopBtn.id = 'backToTopBtn';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  backToTopBtn.style.position = 'fixed';
  backToTopBtn.style.bottom = '30px';
  backToTopBtn.style.right = '30px';
  backToTopBtn.style.padding = '0.6rem 1rem';
  backToTopBtn.style.fontSize = '1.2rem';
  backToTopBtn.style.backgroundColor = '#ffd700';
  backToTopBtn.style.color = '#1d2b64';
  backToTopBtn.style.border = 'none';
  backToTopBtn.style.borderRadius = '30px';
  backToTopBtn.style.cursor = 'pointer';
  backToTopBtn.style.boxShadow = '0 4px 10px rgba(255, 215, 0, 0.6)';
  backToTopBtn.style.display = 'none';
  backToTopBtn.style.zIndex = '1000';
  document.body.appendChild(backToTopBtn);

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // Card subtle hover effect (extra JS scaling)
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.5)';
      card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    });
  });

  // Keyboard focus outlines for accessibility
  const focusableElements = document.querySelectorAll('a, button');
  focusableElements.forEach(el => {
    el.addEventListener('focus', () => {
      el.style.outline = '3px solid #ffd700';
      el.style.outlineOffset = '3px';
    });
    el.addEventListener('blur', () => {
      el.style.outline = 'none';
    });
  });

  // Dark/Light mode toggle
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = 'Toggle Dark/Light Mode';
  toggleBtn.id = 'modeToggleBtn';
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.top = '20px';
  toggleBtn.style.right = '20px';
  toggleBtn.style.padding = '0.5rem 1rem';
  toggleBtn.style.fontSize = '0.9rem';
  toggleBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  toggleBtn.style.color = '#1d2b64';
  toggleBtn.style.border = 'none';
  toggleBtn.style.borderRadius = '20px';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.zIndex = '1000';
  document.body.appendChild(toggleBtn);

  const darkTheme = {
    background: 'linear-gradient(135deg, #1d2b64, #f8cdda)',
    color: '#fff',
    linkColor: '#ffd700',
    buttonBg: '#ffd700',
    buttonColor: '#1d2b64',
  };

  const lightTheme = {
    background: '#f8f9fa',
    color: '#1d2b64',
    linkColor: '#1d2b64',
    buttonBg: '#1d2b64',
    buttonColor: '#ffd700',
  };

  function applyTheme(theme) {
    document.body.style.background = theme.background;
    document.body.style.color = theme.color;
    document.querySelectorAll('a').forEach(a => {
      a.style.color = theme.linkColor;
    });
    document.querySelectorAll('.main-link').forEach(btn => {
      btn.style.backgroundColor = theme.buttonBg;
      btn.style.color = theme.buttonColor;
    });
    backToTopBtn.style.backgroundColor = theme.buttonBg;
    backToTopBtn.style.color = theme.buttonColor;
    toggleBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    toggleBtn.style.color = theme.buttonColor;
  }

  // Start with dark theme by default
  let isDark = true;
  applyTheme(darkTheme);

  toggleBtn.addEventListener('click', () => {
    if (isDark) {
      applyTheme(lightTheme);
    } else {
      applyTheme(darkTheme);
    }
    isDark = !isDark;
  });
});
