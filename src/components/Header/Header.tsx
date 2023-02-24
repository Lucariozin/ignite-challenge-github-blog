import { Container, LeftEffectImg, LogoImg, RightEffectImg } from './Header.styles'

import leftEffectImg from '@assets/header/left-effect-img.svg'
import rightEffectImg from '@assets/header/right-effect-img.svg'

import logoImg from '@assets/header/logo-img.svg'

export const Header = () => {
  return (
    <Container>
      <LeftEffectImg src={leftEffectImg} alt="" width={409} height={188} />

      <LogoImg src={logoImg} alt="" width={148} height={98} />

      <RightEffectImg src={rightEffectImg} alt="" width={371} height={236} />
    </Container>
  )
}
