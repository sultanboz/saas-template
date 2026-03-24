import { NextRequest, NextResponse } from 'next/server'

// ─── Types ────────────────────────────────────────────────
interface NewsletterPayload {
  email: string
}

export async function POST(req: NextRequest) {
  // ── Parse body ──────────────────────────────────────────
  let body: Partial<NewsletterPayload>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const email = body.email?.trim()

  // ── Validate ────────────────────────────────────────────
  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 422 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 422 })
  }

  // ── Subscribe ───────────────────────────────────────────
  // Swap this block for your preferred newsletter service:
  //
  //   Resend Audiences: https://resend.com/docs/api-reference/audiences
  //   Mailchimp:        https://mailchimp.com/developer/marketing/api/lists
  //   ConvertKit:       https://developers.convertkit.com/#add-subscriber-to-a-form
  //   Loops.so:         https://loops.so/docs/api-reference/send-event
  //
  // Example with Resend Audiences (install @resend/node first):
  //
  //   import { Resend } from 'resend'
  //   const resend = new Resend(process.env.RESEND_API_KEY)
  //   await resend.contacts.create({
  //     email,
  //     audienceId: process.env.RESEND_AUDIENCE_ID!,
  //   })

  // ── Log in dev (remove in production) ───────────────────
  if (process.env.NODE_ENV === 'development') {
    console.log('[newsletter] new subscriber:', email)
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
