import BackTo from '../../components/back-to'
import Container from '../../components/container'
import H1 from '../../components/typography/h1'
import Link from 'next/link'
import List from '../../components/list'
import ListItem from '../../components/list/item'
import P from '../../components/typography/p'
import React from 'react'

export default function W3CProposalsPage() {
  return (
    <Container>
      <H1>W3C Proposal 4.22: Motion Agnostic Movement</H1>
      <P>User Need 22: A person with a physical disability may want to participate within an immersive environment in a way that doesn't require particular bodily movement to perform any given action.</P>
      <P>REQ 22a: Allow the user performing an action in the environment, in a device independent way, without having to do so physically.</P>
      <P>REQ 22b: Ensure that all areas of the environment can be accessed without the need for a specific motion.</P>
      <P>NOTE: There are accessibility issues specific to physical movement. For example, the user may be expected to squat but may be physically unable to do so. A mechanism should be toggled by the user to inform the environment which motions the user is unable to perform. This should not impede on the user’s ability to interact with the environment.</P>

      <BackTo href="/w3c-proposals" label="W3C Proposals" />
    </Container>
  )
}
