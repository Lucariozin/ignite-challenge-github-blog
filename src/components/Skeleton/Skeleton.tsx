import type { CSSProperties } from 'react'

import { Container } from './Skeleton.styles'

interface SkeletonProps extends CSSProperties {
  style?: CSSProperties
  mediaQueries?: {
    md?: CSSProperties
    hmd?: CSSProperties
    sm?: CSSProperties
  }
}

export const Skeleton = ({ style, mediaQueries, ...props }: SkeletonProps) => {
  return <Container mediaQueries={mediaQueries} style={{ ...props, ...style }} />
}
