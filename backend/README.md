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
- `CORS_ORIGIN`: your frontend URL (for local dev: `http://localhost:5173`) or `*`

### Render + Gmail: `Connection timeout` / `ETIMEDOUT`

The backend now uses **explicit Gmail SMTP (port 465) + IPv4**, which fixes many timeouts from cloud hosts.

If it **still** times out, Render’s network may be blocking outbound SMTP. Then either:

1. Add **`RESEND_API_KEY`** (and optional **`RESEND_FROM_EMAIL`**) from [Resend](https://resend.com) — email is sent over **HTTPS (port 443)** only, which always works; or  
2. Use another transactional provider (SendGrid, etc.) with their HTTP API.

If `RESEND_API_KEY` is set, SMTP env vars are not required for sending.

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
