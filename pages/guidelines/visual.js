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
    number: 'VIS 1.1',
    desc: 'Allow zooming in closer to and away from details.',
  },
  {
    number: 'VIS 1.2',
    desc: 'Allow enlarging and reducing the size of intractable objects and text.',
  },
  {
    number: 'VIS 1.3',
    desc: 'Add indicators in central vision for important objects in peripheral vision.',
    note: 'Users with loss of peripheral vision objects beyond their central field of vision may go unnoticed unless prompted to turn towards them, either through visual cues( arrows) or aural cues.',
  },
  {
    number: 'VIS 1.4',
    desc: 'Allow for the customization of font, font size, font background, font color and the distance at which to display text.',
    note: 'Some fonts work better for low vision and others solve for dyslexia. Larger text size reduces eye strain. Contrast between font color and background color for font can make a difference for clarity of text. Text displayed at a distance can appear blurry to a user with low vision.',
  },
  {
    number: 'VIS 1.5',
    desc: 'Allow for adjustment of contrast and brightness.',
  },
  {
    number: 'VIS 1.6',
    desc: 'Allow edge enhancements and depth measurements.',
  },
  {
    number: 'VIS 1.7',
    desc: 'Allow for filtering colors or add texture and symbols to highlight distinction between elements when necessary.',
    note: 'Users with color blindness cannot discern some or all colors. It is important to ensure no important information is conveyed only with color.',
  },
  {
    number: 'VIS 1.8',
    desc: 'Add audio descriptions that can identify objects or elements audibly.',
  },
  {
    number: 'VIS 1.9',
    desc: 'Use spatial audio and haptics to orient users towards the objects.',
  },
  {
    number: 'VIS 1.10',
    desc: 'Add text to speech to describe written elements.',
  },
  {
    number: 'VIS 1.11',
    desc: 'Allow muting of non-critical content.',
  },
]

export default function GuidelinesPage() {
  return (
    <Container>
      <Head>
        <title>Universal VR Guidelines: Visual</title>
        <meta name="description" content="Visual Guidelines for making VR more accessible." />
      </Head>
      <H1>Guidelines: Visual</H1>
      <P>The visual accessibility guidelines solve for: low vision, loss of peripheral vision, blindness, color blindness, eye strain, light sensitivity, loss of central vision, blurry vision, blindspots, lack of depth perception. Solutions to the guidelines include: haptic feedback, audio feedback, and visual enhancements.</P>
      <GuidelinesList items={items} />
      <BackTo href="/guidelines" label="Guidelines" />
    </Container>
  )
}
