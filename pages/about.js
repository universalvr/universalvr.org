import Container from '../components/container'
import H1 from '../components/typography/h1'
import H2 from '../components/typography/h2'
import Head from 'next/head'
import Link from 'next/link'
import List from '../components/list'
import ListItem from '../components/list/item'
import P from '../components/typography/p'
import React from 'react'

export default function AboutPage() {
  return (
    <Container>
      <Head>
        <title>Home</title>
        <meta name="description" content="About this website." />
      </Head>
      <H1>About</H1>
      <P>To better understand how to create and enable an inclusive and accessible experience for users, one has to holistically investigate the experiential issues and the production constraints. To do so, there are two major audiences to target: end users who use VR (ideally those with some sort of physical and neuro-divergence) and developers that create the systems and software.</P>

      <H2>End Users</H2>
      <P>To understand the flaws of VR, end users with varying cognitive and physical abilities are a great source of information for pinpointing pain points for using such devices. They can provide insight into the challenges and difficulties of using the hardware and software of VR sets, and how it influences their opinions on whether they are inclusive and accessible.</P>

      <H2>Developers</H2>
      <P>It is important to speak to the developers to understand the reasons for why the flaws of VR exist. Learning about the production environment will help determine if the developers know about accessibility guidelines and to what extent their organization or company acknowledges and cares about inclusivity for their products.</P>
    </Container>
  )
}
