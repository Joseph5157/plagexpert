export const getPortalUrl = () => {
  const runtimeConfig = useRuntimeConfig()

  return runtimeConfig.public.portalUrl || 'http://localhost:8000'
}

export const getPortalLoginUrl = () => getPortalUrl()

export const getPortalUploadUrl = () => getPortalUrl()

export const getWhatsAppNumber = () => '916309872817'

export const getWhatsAppDisplayNumber = () => '+91 63098 72817'

export const getWhatsAppUrl = (message?: string) => {
  const baseUrl = `https://wa.me/${getWhatsAppNumber()}`

  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl
}
