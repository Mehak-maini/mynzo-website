import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const alt = 'Mynzo Carbon – Precision Forest Monitoring'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), 'public', 'mynzo_logo_dark.png'))
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #eaf4f7 45%, #92d3e1 100%)',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background:
              'radial-gradient(circle at 78% 18%, rgba(89,132,147,0.16) 0%, rgba(89,132,147,0) 55%)',
          }}
        />
        <img
          src={logoSrc}
          width={280}
          style={{ marginBottom: 44, position: 'relative' }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 58,
            fontWeight: 700,
            color: '#061729',
            letterSpacing: '-1.5px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          Precision Forest Monitoring
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            fontWeight: 500,
            color: '#3D5A70',
            marginTop: 22,
            maxWidth: 820,
            textAlign: 'center',
            position: 'relative',
          }}
        >
          AI-powered satellite intelligence for forests, carbon & biodiversity
        </div>
      </div>
    ),
    { ...size }
  )
}
