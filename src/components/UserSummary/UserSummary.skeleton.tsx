import { Skeleton } from '@components/Skeleton'

import { Container, Footer, FooterItemGroup, Header, UserBio, Wrapper } from './UserSummary.styles'

export const UserSummarySkeleton = () => {
  return (
    <Container>
      <Skeleton
        minWidth="9.25rem"
        height="9.25rem"
        borderRadius="8px"
        mediaQueries={{
          hmd: {
            display: 'none',
          },
        }}
      />

      <Wrapper>
        <Header>
          <Skeleton
            display="none"
            minWidth="3rem"
            height="3rem"
            borderRadius="8px"
            mediaQueries={{
              hmd: {
                display: 'block',
              },
            }}
          />

          <Skeleton
            width="100%"
            maxWidth="18rem"
            height="1.5rem"
            mediaQueries={{
              hmd: {
                height: '1.25rem',
                marginRight: 'auto',
              },
            }}
          />

          <Skeleton
            width="4.25rem"
            height="1.25rem"
            mediaQueries={{
              hmd: {
                height: '1rem',
              },
            }}
          />
        </Header>

        <UserBio>
          <Skeleton
            width="100%"
            height="1rem"
            marginBottom="1rem"
            marginTop="1rem"
            mediaQueries={{
              hmd: {
                height: '0.875rem',
                marginBottom: '0.875rem',
              },
            }}
          />
          <Skeleton
            width="100%"
            height="1rem"
            mediaQueries={{
              hmd: {
                height: '0.875rem',
              },
            }}
          />
        </UserBio>

        <Footer>
          <FooterItemGroup>
            <Skeleton
              width="7rem"
              height="1.25rem"
              mediaQueries={{
                hmd: {
                  height: '1rem',
                },
              }}
            />

            <Skeleton
              width="7rem"
              height="1.25rem"
              mediaQueries={{
                hmd: {
                  height: '1rem',
                },
              }}
            />
          </FooterItemGroup>

          <FooterItemGroup>
            <Skeleton
              width="7rem"
              height="1.25rem"
              mediaQueries={{
                hmd: {
                  height: '1rem',
                },
              }}
            />
          </FooterItemGroup>
        </Footer>
      </Wrapper>
    </Container>
  )
}
