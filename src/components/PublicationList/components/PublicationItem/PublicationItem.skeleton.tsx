import { Skeleton } from '@components/Skeleton'

import { Content, Header, SkeletonContainer, Title } from './PublicationItem.styles'

export const PublicationItemSkeleton = () => {
  return (
    <SkeletonContainer>
      <Header>
        <Title>
          <Skeleton width="14rem" height="1.25rem" marginBottom="1.5rem" />
          <Skeleton width="8rem" height="1.25rem" />
        </Title>

        <Skeleton width="3.375rem" height="0.875rem" />
      </Header>

      <Content>
        <Skeleton width="100%" height="1rem" marginTop="2.5rem" marginBottom="1rem" />
        <Skeleton width="100%" height="1rem" marginBottom="1rem" />
        <Skeleton width="100%" height="1rem" marginBottom="0.5rem" />
      </Content>
    </SkeletonContainer>
  )
}
