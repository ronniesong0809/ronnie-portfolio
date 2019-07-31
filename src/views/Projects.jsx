import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, #0b7a01 0%, #000000 100%)"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="hexa" width={6} fill={colors.green} left="85%" top="75%" />
        <SVG icon="hexa" width={8} fill={colors.green} left="70%" top="20%" />
        <SVG icon="hexa" width={8} stroke={colors.green} left="25%" top="5%" />
        <SVG icon="hexa" hiddenMobile width={24} fill={colors.green} left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="hexa" hiddenMobile width={16} fill={colors.green} left="20%" top="90%" />
        <SVG icon="hexa" width={12} stroke={colors.green} left="90%" top="30%" />
        <SVG icon="hexa" width={16} fill={colors.green} left="70%" top="90%" />
        <SVG icon="hexa" hiddenMobile width={16} stroke={colors.green} left="18%" top="75%" />
        <SVG icon="hexa" width={6} fill={colors.green} left="75%" top="10%" />
        <SVG icon="hexa" hiddenMobile width={8} fill={colors.green} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="hexa" width={6} fill={colors.green} left="4%" top="20%" />
      <SVG icon="hexa" width={12} fill={colors.green} left="80%" top="60%" />
      <SVG icon="hexa" width={6} fill={colors.green} left="10%" top="10%" />
      <SVG icon="hexa" width={12} fill={colors.green} left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke={colors.green} left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors.green} left="80%" top="70%" />
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
