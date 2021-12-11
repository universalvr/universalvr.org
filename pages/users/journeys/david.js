import BackTo from '../../../components/back-to'
import Container from '../../../components/container'
import H1 from '../../../components/typography/h1'
import P from '../../../components/typography/p'
import React from 'react'

export default function UserJourneysPage() {
  return (
    <Container>
      <H1>User Journey: David</H1>
      <P>David’s possible experiences with VR show how extended interaction with the system can be detrimental to his health. David may not be immediately aware of how his body reacts to the physical demands of the game. By the time he does realise this, he may have already injured himself. The fifth principle of Universal Design, tolerance for error, ensures that errors and hazards are minimized while using the product. Providing a way for users to receive feedback if their movements exhibit any deterioration or fatigue can allow for a healthier experience with the product.</P>
      <BackTo href="/users/journeys" label="User Journeys" />
    </Container>
  )
}
