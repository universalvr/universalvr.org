import BackTo from '../../../components/back-to'
import Container from '../../../components/container'
import HeroSection from '../../../components/hero'
import JourneyImage from '../../../components/journey-image'
import P from '../../../components/typography/p'
import React from 'react'

export default function UserJourneysPage() {
  return (
    <Container>
      <HeroSection alt="Man playing VR in a wheelchair" filename="user-tim.jpg" header="Tim" />
      <JourneyImage alt="Journey Image for Mappable Controls" uri="/img/mappable_controls_border.png" />
      <P>Tim’s possible experiences with VR show how controllers can be utilized to create a more accessible experience. A single type of controller and a defined set of movements are not accessible to every player in a target audience. Only the user knows which controller and movements work best for them. While Tim’s arm is recovering, he may want to use a foot pedal switch with the game. He may want to disable certain arm movements for the entire time he plays the game, or just for a portion. The first principle of Universal Design, equitable in use, ensures that the product works for all users. Users should have the option to play a game with their favorite controller and their own set of movements. This option will allow for more people to experience the product in an equal and fair way.</P>
      <BackTo href="/users/journeys" label="User Journeys" />
    </Container>
  )
}
