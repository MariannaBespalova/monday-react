import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import Accordion from './Accordion';
import React, {useState} from "react";


export default {
    component:Accordion
}

const onClickHandler = action("onClick")


/*export const FirstStory: Story = {
  args: {
    collapsed:true,
    onClick: () => {},
    titleValue:'Collapsed Accordion'
  },
}*/

export const CollapsedAccordion = () => {
  return (
    <Accordion
      collapsed={true}
      onClick={onClickHandler}
      titleValue={'Collapsed Accordion'}/>
  )
};

export const OpenedAccordion = () => {
  return (
    <Accordion
      collapsed={false}
      onClick={() => {}}
      titleValue={'Opened Accordion'}/>
  )
};

export const AccordionWithClick = () => {
  const [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(true)
  return (
    <Accordion
      collapsed={collapsedAccordion}
      onClick={() => {setCollapsedAccordion(!collapsedAccordion)}}
      titleValue={'Accordion'}/>
  )
};