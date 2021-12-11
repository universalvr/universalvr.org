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
      <H1>W3C Proposal 4.21: Mappable Controls</H1>
      <P>User Need 21: A user with limited mobility may want to use a different controller than the default to perform their movements.</P>
      <P>REQ 21a: Provide a virtual interface that allows the user to select a motion and map said motion to a controller input of their choice.</P>
      <P>NOTE: Not all users can perform or may tire quickly from certain motions such as squats or arm raises. As an example, provide an interface that allows users to swap arm raises with shoulder triggers or squats with a pressure sensitive button.</P>

      <BackTo href="/w3c-proposals" label="W3C Proposals" />
    </Container>
  )
}
