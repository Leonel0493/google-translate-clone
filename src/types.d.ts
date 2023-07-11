import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './constants'

export interface TranslateState {
  fromLanguage: string
  toLanguage: string
  fromText: string
  result: string
  loading: boolean
}

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export type TranslateActions =
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
  | { type: 'SET_TO_LANGUAGE', payload: Language }
  | { type: 'SET_FROM_TEXT', payload: string }
  | { type: 'SET_RESULT', payload: string }
