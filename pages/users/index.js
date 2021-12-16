import BackTo from '../../components/back-to'
import Container from '../../components/container'
import Head from 'next/head'
import HeroSection from '../../components/hero'
import Link from 'next/link'
import List from '../../components/list'
import ListItem from '../../components/list/item'
import P from '../../components/typography/p'
import React from 'react'

export default function UsersPage() {
  return (
    <Container>
      <Head>
        <title>Users</title>
        <meta name="description" content="User resoureces such as user journeys, user stories, and user needs." />
      </Head>
      <HeroSection alt="Group of people playing VR while seated in wheelchairs" filename="stock-04.jpg" header="Users" />
      <P>Developers will begin to understand where their designs fall short when they obtain a further understanding of their audience. User personas, stories, and journeys will be provided to enlighten our developer audience. Our goal here is to get them thinking about the many users that have been left out of their products. The following is an example of a user story. This was paraphrased from an interview that we conducted.</P>
      <List>
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
          <Link href="/users/needs">
            <a>User Needs</a>
          </Link>
        </ListItem>
      </List>
      <BackTo href="/" label="Home Page" />
    </Container>
  )
}
