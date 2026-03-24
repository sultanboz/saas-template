import { NextRequest, NextResponse } from 'next/server'

// ─── Types ────────────────────────────────────────────────
interface ContactPayload {
  name:    string
  email:   string
  subject: string
  message: string
}

// ─── Simple field validator ────────────────────────────────
function validate(body: Partial<ContactPayload>): string | null {
  if (!body.name?.trim())    return 'Name is required.'
  if (!body.email?.trim())   return 'Email is required.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return 'Invalid email address.'
  if (!body.message?.trim()) return 'Message is required.'
  if (body.message.trim().length < 10) return 'Message must be at least 10 characters.'
  if (body.message.length > 5000)      return 'Message must be under 5000 characters.'
  return null
}

export async function POST(req: NextRequest) {
  // ── Parse body ──────────────────────────────────────────
  let body: Partial<ContactPayload>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  // ── Validate ────────────────────────────────────────────
  const validationError = validate(body)
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 })
  }

  const { name, email, subject, message } = body as ContactPayload

  // ── Send email ──────────────────────────────────────────
  // Swap this block for your preferred email service:
  //
  //   Resend:    https://resend.com/docs/send-with-nextjs
  //   Nodemailer: https://nodemailer.com
  //   Formspree:  https://formspree.io
  //
  // Example with Resend (install @resend/node first):
  //
  //   import { Resend } from 'resend'
  //   const resend = new Resend(process.env.RESEND_API_KEY)
  //   await resend.emails.send({
  //     from:    process.env.NEXT_PUBLIC_NEWSLETTER_FROM ?? 'hello@yourdomain.com',
  //     to:      [process.env.CONTACT_TO_EMAIL ?? 'hello@yourdomain.com'],
  //     subject: `[Contact] ${subject ?? 'General enquiry'} — ${name}`,
  //     text:    `From: ${name} <${email}>\n\n${message}`,
  //   })

  // ── Log in dev (remove in production) ───────────────────
  if (process.env.NODE_ENV === 'development') {
    console.log('[contact]', { name, email, subject, message })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
