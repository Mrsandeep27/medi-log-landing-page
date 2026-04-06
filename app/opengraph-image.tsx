import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MediFamily — Family Health Record App'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 50%, #eff6ff 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #3b82f6, #4f46e5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '36px',
              fontWeight: 'bold',
            }}
          >
            M
          </div>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #2563eb, #4f46e5)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            MediFamily
          </span>
        </div>
        <div
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#111827',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.3,
          }}
        >
          Parivaar Ka Health Record App
        </div>
        <div
          style={{
            fontSize: '22px',
            color: '#6b7280',
            marginTop: '16px',
            textAlign: 'center',
          }}
        >
          Free • Offline • AI-Powered • Made in India
        </div>
      </div>
    ),
    { ...size }
  )
}
