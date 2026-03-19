# Portfolio Backend (Contact Form API)

## 1) Install dependencies

```bash
npm install
```

## 2) Create environment file

Copy `.env.example` to `.env` and set values:

- `SMTP_USER`: your Gmail address
- `SMTP_PASS`: Gmail App Password
- `CONTACT_TO_EMAIL`: where contact form emails should arrive
- `CORS_ORIGIN`: your frontend URL (for local dev: `http://localhost:5173`)

## 3) Run backend

```bash
npm run dev
```

Server starts on `http://localhost:4000`.

## API

`POST /api/contact`

Body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "subject": "Hello",
  "message": "Message text"
}
```
