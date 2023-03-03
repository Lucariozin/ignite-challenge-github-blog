import type { CSSProperties } from 'react'

import { Container } from './Skeleton.styles'

interface SkeletonProps extends CSSProperties {}

export const Skeleton = (props: SkeletonProps) => {
  return <Container style={{ ...props }} />
}
