/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Single interactive primary (blue). Green is reserved for WhatsApp only.
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E3A8A',
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        // Functional brand colour — WhatsApp actions only.
        whatsapp: {
          DEFAULT: '#16A34A',
          hover: '#15803D',
        },
        // Neutrals
        navy: '#0B1F3A',
        ink: '#0F172A',
        body: '#334155',
        muted: '#64748B',
        line: '#E2E8F0',
        surface: '#F8FAFC',
        // Semantic
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
      },
    },
  },
}
