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

export default function UserNeedsPage() {
  return (
    <Container>
      <Head>
        <title>User Needs</title>
        <meta name="description" content="Resources around the needs of users." />
      </Head>
      <HeroSection alt="Woman playing VR while sitting in chair" filename="stock-07.jpg" header="User Needs" />
      <P></P>

      <a aria-label="Spreadsheet outlinig different categories of user needs; link opens in a new tab." href="https://docs.google.com/spreadsheets/d/1GvcGwuPBfW6g-BABTWQHjGObOd9wdiazdkqyIJ3w9BM/edit?usp=sharing" target="_blank">User needs table</a>

      <BackTo href="/users" label="Users" />
    </Container>
  )
}
