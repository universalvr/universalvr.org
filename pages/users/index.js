import BackTo from '../../components/back-to'
import Container from '../../components/container'
import H1 from '../../components/typography/h1'
import Link from 'next/link'
import List from '../../components/list'
import ListItem from '../../components/list/item'
import P from '../../components/typography/p'
import React from 'react'

export default function UsersPage() {
  return (
    <Container>
      <H1>Users</H1>
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
      </List>
      <BackTo href="/" label="Home Page" />
    </Container>
  )
}
