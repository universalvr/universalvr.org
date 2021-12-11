import BackTo from '../../../components/back-to'
import Container from '../../../components/container'
import H1 from '../../../components/typography/h1'
import P from '../../../components/typography/p'
import React from 'react'

export default function UserJourneysPage() {
  return (
    <Container>
      <H1>User Journey: Alex</H1>
      <P>Alex’s possible experiences with VR show how closed captions can enable a user to play a game. Without these captions, Alex can not successfully interact with the virtual environment. The fourth principle of Universal Design, perceptible information, ensures that all necessary information is provided to a user no matter what their abilities are. Information is necessary for any experience and should be provided in multiple means.</P>
      <BackTo href="/users/journeys" label="User Journeys" />
    </Container>
  )
}
