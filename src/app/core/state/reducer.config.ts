import { loginFeature } from '@app/features/login'

/**
 * Root reducer that combines all feature reducers into a single state tree.
 * Manages the entire application state through NgRx store.
 */
export const reducer = {
  login: loginFeature.reducer
}
