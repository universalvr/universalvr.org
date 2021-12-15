import breakpoints from './utils/breakpoints'
import React from 'react'
import styled from 'styled-components'

const StyledJourneyContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
`

const StyledJourneyImg = styled.img`
  display: flex;
  max-width: 400px;

  @media only screen and ${breakpoints.device.sm} {
    max-width: 100%;
  }
`

export default function JourneyImage({ alt, uri }) {
  return (
    <StyledJourneyContainer>
      <StyledJourneyImg alt={alt} src={uri} />
    </StyledJourneyContainer>
  )
}
