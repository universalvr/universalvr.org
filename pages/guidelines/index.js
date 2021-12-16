import BackTo from '../../components/back-to'
import Container from '../../components/container'
import Head from 'next/head'
import HeroSection from '../../components/hero'
import Link from 'next/link'
import List from '../../components/list'
import ListItem from '../../components/list/item'
import P from '../../components/typography/p'
import React from 'react'

export default function GuidelinesPage() {
  return (
    <Container>
      <Head>
        <title>Universal VR Guidelines</title>
        <meta name="description" content="Guidelines for making VR more accessible." />
      </Head>
      <HeroSection alt="Teenage girl playing VR in a wheelchair with her mother" filename="stock-02.jpg" header="Guidelines" />
      <P>From the research and interviews conducted we have developed a set of guidelines for VR developers to communicate the needs of the end users.</P>
      <List>
        <ListItem>
          <Link href="/guidelines/auditory">
            <a>Auditory Guidelines</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/guidelines/cognitive">
            <a>Cognitive Guidelines</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/guidelines/mobility">
            <a>Mobility Guildelines</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/guidelines/visual">
            <a>Visual Guidelines</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/guidelines/other">
            <a>Other General Guidelines</a>
          </Link>
        </ListItem>
      </List>
      <BackTo href="/" label="Home Page" />
    </Container>
  )
}
