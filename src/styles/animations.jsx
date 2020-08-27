import tw from 'tailwind.macro'
import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const wave = keyframes`
  0% {
    d: path("M 0 200 Q 250 400 400 200 Q 550 0 800 200 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 200 Q 200 200 400 200 Q 600 200 800 200 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 200 Q 150 0 400 200 Q 650 400 800 200 L 800 0 L 0 0 L 0 100 Z");
  }
`

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`

const upDownAnimation = css`
  ${upDown} 2s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 12s ease-in-out infinite alternate;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  ${tw`pin absolute`};
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  ${tw`pin absolute`};
`

export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`

export const rotateAnimation = length => css`
  animation: ${rotate} ${length} linear infinite;
`
