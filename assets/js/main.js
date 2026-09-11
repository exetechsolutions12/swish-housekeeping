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


// Swish contact form: sends directly via Formspree once YOUR_FORM_ID is replaced.
const swishForm = document.querySelector('#contact-form');
if (swishForm) {
  const status = document.querySelector('#form-status');
  swishForm.addEventListener('submit', async (event) => {
    const endpoint = swishForm.getAttribute('action') || '';
    if (endpoint.includes('YOUR_FORM_ID')) {
      event.preventDefault();
      if (status) status.textContent = 'The contact form still needs its Formspree form ID before it can send.';
      return;
    }
    event.preventDefault();
    const button = swishForm.querySelector('button[type="submit"]');
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }
    if (status) status.textContent = '';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(swishForm),
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) throw new Error('Form submission failed');
      swishForm.reset();
      if (status) status.textContent = 'Thanks — your enquiry has been sent to Sarah.';
    } catch (error) {
      if (status) status.textContent = 'Sorry, that did not send. Please call, text or email Sarah instead.';
    } finally {
      if (button) { button.disabled = false; button.textContent = 'Send enquiry'; }
    }
  });
}
