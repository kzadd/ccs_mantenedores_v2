import { environment } from '@env/environment'

/**
 * Environment configuration.
 * Stores the API base URL and the current environment mode (e.g., development, production).
 */
export const env = {
  API_GAM_URL: environment?.API_GAM_URL ?? '',
  API_URL: environment?.API_URL ?? '',
  HASH: environment?.HASH ?? '',
  IS_MOCKING_ENABLED: environment?.IS_MOCKING_ENABLED ?? false,
  LOGIN_ID: environment?.LOGIN_ID ?? '',
  MODE: environment?.MODE ?? 'local',
  ROOT_URL: environment?.ROOT_URL ?? '/'
}
