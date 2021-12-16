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
    number: 'MOB 1.1',
    desc: 'Allow for operation from sitting, standing or reclining position.',
  },
  {
    number: 'MOB 1.2',
    desc: 'Allow for calibration or definition on movement ranges, both for navigation and interaction.',
  },
  {
    number: 'MOB 1.3',
    desc: 'Actions in the environment should support alternate options which do not require physical movement of a specific body part.',
    note: 'While there are many examples: a user may be unable to walk but could use their thumb to move a joystick to simulate walking.',
  },
  {
    number: 'MOB 1.4',
    desc: 'Allow controls to be remapped and adjusted for sensitivity.',
  },
  {
    number: 'MOB 1.5',
    desc: 'When multiple pieces of hardware are required, alternatives should be available to simulate hardware.',
    note: 'A user might be one handed but an application requires two hands. Allow the user to buttons or gestures with their hand to simulate movement expected from the second hand.',
  },
  {
    number: 'MOB 1.6',
    desc: 'Allow multiple input methods.',
    note: 'Alternate controllers, Keyboards, eye tracking, voice input, hand tracking.',
  },
  {
    number: 'MOB 1.7',
    desc: 'Provide accommodation interdepence by enabling additional hardware, sensors, and screens.',
    note: 'Users who receive assistance through a caregiver can benefit from extending that equation into VR.',
  },
  {
    number: 'MOB 1.8',
    desc: 'Enable large targets and higher tolerance for error.',
    note: 'Users must be able to select / interact with an object with minimum ease. Eg: Tacking onto an object by just coming close to it and not necessarily touching it.',
  },
]

export default function GuidelinesPage() {
  return (
    <Container>
      <Head>
        <title>Universal VR Guidelines: Mobility</title>
        <meta name="description" content="Mobility Guidelines for making VR more accessible." />
      </Head>
      <H1>Guidelines: Mobility</H1>
      <P>The mobility accessibility guidelines solve for: limited or no physical movement, difficulty or inability to grip or hold hardware such as controllers, bound to immobile objects, small spaces.</P>
      <GuidelinesList items={items} />
      <BackTo href="/guidelines" label="Guidelines" />
    </Container>
  )
}
