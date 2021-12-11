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
      <H1>W3C Proposal 4.20: Interactive Calibration</H1>
      <P>User Need 20: A user with limited mobility may want to calibrate their movement, or define their movement ranges, to navigate and interact.</P>
      <P>REQ 20a: Using a virtual menu system, offer the user the ability to select the different movement mechanisms required for the application. For each selection, present the user a calibration prompt instructing the user to perform a movement three times and then calculate a calibration range to satisfy the user’s ability to move.</P>
      <P>REQ 20b: Provide clear start and stop mechanisms.</P>
      <P>NOTE: Not all users are able to perform expected motions such as arm raises or squats but may be able to move even the slightest. Rather than hardcode a specific movement range for motions such as squats and arm raises, provide a calibration mechanism to measure the user’s ability to move and then use that range as the expected motion range.</P>

      <BackTo href="/w3c-proposals" label="W3C Proposals" />
    </Container>
  )
}
