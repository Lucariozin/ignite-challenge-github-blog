import {
  Container,
  LeftEffectImg,
  LeftEffectImgContainer,
  LogoAnchor,
  LogoImg,
  RightEffectImg,
  RightEffectImgContainer,
} from './Header.styles'

import leftEffectImg from '@assets/header/left-effect-img.svg'
import rightEffectImg from '@assets/header/right-effect-img.svg'

import logoImg from '@assets/header/logo-img.svg'

export const Header = () => {
  return (
    <Container>
      <LeftEffectImgContainer>
        <LeftEffectImg src={leftEffectImg} alt="" width={409} height={188} />
      </LeftEffectImgContainer>

      <LogoAnchor to="/">
        <LogoImg src={logoImg} alt="" width={148} height={98} />
      </LogoAnchor>

      <RightEffectImgContainer>
        <RightEffectImg src={rightEffectImg} alt="" width={371} height={236} />
      </RightEffectImgContainer>
    </Container>
  )
}
