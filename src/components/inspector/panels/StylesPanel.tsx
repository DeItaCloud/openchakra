import React, { memo } from 'react'
import { Accordion } from '@chakra-ui/core'

import PaddingPanel from '~components/inspector/panels/styles/PaddingPanel'
import DimensionPanel from '~components/inspector/panels/styles/DimensionPanel'
import BorderPanel from '~components/inspector/panels/styles/BorderPanel'
import DisplayPanel from '~components/inspector/panels/styles/DisplayPanel'
import TextPanel from '~components/inspector/panels/styles/TextPanel'
import AccordionContainer from '~components/inspector/AccordionContainer'
import ColorsControl from '~components/inspector/controls/ColorsControl'
import EffectsPanel from './styles/EffectsPanel'
import ChildrenInspector from '~components/inspector/ChildrenInspector'
import ParentInspector from '~components/inspector/ParentInspector'
import CustomPropsPanel from './CustomPropsPanel'

interface Props {
  isRoot: boolean
  showChildren: boolean
  parentIsRoot: boolean
}

const StylesPanel: React.FC<Props> = ({
  isRoot,
  showChildren,
  parentIsRoot,
}) => (
  <Accordion defaultIndex={[0]} allowMultiple>
    {!isRoot && (
      <AccordionContainer title="Custom props">
        <CustomPropsPanel />
      </AccordionContainer>
    )}

    {!isRoot && !parentIsRoot && (
      <AccordionContainer title="父组件">
        <ParentInspector />
      </AccordionContainer>
    )}

    {showChildren && (
      <AccordionContainer title="子组件">
        <ChildrenInspector />
      </AccordionContainer>
    )}

    {!isRoot && (
      <>
        <AccordionContainer title="布局">
          <DisplayPanel />
        </AccordionContainer>
        <AccordionContainer title="间距">
          <PaddingPanel type="margin" />
          <PaddingPanel type="填充" />
        </AccordionContainer>
        <AccordionContainer title="尺寸">
          <DimensionPanel />
        </AccordionContainer>
        <AccordionContainer title="版式">
          <TextPanel />
        </AccordionContainer>
      </>
    )}

    <AccordionContainer title="背景">
      <ColorsControl
        withFullColor
        label="Color"
        name="backgroundColor"
        enableHues
      />
    </AccordionContainer>

    {!isRoot && (
      <>
        <AccordionContainer title="边框">
          <BorderPanel />
        </AccordionContainer>

        <AccordionContainer title="效果">
          <EffectsPanel />
        </AccordionContainer>
      </>
    )}
  </Accordion>
)

export default memo(StylesPanel)
