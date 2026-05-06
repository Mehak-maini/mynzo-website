import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST, REST_PUT } from '@payloadcms/next/routes'
import config from '@payload-config'

const _POST = REST_POST(config)

export const POST: typeof _POST = async (req, ctx) => {
  const res = await _POST(req, ctx)
  if (!res.ok) {
    try {
      const body = await res.clone().text()
      console.error(`[API ${res.status}] POST ${req.url}\n`, body)
    } catch {
      // ignore clone errors
    }
  }
  return res
}

export const GET     = REST_GET(config)
export const DELETE  = REST_DELETE(config)
export const PATCH   = REST_PATCH(config)
export const PUT     = REST_PUT(config)
export const OPTIONS = REST_OPTIONS(config)
