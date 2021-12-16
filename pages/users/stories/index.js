import BackTo from '../../../components/back-to'
import Container from '../../../components/container'
import Head from 'next/head'
import HeroSection from '../../../components/hero'
import H2 from '../../../components/typography/h2'
import Link from 'next/link'
import List from '../../../components/list'
import ListItem from '../../../components/list/item'
import P from '../../../components/typography/p'
import React from 'react'

export default function UserStoriesPage() {
  return (
    <Container>
      <Head>
        <title>User Stories</title>
        <meta name="description" content="Real stories from real users." />
      </Head>
      <HeroSection alt="Man playing VR in a wheelchair while brother watches" filename="stock-06.jpg" header="User Stories" />
      <P></P>
      <List>
        <ListItem>
          <Link href="/users/stories/sage">
            <a>Sage</a>
          </Link>
        </ListItem>
      </List>

      <H2>Share Your Story</H2>
      <P>While a few stories were collected for the website, there are many more stories waiting to be told. The last section of the website is an opportunity for other end users who are interested in sharing their experiences just as previous interviewees did. These end users can share their pain points, what they like and don’t like, and what they wish developers would include in their products.</P>
      <P>Providing a safe space for users to share their stories is helpful for them, for other users with similar experiences, and developers. With this website, developers will have a simple way to access valuable user perspectives. Developers should be able to read through these user submissions, understand their needs, and then plan to incorporate these needs into their products.</P>
      <P>Users may want to detail a previous experience and provide it in story form. They may wish to describe their play space setting, their abilities, and then dive into the difficulties they encountered. Another user may want to create a step by step journey of their interactions, including their thoughts and feelings. Whichever way they choose to share, their words will be a valuable part of our site.</P>

      <a href="https://forms.gle/MEYJRuuWJxuTcG4u8" target="_blank">Share your story</a>

      <BackTo href="/users" label="Users" />
    </Container>
  )
}
