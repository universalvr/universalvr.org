import BackTo from '../../components/back-to'
import Container from '../../components/container'
import GuidelinesList from '../../components/guideline-list'
import H1 from '../../components/typography/h1'
import Head from 'next/head'
import Link from 'next/link'
import P from '../../components/typography/p'
import React from 'react'

const items = [
  {
    number: 'COG 1.1',
    desc: 'Allow for reduction or removal of audio & visual background details.',
  },
  {
    number: 'COG 1.2',
    desc: 'Allow for customization of application speed and reaction times.',
  },
  {
    number: 'COG 1.3',
    desc: 'Allow for skipping difficult or overwhelming content which otherwise may not be achievable.',
  },
  {
    number: 'COG 1.4',
    desc: 'Enable setting of quick keys to exit the experience.',
  },
  {
    number: 'COG 1.5',
    desc: 'Enable and display time limits for digital wellbeing.',
  },
]

export default function GuidelinesPage() {
  return (
    <Container>
      <Head>
        <title>Universal VR Guidelines: Cognitive</title>
        <meta name="description" content="Cognitive Guidelines for making VR more accessible." />
      </Head>
      <H1>Guidelines: Cognitive</H1>
      <P>The mobility accessibility guidelines solve for: dyslexia, attention deficit disorder, and intellectual disabilities.</P>
      <GuidelinesList items={items} />
      <BackTo href="/guidelines" label="Guidelines" />
    </Container>
  )
}
