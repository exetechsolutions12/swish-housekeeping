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
  if (!form) return;
  const status = document.querySelector('#form-status');
  let sending = false;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending) return;
    const button = form.querySelector('button[type="submit"]');
    sending = true;
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }
    if (status) status.textContent = '';
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      if (status) status.textContent = 'Thanks — your enquiry has been sent to Sarah.';
    } catch (error) {
      if (status) status.textContent = 'Sorry, that did not send. Please call, text or email Sarah instead.';
    } finally {
      sending = false;
      if (button) { button.disabled = false; button.textContent = 'Send enquiry'; }
    }
  });
})();
