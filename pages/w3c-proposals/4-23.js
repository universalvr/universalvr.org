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
      <H1>W3C Proposal 4.23: Immersive Movement Alerts</H1>
      <P>User Need 23: Users may be adversely affected by spending too much time in an immersive environment or experience, and may lessen or lose the ability to perform a particular motion.</P>
      <P>REQ 23a: Provide a platform integration with tools that support digital wellbeing, allow the user to be notified when a specific motion for a user has consistently deteriorated over time.</P>
      <P>NOTE: Some users may tire quickly and could face physical danger if they are unable to move when needed. For example, a user may tire from squatting and fall, but might be unable to get back up.</P>

      <BackTo href="/w3c-proposals" label="W3C Proposals" />
    </Container>
  )
}
