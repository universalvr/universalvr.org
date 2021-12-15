import BackTo from '../../components/back-to'
import Container from '../../components/container'
import GuidelinesList from '../../components/guideline-list'
import H1 from '../../components/typography/h1'
import Link from 'next/link'
import P from '../../components/typography/p'
import React from 'react'

const items = [
  {
    number: 'AUD 1.1',
    desc: 'Use text or haptics to convey important information.',
  },
  {
    number: 'AUD 1.2',
    desc: 'Add automatic captions to the whole environment.',
  },
  {
    number: 'AUD 1.3',
    desc: 'Enable customization of captions verbosity.',
  },
  {
    number: 'AUD 1.4',
    desc: 'Avoid scrolling or moving captions.',
  },
  {
    number: 'AUD 1.5',
    desc: 'Allow for the choice between fixed and headlock captions.',
    note: 'A fixed caption moves with the user’s turns. A headlocked caption stays in one place even if the user turns. Fixed captions can induce dizziness in users with vestibular disorders (Dizziness induced by hearing impairment).',
  },
  {
    number: 'AUD 1.6',
    desc: 'Allow for audio adjustment with a main audio level but also individual audio levels for each type of audio available.',
    note: 'Some software may be too loud for a user, and without the ability to lower a channel individually, such as the music volume, the user could be forced to choose between an environment that is too loud or an environment where they cannot hear the conversation audio.',
  },
  {
    number: 'AUD 1.7',
    desc: 'Use icons to distinguish between verbal and non-verbal audio.',
  },
  {
    number: 'AUD 1.8',
    desc: 'Provide the ability to toggle icons or arrows to depict the source of the audio or its direction.',
  },
  {
    number: 'AUD 1.9',
    desc: 'Allow for the adjustment to switch between mono and stereo audio.',
  },
  {
    number: 'AUD 1.10',
    desc: 'Limit flickering content or allow the content to be turned off or reduced.',
    note: 'Blinking content/ animation can induce seizures , motion sickness in users with vestibular disorder or photosensitivity.',
  },
  {
    number: 'AUD 1.11',
    desc: 'When possible add sign language interpretations to the caption.',
  },
  {
    number: 'AUD 1.12',
    desc: 'When possible use hand tracking to allow input via sign language.',
  },
]

export default function GuidelinesPage() {
  return (
    <Container>
      <H1>Guidelines: Auditory</H1>
      <P>The auditory accessibility guidelines solve for: total or partial hearing loss, unilateral hearing, loud environments, vestibular disorders.</P>
      <GuidelinesList items={items} />
      <BackTo href="/guidelines" label="Guidelines" />
    </Container>
  )
}
