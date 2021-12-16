import BackTo from '../../../components/back-to'
import Container from '../../../components/container'
import Head from 'next/head'
import HeroSection from '../../../components/hero'
import Link from 'next/link'
import List from '../../../components/list'
import ListItem from '../../../components/list/item'
import P from '../../../components/typography/p'
import React from 'react'

export default function UserJourneysPage() {
  return (
    <Container>
      <Head>
        <title>User Journeys</title>
        <meta name="description" content="Resources around the journeys of users." />
      </Head>
      <HeroSection alt="Adult woman playing VR in a wheelchair" filename="stock-03.jpg" header="User Journeys" />
      <P>It is important to note that in each of these negative experiences, the user considers themself as part of the problem. Ideally a user should not experience this when interacting with a product. It is not the user’s disability that prevents them from interacting with a virtual environment, but rather the design of the experience. Providing additional user options and customizations will make a more inclusive product.</P>
      <List>
        <ListItem>
          <Link href="/users/journeys/alex">
            <a>Alex</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/users/journeys/alice">
            <a>Alice</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/users/journeys/david">
            <a>David</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/users/journeys/sarah">
            <a>Sarah</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/users/journeys/tim">
            <a>Tim</a>
          </Link>
        </ListItem>
      </List>
      <BackTo href="/users" label="Users" />
    </Container>
  )
}
