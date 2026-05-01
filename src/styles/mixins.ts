import { colors, fonts } from './tokens'
import type { CSSProperties } from 'react'

export const tag = (extra?: CSSProperties): CSSProperties => ({
  fontSize: '10px',
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: colors.textMuted,
  fontWeight: 300,
  ...extra,
})

export const heading = (size = 56, extra?: CSSProperties): CSSProperties => ({
  fontFamily: fonts.serif,
  fontWeight: 300,
  fontSize: `${size}px`,
  lineHeight: 1.05,
  color: colors.textPrimary,
  margin: 0,
  ...extra,
})

export const bodyText = (extra?: CSSProperties): CSSProperties => ({
  fontSize: '13px',
  lineHeight: 1.85,
  color: colors.textMuted,
  fontWeight: 300,
  margin: 0,
  letterSpacing: '0.02em',
  ...extra,
})

export const btnPrimary: CSSProperties = {
  fontSize: '10px',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: colors.bg,
  background: colors.accent,
  border: 'none',
  padding: '14px 32px',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontWeight: 300,
  textDecoration: 'none',
  display: 'inline-block',
}

export const btnGhost: CSSProperties = {
  fontSize: '10px',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: colors.textMuted,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontWeight: 300,
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
}