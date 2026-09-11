(() => {
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#main-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = `Swish website enquiry - ${data.get('service') || 'general enquiry'}`;
      const body = [
        `Name: ${data.get('name') || ''}`,
        `Phone or email: ${data.get('contact') || ''}`,
        `Service: ${data.get('service') || ''}`,
        '',
        `${data.get('message') || ''}`
      ].join('\n');
      window.location.href = `mailto:swishhousekeeping@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
