const getPortalUrl = () => "https://portal.plagexpert.in";
const getPortalLoginUrl = () => getPortalUrl();
const getPortalUploadUrl = () => getPortalUrl();
const getWhatsAppNumber = () => "916309872817";
const DEFAULT_WHATSAPP_MESSAGE = `Hi PlagExpert! 👋 I'm interested in your plagiarism and AI report services. Can you help me get started?`;
const getWhatsAppUrl = (message) => {
  const baseUrl = `https://wa.me/${getWhatsAppNumber()}`;
  const text = message ?? DEFAULT_WHATSAPP_MESSAGE;
  return `${baseUrl}?text=${encodeURIComponent(text)}`;
};

export { getPortalUploadUrl as a, getPortalLoginUrl as b, getWhatsAppUrl as g };
//# sourceMappingURL=links-v65J-ZX3.mjs.map
