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
      <List>
        <ListItem>
          <Link href="/users/journeys">
            <a>User Journeys</a>
          </Link>
        </ListItem>
      </List>
      <BackTo href="/" label="Home Page" />
    </Container>
  )
}
