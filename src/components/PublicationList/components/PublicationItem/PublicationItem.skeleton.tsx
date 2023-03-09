import { Skeleton } from '@components/Skeleton'

import { Content, Header, SkeletonContainer, Title } from './PublicationItem.styles'

export const PublicationItemSkeleton = () => {
  return (
    <SkeletonContainer>
      <Header>
        <Title>
          <Skeleton
            maxWidth="14rem"
            width="100%"
            height="1.25rem"
            marginBottom="1.5rem"
            mediaQueries={{
              sm: {
                height: '1rem',
                marginBottom: '1.25rem',
              },
            }}
          />
          <Skeleton
            width="8rem"
            height="1.25rem"
            mediaQueries={{
              sm: {
                height: '1rem',
              },
            }}
          />
        </Title>

        <Skeleton width="3.375rem" height="0.875rem" />
      </Header>

      <Content>
        <Skeleton
          width="100%"
          height="1rem"
          marginTop="2.5rem"
          marginBottom="1rem"
          mediaQueries={{
            sm: {
              height: '0.875rem',
              marginBottom: '0.875rem',
            },
          }}
        />
        <Skeleton
          width="100%"
          height="1rem"
          marginBottom="1rem"
          mediaQueries={{
            sm: {
              height: '0.875rem',
              marginBottom: '0.875rem',
            },
          }}
        />
        <Skeleton
          width="100%"
          height="1rem"
          marginBottom="0.5rem"
          mediaQueries={{
            sm: {
              height: '0.875rem',
            },
          }}
        />
      </Content>
    </SkeletonContainer>
  )
}
