// Урок 1. JavaScript добавляет интерактивность обычному HTML-сайту.

// Автоматически ставим актуальный год в подвале сайта.
document.getElementById('year').textContent = new Date().getFullYear();

// На небольших экранах можно открыть и закрыть меню.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
});
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Открыть меню');
  });
});

// Учебная форма: проверяем поля, но НЕ отправляем данные в интернет.
// Настоящая отправка заявок появится на отдельном уроке (нужен backend/сервис форм).
const form = document.getElementById('contact-form');
const result = document.getElementById('form-result');
form.addEventListener('submit', event => {
  event.preventDefault(); // запрещаем обычную отправку страницы
  if (!form.reportValidity()) return;
  const name = document.getElementById('contact-name').value.trim();
  result.textContent = `${name}, форма работает! Пока это учебный режим: заявка не отправлена.`;
});
