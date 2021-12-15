import BackTo from '../../components/back-to'
import Container from '../../components/container'
import GuidelinesList from '../../components/guideline-list'
import H1 from '../../components/typography/h1'
import Link from 'next/link'
import P from '../../components/typography/p'
import React from 'react'

export default function GuidelinesPage() {
  return (
    <Container>
      <H1>Guidelines: Other</H1>
      <P>Offer the user the option to set & calibrate their settings & preferences at the beginning of using a VR application or game for the first time.</P>
      <P>While more software have been displaying warnings for content that could trigger seizures before starting the game/experience, software developers should be mindful of their audience and consider if their software may trigger any responses that could potentially be harmful to the user. Hardware makers should also account for assistive hardware such as glasses and hearing aids.</P>
      <BackTo href="/guidelines" label="Guidelines" />
    </Container>
  )
}
