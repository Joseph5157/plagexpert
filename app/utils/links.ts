export const getPortalUrl = () => {
  const runtimeConfig = useRuntimeConfig()

  return runtimeConfig.public.portalUrl || 'http://localhost:8000'
}

export const getPortalLoginUrl = () => getPortalUrl()

export const getPortalUploadUrl = () => getPortalUrl()
