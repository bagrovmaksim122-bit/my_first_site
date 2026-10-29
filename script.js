// 1. Показать / скрыть блок по кнопке
const showMore = document.querySelector('#showMore');
const moreText = document.querySelector('#moreText');

if (showMore && moreText) {
  showMore.addEventListener('click', () => {
    moreText.classList.toggle('d-none');
    if (moreText.classList.contains('d-none')) {
      showMore.textContent = 'Подробнее';
    } else {
      showMore.textContent = 'Скрыть';
    }
  });
}

// 2. Вывести увлечения из данных
const projects = [
  { title: 'Компьютеры и сети', text: 'Разбираюсь, как устроен интернет' },
  { title: '3D-моделирование', text: 'Делаю простые 3D-модели' },
  { title: 'Компьютерные игры', text: 'Интересно, как устроены игры' },
  { title: 'Спорт', text: 'Хожу в тренажёрный зал' }
];

const list = document.querySelector('#projects');

if (list) {
  list.innerHTML = projects.map(project => `
    <div class="col-sm-6">
      <article class="card p-3 h-100">
        <h3 class="h5">${project.title}</h3>
        <p class="mb-0">${project.text}</p>
      </article>
    </div>
  `).join('');
}

// 3. Проверка формы без перезагрузки страницы
const form = document.querySelector('#contactForm');
const result = document.querySelector('#formResult');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name === '' || email === '' || message === '') {
      result.textContent = 'Заполните все поля';
      result.className = 'mt-3 mb-0 text-danger';
    } else if (!email.includes('@')) {
      result.textContent = 'Введите правильный email';
      result.className = 'mt-3 mb-0 text-danger';
    } else {
      result.textContent = 'Спасибо, ' + name + '! Сообщение отправлено.';
      result.className = 'mt-3 mb-0 text-success';
      form.reset();
    }
  });
}
