const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.nav-links');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
const form = document.querySelector('[data-enquiry-form]');
if (form && form.getAttribute('action') === '#') {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) {
      status.style.display = 'block';
      status.textContent = 'This preview form is ready to connect to Sarah’s chosen email/form service before launch.';
    }
  });
}
