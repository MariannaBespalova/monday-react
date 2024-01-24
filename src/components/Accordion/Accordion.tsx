import React from "react";

type AccordionPropsType = {
  titleValue: string,
  selected: boolean
}

function Accordion(props: AccordionPropsType) {
  if (props.selected) {
    return (
      <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
      </div>
    )
  } else {
    return (
      <div>
        <AccordionTitle title={props.titleValue}/>
      </div>
    )
  }
}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3>{props.title}</h3>
  )
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  )
}

export default Accordion;