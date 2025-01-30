import { env } from '@app/shared/configs/environment.config'

/**
 * Initializes and starts mock service worker.
 */
export const initializeMockServiceWorker = async (): Promise<void> => {
  if (!env.IS_MOCKING_ENABLED) return

  try {
    const { worker } = await import('./browser.mock')

    await worker.start()
    console.log('Mock service worker started.')
  } catch (error) {
    console.error('Failed to start mock service worker:', error)
  }
}
