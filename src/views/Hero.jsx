import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide } from '../styles/animations'
import SVG from '../components/SVG'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`
const green = 'rgba(56,193,114,0.4)'
const grey = 'rgba(39,50,56,0.6)'
const darkGrey = 'rgba(54,67,73,0.8)'

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <SVG icon="zero" width={48} stroke={green} left="60%" top="65%" />
        <SVG icon="one" width={48} stroke={green} left="90%" top="20%" hiddenMobile />
        <SVG icon="one" width={6} fill={darkGrey} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="zero" width={16} stroke={grey} left="30%" top="65%" />
        <SVG icon="zero" width={6} fill={grey} left="75%" top="10%" />
        <SVG icon="zero" width={12} stroke={green} left="90%" top="50%" />
        <SVG icon="one" width={16} stroke={green} left="28%" top="15%" />
        <SVG icon="one" width={8} fill={grey} left="45%" top="10%" hiddenMobile />
        <SVG icon="one" width={16} fill={darkGrey} left="70%" top="90%" />
        <SVG icon="one" width={16} fill={green} left="80%" top="10%" hiddenMobile />
      </UpDownWide>
      <SVG icon="zero" width={64} fill={green} left="-4%" top="5%" />
      <SVG icon="zero" width={64} fill={green} left="5%" top="90%" hiddenMobile />
      <SVG icon="zero" width={8} stroke={darkGrey} left="25%" top="5%" />
      <SVG icon="zero" width={12} fill={grey} left="40%" top="30%" />
      <SVG icon="zero" width={64} fill={grey} left="65%" top="20%" />
      <SVG icon="zero" width={8} fill={grey} left="95%" top="90%" />
      <SVG icon="one" width={64} stroke={darkGrey} left="80%" top="70%" />
      <SVG icon="one" width={24} fill={darkGrey} left="5%" top="70%" hiddenMobile />
      <SVG icon="one" width={16} stroke={darkGrey} left="10%" top="50%" />
      <SVG icon="one" width={6} fill={grey} left="10%" top="10%" />
      <SVG icon="one" width={24} fill={darkGrey} left="40%" top="80%" hiddenMobile />
      <SVG icon="one" width={12} fill={grey} left="50%" top="60%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
