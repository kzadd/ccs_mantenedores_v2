import { environment } from '@env/environment'

/**
 * Environment configuration.
 * Stores the API base URL and the current environment mode (e.g., development, production).
 */
export const env = {
  API_URL: environment?.API_URL ?? '',
  IS_MOCKING_ENABLED: environment?.IS_MOCKING_ENABLED ?? false,
  MODE: environment?.MODE ?? 'local',
  ROOT_URL: environment?.ROOT_URL ?? '/'
}
