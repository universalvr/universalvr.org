import BackTo from '../../../components/back-to'
import Container from '../../../components/container'
import H1 from '../../../components/typography/h1'
import Link from 'next/link'
import List from '../../../components/list'
import ListItem from '../../../components/list/item'
import P from '../../../components/typography/p'
import React from 'react'

export default function UserJourneysPage() {
  return (
    <Container>
      <H1>User Journeys</H1>
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
