import BackTo from '../../../components/back-to'
import Container from '../../../components/container'
import Head from 'next/head'
import HeroSection from '../../../components/hero'
import JourneyImage from '../../../components/journey-image'
import P from '../../../components/typography/p'
import React from 'react'

export default function UserJourneysPage() {
  return (
    <Container>
      <Head>
        <title>User Journey for Sarah</title>
        <meta name="description" content="User Journey for Sarah." />
      </Head>
      <HeroSection alt="Woman playing VR in a wheelchair" filename="user-sarah.jpg" header="Sarah" />
      <JourneyImage alt="Journey Image for Interactive Calibration" uri="/img/interactive_calibration_border.png" />
      <P>Sarah’s possible experiences with VR show how calibration features can allow her to play a game that works for her abilities and lifestyle. Without these features, she is unable to play the game. The second principle of Universal Design, flexibility in use, ensures that a product can work for users of all different abilities. Designing an experience that allows users to calibrate their own settings is a way to incorporate flexibility and inclusion in the product. If Sarah has the ability to calibrate her squat movement, she will feel more immersed in the virtual environment as her character properly responds to her actions. With the ability to provide the dimensions of her own playing area, Sarah will not have to worry about damaging her belongings or injuring herself. User customization settings like these provide necessary flexibility to the various ways its users interact with the environment.</P>
      <BackTo href="/users/journeys" label="User Journeys" />
    </Container>
  )
}
