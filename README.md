# Сборка HTML шаблонов для E-mail рассылок
Возможности:
  1. Сборка HTML шаблона из нескольких файлов
  2. scss to css
  3. Inline стили
  4. Live-reload сервер для разработки

## Установка
Установи зависимости командой `yarn install`.

## Структура
- src/
  - styles/ - `scss стили`
  - html/
    - after-signup/
      - index.html - `шаблон письма`
      - content.html - `шаблон, подключается в index.html`
- dist/ - `папка с готовыми шаблонами для отправки`
- build/ - `папка, используемая live-reload сервером`

## Доступные команды

### `yarn start`

Запуск в режиме разработки.
Открой страницу для демо [http://localhost:8000](http://localhost:8000).
Страница будет перезагружена при изменении файлов.

### `yarn build`

Поместит HTML шаблон в папку `dist`.

## Полезные ссылки
- [Can I Email](https://www.caniemail.com/)
- [Отправка писем, Docker](https://github.com/balozae/docker-mailer)
