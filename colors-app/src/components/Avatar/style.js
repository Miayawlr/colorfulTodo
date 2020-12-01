import styled from 'styled-components'
const StyledAvatar = styled.div`
  position: relative;
`
const AvatarClip = styled.div`
  height: ${({ size }) => size}rem;
  width: ${({ size }) => size}rem;
  border-radius: 50%;
  overflow: hidden;
`
const AvatarImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`
export default StyledAvatar

export { AvatarClip, AvatarImage }
