const toggle = document.querySelector('#languageToggle');
let language = 'zh';
toggle.addEventListener('click', () => {
  language = language === 'zh' ? 'en' : 'zh';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll(`[data-${language}]`).forEach(el => el.textContent = el.dataset[language]);
  toggle.textContent = language === 'zh' ? 'EN' : '中文';
});
document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab, .tab-panel').forEach(el => el.classList.remove('active'));
  tab.classList.add('active'); document.querySelector(`#${tab.dataset.target}`).classList.add('active');
}));
document.querySelector('#photoInput').addEventListener('change', event => {
  const file = event.target.files[0]; if (file) document.querySelector('#portrait').src = URL.createObjectURL(file);
});
document.querySelector('#year').textContent = new Date().getFullYear();
