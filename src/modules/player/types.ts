import theme from './theme'

export interface PlaylistItem {
  title: string
  url: string
}

export enum RepeatState {
  'norepeat',
  'all',
  'one',
}

export type PlayerTheme = typeof theme
