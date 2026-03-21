# Single-page HTML: use Render API instead of FormSubmit

Your pasted page used **FormSubmit** (`formsubmit.co`). To use the **same mail pipeline** as this repo (`POST /api/contact` on Render + SendGrid/SMTP):

## 1. Fix the broken end of the file

If you see `</html>ender just use...`, replace with only:

```html
</html>
```

Keep **one** `<!DOCTYPE html>` at the top (lowercase `<!doctype html>` is fine).

## 2. Change the contact form

**Remove** FormSubmit:

- Delete `action="https://formsubmit.co/..."` and `method="POST"`.
- Delete hidden inputs: `_subject`, `_captcha`, `_next` (and the `formNextUrl` element).
- Add to `<form>`: `id="contact-form"` and optionally `novalidate`.

**After** the submit button, add a status line:

```html
<p id="contact-form-status" class="field-error" style="min-height: 20px;"></p>
```

## 3. Remove the old FormSubmit submit handler

In your big `<script>` at the bottom, **delete** the block that sets `formNextUrl` and the `contactForm.addEventListener("submit", ...)` that only validates email for **native** form submit (FormSubmit).  
**Keep** everything else (sections, skills, menu, chat FAB, etc.).

## 4. Load the API script

If this file lives in **`site/`** next to **`js/`**, add **before** `</body>`:

```html
<script src="js/spa-contact.js"></script>
```

If your HTML is **only one file** in another folder, copy `spa-contact.js` next to it and use:

```html
<script src="./spa-contact.js"></script>
```

## 5. Backend & CORS

- Render must have **`CORS_ORIGIN`** including your site URL or `*`.
- Contact mail goes to **`CONTACT_TO_EMAIL`** on Render (not FormSubmit’s address).

## 6. Optional: override API URL

```html
<script>window.API_BASE_URL = 'https://portfolio-backend-33ii.onrender.com'</script>
<script src="js/spa-contact.js"></script>
```

`spa-contact.js` reads the public **mailto** from `a.contact-link.email` for error messages (your page already has that link).
