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
      <H1>W3C Proposals</H1>
      <P></P>
      <List>
        <ListItem>
          <Link href="/w3c-proposals/4-20">
            <a>4.20 Interactive Calibration</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/w3c-proposals/4-21">
            <a>4.21 Mappable Controls</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/w3c-proposals/4-22">
            <a>4.22 Motion Agnostic Movement</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/w3c-proposals/4-23">
            <a>4.23 Immersive Movement Alerts</a>
          </Link>
        </ListItem>
      </List>
      <BackTo href="/" label="Home Page" />
    </Container>
  )
}
