import BackTo from '../../../components/back-to'
import Container from '../../../components/container'
import H1 from '../../../components/typography/h1'
import H2 from '../../../components/typography/h2'
import Link from 'next/link'
import List from '../../../components/list'
import ListItem from '../../../components/list/item'
import P from '../../../components/typography/p'
import React from 'react'

export default function UserNeedsPage() {
  return (
    <Container>
      <H1>User Needs</H1>
      <P></P>

      <a href="https://docs.google.com/spreadsheets/d/1GvcGwuPBfW6g-BABTWQHjGObOd9wdiazdkqyIJ3w9BM/edit?usp=sharing" target="_blank">User needs table</a>

      <BackTo href="/users" label="Users" />
    </Container>
  )
}
