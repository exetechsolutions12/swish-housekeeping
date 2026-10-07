(() => {
  const root = document.documentElement;
  const options = {
    text: ['large-text', 'swish-large-text'],
    contrast: ['high-contrast', 'swish-high-contrast'],
    spacing: ['comfortable-spacing', 'swish-text-spacing'],
    links: ['underline-links', 'swish-underline-links']
  };
  const tools = document.createElement('div');
  tools.className = 'accessibility-tools';
  tools.innerHTML = `
    <button class="accessibility-toggle" type="button" aria-expanded="false" aria-controls="accessibility-panel">Accessibility</button>
    <div class="accessibility-panel" id="accessibility-panel" role="group" aria-labelledby="accessibility-heading" hidden>
      <p id="accessibility-heading"><strong>Display options</strong></p>
      <button type="button" data-accessibility="text" aria-pressed="false">Larger text</button>
      <button type="button" data-accessibility="contrast" aria-pressed="false">High contrast</button>
      <button type="button" data-accessibility="spacing" aria-pressed="false">Extra line spacing</button>
      <button type="button" data-accessibility="links" aria-pressed="false">Underline links</button>
      <button type="button" data-accessibility="reset">Reset</button>
      <button type="button" data-accessibility="close">Close</button>
    </div>`;
  document.body.appendChild(tools);
  const toggle = tools.querySelector('.accessibility-toggle');
  const panel = tools.querySelector('.accessibility-panel');

  function updateButtons() {
    Object.entries(options).forEach(([action, [className]]) => {
      tools.querySelector('[data-accessibility="' + action + '"]')
        .setAttribute('aria-pressed', String(root.classList.contains(className)));
    });
  }
  Object.values(options).forEach(([className, key]) => {
    try { root.classList.toggle(className, localStorage.getItem(key) === 'true'); }
    catch { /* Controls work even when preference storage is blocked. */ }
  });
  updateButtons();

  function closePanel(returnFocus = false) {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) toggle.focus();
  }
  toggle.addEventListener('click', () => {
    const open = panel.hidden;
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  });
  tools.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-accessibility]');
    if (!button) return;
    const action = button.dataset.accessibility;
    if (action === 'close') { closePanel(true); return; }
    if (action === 'reset') {
      Object.values(options).forEach(([className]) => root.classList.remove(className));
    } else if (options[action]) {
      root.classList.toggle(options[action][0]);
    } else { return; }
    Object.values(options).forEach(([className, key]) => {
      try { localStorage.setItem(key, String(root.classList.contains(className))); }
      catch { /* Keep the current page preference if storage is unavailable. */ }
    });
    updateButtons();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) closePanel(true);
  });
  document.addEventListener('click', (event) => {
    if (!panel.hidden && !tools.contains(event.target)) closePanel();
  });
})();
