import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import SVG from '../components/SVG'

const green = 'rgba(56,193,114,0.4)'
const grey = 'rgba(39,50,56,0.6)'

const About = ({ children, offset }) => (
  <>
    <Divider
      bg="#23262b"
      clipPath="polygon(0 37%, 58% 18%, 56% 0, 100% 38%, 66% 100%, 64% 78%, 0 100%)"
      speed={0.2}
      offset={offset}
    />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG icon="one" width={6} fill={green} left="50%" top="75%" hiddenMobile />
        <SVG icon="zero" width={8} fill={grey} left="70%" top="20%" hiddenMobile />
        <SVG icon="one" width={8} stroke={grey} left="25%" top="5%" />
        <SVG icon="zero" width={24} fill={green} left="80%" top="80%" hiddenMobile />
      </UpDown>
      <UpDownWide>
        <SVG icon="one" width={16} fill={green} left="5%" top="80%" hiddenMobile />
        <SVG icon="zero" width={12} stroke={green} left="95%" top="50%" />
        <SVG icon="one" width={6} fill={green} left="85%" top="15%" />
        <SVG icon="zero" width={8} fill={grey} left="45%" top="10%" hiddenMobile />
      </UpDownWide>
      <SVG icon="one" width={6} fill={green} left="4%" top="20%" />
      <SVG icon="zero" width={12} fill={grey} left="70%" top="60%" />
      <SVG icon="one" width={6} fill={green} left="10%" top="10%" />
      <SVG icon="zero" width={12} fill={grey} left="20%" top="30%" />
      <SVG icon="one" width={8} stroke={grey} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
