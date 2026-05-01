export const getPortalUrl = () => 'https://portal.plagexpert.in'

export const getPortalLoginUrl = () => getPortalUrl()

export const getPortalUploadUrl = () => getPortalUrl()

export const getWhatsAppNumber = () => '916309872817'

export const getWhatsAppDisplayNumber = () => '+91 63098 72817'

const DEFAULT_WHATSAPP_MESSAGE = `Hi PlagExpert! 👋 I'm interested in your plagiarism and AI report services. Can you help me get started?`

export const getWhatsAppUrl = (message?: string) => {
  const baseUrl = `https://wa.me/${getWhatsAppNumber()}`
  const text = message ?? DEFAULT_WHATSAPP_MESSAGE

  return `${baseUrl}?text=${encodeURIComponent(text)}`
}
