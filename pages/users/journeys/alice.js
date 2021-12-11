import BackTo from '../../../components/back-to'
import Container from '../../../components/container'
import H1 from '../../../components/typography/h1'
import P from '../../../components/typography/p'
import React from 'react'

export default function UserJourneysPage() {
  return (
    <Container>
      <H1>User Journey: Alice</H1>
      <P>Alice’s possible experiences with VR show how a user with limited mobility may wish to use a less effortful way to interact with the game. Providing Alice with a way to disable specific movements will give her a more enjoyable experience. The sixth principle of Universal Design, low physical effort, ensures an efficient and comfortable experience for the user. Alice may be able to complete the game without disabling any movements, but she does not enjoy it. She considers giving up and wonders if she is the problem. If Alice can disable walking and squatting movements, she can fully experience the game as other users do. Providing this option will allow all users with all physical abilities to experience a virtual environment.</P>
      <BackTo href="/users/journeys" label="User Journeys" />
    </Container>
  )
}
