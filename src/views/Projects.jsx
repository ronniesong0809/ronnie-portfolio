import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import SVG from '../components/SVG'

const green = 'rgba(56,193,114,0.4)'
const grey = 'rgba(39,50,56,0.4)'

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, #142716 0%, #a5e1ac 100%)"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.3`} factor={3}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={3}>
      <UpDown>
        <SVG icon="zero" width={8} stroke={green} left="25%" top="5%" />
        <SVG icon="zero" width={12} fill={grey} left="85%" top="75%" />
        <SVG icon="one" width={24} fill={green} left="12%" top="40%" hiddenMobile />
        <SVG icon="one" width={8} fill={green} left="70%" top="20%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="zero" width={16} fill={green} left="20%" top="90%" hiddenMobile />
        <SVG icon="zero" width={16} fill={grey} left="70%" top="98%" />
        <SVG icon="zero" width={6} fill={green} left="75%" top="10%" />
        <SVG icon="one" width={16} stroke={green} left="5%" top="75%" hiddenMobile />
        <SVG icon="one" width={8} fill={green} left="45%" top="10%" hiddenMobile />
        <SVG icon="one" width={36} fill={green} left="88%" top="45%" />
        <SVG icon="one" width={12} stroke={green} left="90%" top="30%" />
      </UpDownWide>
      <SVG icon="zero" width={6} fill={green} left="4%" top="20%" />
      <SVG icon="zero" width={6} fill={grey} left="10%" top="10%" />
      <SVG icon="zero" width={24} fill={grey} left="16%" top="60%" />
      <SVG icon="zero" width={16} stroke={grey} left="75%" top="30%" />
      <SVG icon="one" width={12} fill={green} left="29%" top="26%" />
      <SVG icon="one" width={36} stroke={grey} left="90%" top="90%" />
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
