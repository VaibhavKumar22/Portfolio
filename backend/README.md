# Portfolio Backend (Contact Form API)

## 1) Install dependencies

```bash
npm install
```

## 2) Create environment file

Copy `.env.example` to `.env` and set values.

### Email (recommended: SendGrid)

This project uses **[SendGrid](https://sendgrid.com)** via `@sendgrid/mail`, the same pattern as [hardware-sanitary-app](https://github.com/Ankitjain0408/hardware-sanitary-app) (`backend/utils/emailService.js`).

**Render / production**

1. Create a SendGrid account and an **API key**.
2. **Verify** a sender email (or domain) in SendGrid — use that address for `SENDGRID_FROM_EMAIL`.
3. Set on Render (or `.env`):

| Variable | Description |
|----------|-------------|
| `SENDGRID_API_KEY` | SendGrid API key (`SG....`) |
| `SENDGRID_FROM_EMAIL` | Verified sender (e.g. your Gmail) |
| `CONTACT_TO_EMAIL` | Inbox that receives contact messages |

HTTPS API only — **no SMTP** — so no `ETIMEDOUT` to Gmail from the server.

### Other env

- `CORS_ORIGIN`: your frontend URL (local: `http://localhost:5173`) or `*`

### Fallbacks (optional)

- **Gmail SMTP** (`SMTP_USER` + `SMTP_PASS`): fine for **local** dev; may **timeout on Render**.
- **Resend** (`RESEND_API_KEY`): alternative HTTPS provider if you prefer.

Priority when sending: **SendGrid → Resend → Gmail SMTP**.

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
