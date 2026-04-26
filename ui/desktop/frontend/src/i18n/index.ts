import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// --- EN namespaces ---
import enCommon from './locales/en/common.json'
import enChat from './locales/en/chat.json'
import enAgents from './locales/en/agents.json'
import enProviders from './locales/en/providers.json'
import enSkills from './locales/en/skills.json'
import enCron from './locales/en/cron.json'
import enMcp from './locales/en/mcp.json'
import enTools from './locales/en/tools.json'
import enTraces from './locales/en/traces.json'
import enMemory from './locales/en/memory.json'
import enStorage from './locales/en/storage.json'
import enSessions from './locales/en/sessions.json'
import enDesktop from './locales/en/desktop.json'
import enTeams from './locales/en/teams.json'
import enChannels from './locales/en/channels.json'
import enTts from './locales/en/tts.json'

// --- VI namespaces ---
import viCommon from './locales/vi/common.json'
import viChat from './locales/vi/chat.json'
import viAgents from './locales/vi/agents.json'
import viProviders from './locales/vi/providers.json'
import viSkills from './locales/vi/skills.json'
import viCron from './locales/vi/cron.json'
import viMcp from './locales/vi/mcp.json'
import viTools from './locales/vi/tools.json'
import viTraces from './locales/vi/traces.json'
import viMemory from './locales/vi/memory.json'
import viStorage from './locales/vi/storage.json'
import viSessions from './locales/vi/sessions.json'
import viDesktop from './locales/vi/desktop.json'
import viTeams from './locales/vi/teams.json'
import viChannels from './locales/vi/channels.json'
import viTts from './locales/vi/tts.json'

// --- JA namespaces ---
import jaCommon from './locales/ja/common.json'
import jaChat from './locales/ja/chat.json'
import jaAgents from './locales/ja/agents.json'
import jaProviders from './locales/ja/providers.json'
import jaSkills from './locales/ja/skills.json'
import jaCron from './locales/ja/cron.json'
import jaMcp from './locales/ja/mcp.json'
import jaTools from './locales/ja/tools.json'
import jaTraces from './locales/ja/traces.json'
import jaMemory from './locales/ja/memory.json'
import jaStorage from './locales/ja/storage.json'
import jaSessions from './locales/ja/sessions.json'
import jaDesktop from './locales/ja/desktop.json'
import jaTeams from './locales/ja/teams.json'
import jaChannels from './locales/ja/channels.json'
import jaTts from './locales/ja/tts.json'

const STORAGE_KEY = 'goclaw:language'

function getInitialLanguage(): string {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'vi' || stored === 'ja') return stored
  const lang = navigator.language.toLowerCase()
  if (lang.startsWith('vi')) return 'vi'
  if (lang.startsWith('ja')) return 'ja'
  return 'vi'
}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon, chat: enChat, agents: enAgents, providers: enProviders,
      skills: enSkills, cron: enCron, mcp: enMcp, tools: enTools,
      traces: enTraces, memory: enMemory, storage: enStorage, sessions: enSessions,
      desktop: enDesktop, teams: enTeams, channels: enChannels, tts: enTts,
    },
    vi: {
      common: viCommon, chat: viChat, agents: viAgents, providers: viProviders,
      skills: viSkills, cron: viCron, mcp: viMcp, tools: viTools,
      traces: viTraces, memory: viMemory, storage: viStorage, sessions: viSessions,
      desktop: viDesktop, teams: viTeams, channels: viChannels, tts: viTts,
    },
    ja: {
      common: jaCommon, chat: jaChat, agents: jaAgents, providers: jaProviders,
      skills: jaSkills, cron: jaCron, mcp: jaMcp, tools: jaTools,
      traces: jaTraces, memory: jaMemory, storage: jaStorage, sessions: jaSessions,
      desktop: jaDesktop, teams: jaTeams, channels: jaChannels, tts: jaTts,
    },
  },
  ns: ['common', 'chat', 'agents', 'providers', 'skills', 'cron', 'mcp', 'tools', 'traces', 'memory', 'storage', 'sessions', 'desktop', 'teams', 'channels', 'tts'],
  defaultNS: 'common',
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

// Persist language on change
i18n.on('languageChanged', (lng) => {
  localStorage.setItem(STORAGE_KEY, lng)
  document.documentElement.lang = lng
})

export default i18n
