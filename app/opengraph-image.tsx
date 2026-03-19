import { ImageResponse } from 'next/og'

export const alt         = 'NexLayer — Next.js SaaS Landing Template'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           '100%',
          height:          '100%',
          background:      '#09090b',
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          justifyContent:  'center',
          fontFamily:      'sans-serif',
          position:        'relative',
          overflow:        'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position:     'absolute',
            top:          '-100px',
            left:         '50%',
            transform:    'translateX(-50%)',
            width:        '800px',
            height:       '400px',
            background:   'radial-gradient(ellipse, rgba(34,197,94,0.18) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position:        'absolute',
            inset:           0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize:  '60px 60px',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            width:           '64px',
            height:          '64px',
            background:      '#22c55e',
            borderRadius:    '14px',
            marginBottom:    '28px',
            boxShadow:       '0 0 40px rgba(34,197,94,0.5)',
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#09090b">
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
          </svg>
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize:      '64px',
            fontWeight:    '800',
            color:         '#fafafa',
            letterSpacing: '-2px',
            marginBottom:  '16px',
            lineHeight:    1,
          }}
        >
          NexLayer
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize:      '22px',
            color:         '#71717a',
            letterSpacing: '-0.3px',
            marginBottom:  '48px',
          }}
        >
          Next.js 15 SaaS Landing Page Template
        </div>

        {/* Tech badges */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map(tag => (
            <div
              key={tag}
              style={{
                padding:      '8px 16px',
                background:   'rgba(255,255,255,0.05)',
                border:       '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color:        '#a1a1aa',
                fontSize:     '14px',
                fontWeight:   '500',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position:   'absolute',
            bottom:     0,
            left:       '20%',
            right:      '20%',
            height:     '2px',
            background: 'linear-gradient(90deg, transparent, #22c55e, transparent)',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
