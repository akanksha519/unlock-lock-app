import {useState} from 'react'

import {Heading, Container, CustomButton, Image} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLocked] = useState(true)
  const toggleLock = () => {
    setLocked(!isLocked)
  }

  return (
    <Container>
      <Image
        src={
          isLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png '
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt="lock"
      />
      <Heading>Your Device is {isLocked ? 'Locked' : 'Unlocked'}</Heading>
      <CustomButton onClick={toggleLock}>
        {isLocked ? 'Unlock' : 'Lock'}
      </CustomButton>
    </Container>
  )
}

export default Unlock
