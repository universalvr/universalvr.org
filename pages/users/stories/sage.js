import BackTo from '../../../components/back-to'
import Container from '../../../components/container'
import HeroSection from '../../../components/hero'
import P from '../../../components/typography/p'
import React from 'react'

export default function UserStoriesPage() {
  return (
    <Container>
      <HeroSection alt="Woman playing VR in while sitting on bed" filename="stock-05.jpg" header="Sage" />
      <P>I have used VR to play games and use apps, but I would not consider purchasing it for myself because it is not compatible with my abilities. I have collagen muscular dystrophy, and many of the movements required in games are not possible for me. My ability to point and shoot, duck, and squat are very limited and are often not recognized properly by the system. I wish there was a way to calibrate my movements in the game. That would allow me to comfortably and successfully play a lot of games. If this calibration option was included, maybe I would consider purchasing a system for myself.</P>
      <BackTo href="/users/stories" label="User Stories" />
    </Container>
  )
}
