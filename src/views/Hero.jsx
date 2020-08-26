import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide } from '../styles/animations'
import SVG from '../components/SVG'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <SVG icon="zero" width={48} stroke={colors.green} left="60%" top="65%" />
        <SVG icon="one" hiddenMobile width={48} stroke={colors.green} left="90%" top="20%" />
        <SVG icon="one" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="zero" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
        <SVG icon="zero" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
        <SVG icon="zero" width={12} stroke={colors.green} left="90%" top="50%" />
        <SVG icon="one" width={16} stroke={colors.green} left="28%" top="15%" />
        <SVG icon="one" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        <SVG icon="one" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
        <SVG icon="one" hiddenMobile width={16} fill={colors.green} left="80%" top="10%" />
      </UpDownWide>
      <SVG icon="zero" width={64} fill={colors.green} left="-2%" top="5%" />
      <SVG icon="zero" hiddenMobile width={64} fill={colors.green} left="5%" top="90%" />
      <SVG icon="zero" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
      <SVG icon="zero" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
      <SVG icon="zero" width={64} fill={colors['grey-darkest']} left="65%" top="20%" />
      <SVG icon="one" width={64} stroke={colors['grey-darker']} left="80%" top="70%" />
      <SVG icon="zero" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
      <SVG icon="one" hiddenMobile width={24} fill={colors['grey-darker']} left="5%" top="70%" />
      <SVG icon="one" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
      <SVG icon="one" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
      <SVG icon="one" hiddenMobile width={24} fill={colors['grey-darker']} left="40%" top="80%" />
      <SVG icon="one" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
      
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
