import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide, waveAnimation } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const WaveWrapper = styled.div`
  ${tw`absolute pin-b w-full`};
  transform: matrix(1, 0, 0, -1, 0, 0);
`

const InnerWave = styled.div`
  ${tw`relative h-full`};
  svg {
    width: 100%;
    height: 40vh;
  }
  path {
    ${waveAnimation('10s')};
  }
`

const Contact = ({ children, offset }) => (
  <>
    <Divider fill="#23262b" speed={0.2} offset={offset}>
      <WaveWrapper>
        <InnerWave>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path />
          </svg>
        </InnerWave>
      </WaveWrapper>
    </Divider>
    <Content speed={0.4} offset={offset}>
      {children}
    </Content>
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG icon="zero" hiddenMobile width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
        <SVG icon="one" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="zero" width={12} stroke={colors.green} left="95%" top="50%" />
        <SVG icon="one" width={6} fill={colors.green} left="85%" top="15%" />
        <SVG icon="zero" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="zero" width={6} fill={colors.green} left="4%" top="20%" />
      <SVG icon="one" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
      <SVG icon="zero" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
      <SVG icon="one" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
    </Divider>
  </>
)

export default Contact

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
