import Container from '../components/container'
import H2 from '../components/typography/h2'
import HeroSection from '../components/hero'
import Link from 'next/link'
import List from '../components/list'
import ListItem from '../components/list/item'
import P from '../components/typography/p'
import React from 'react'

export default function IndexPage() {
  return (
    <Container>
      <HeroSection alt="Woman playing VR in a wheelchair" filename="stock-01.jpg" header="Universal VR" />

      <P>The universalvr.org website was created to bridge the gap between end users with accessibility needs and developers.</P>
      <P>From playing a game in a fantastical land to hanging out with friends in a social app, VR provides incredibly immersive and unique experiences to its users. As this technology has grown, so has its user audience. With VR’s increasing popularity, it has become very apparent how many products lack accessibility and inclusion.</P>
      <P>Over the course of a single four month college semester, we conducted user interviews and audience research. When analyzing our feedback, we realized how greatly these user experiences vary. These products are not adaptable to users with permanent, situational, or temporary disabilities.</P>
      <P>Our research only just begins to scratch the surface of acknowledging all the pain points that users face. This website gives users a platform to share their stories, their struggles, and what works best for them. These submissions paint a true picture of what users experience every time they interact with VR products.</P>
      <P>We want developers to use this website throughout the design phase to make their products better. Properly considering these user pain points will lead to a more accessible, inclusive, and fun experience for many users.</P>
    
      <H2>Website Resources</H2>

      <List>
        <ListItem>
          <Link href="/guidelines">
            <a>Guidelines</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/users/journeys">
            <a>User Journeys</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/users/stories">
            <a>User Stories</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/users/stories">
            <a href="https://forms.gle/MEYJRuuWJxuTcG4u8" target="_blank">Share your story</a>
          </Link>
        </ListItem>
      </List>
    </Container>
  )
}

<a href="https://crello.com/unlimited/stock-photos/314793386/stock-photo-girl-in-wheelchair-experiencing-virtual/">Photo Girl in wheelchair experiencing virtual reality created by photography33</a>