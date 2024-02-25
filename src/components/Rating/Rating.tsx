import React from "react";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  value: number
  onClick: (number: RatingType) => void
}

export function Rating(props: RatingPropsType) {
    return (
      <div>
        <Star selected={props.value > 0} setValue={props.onClick} value={1}/>
        <Star selected={props.value > 1} setValue={props.onClick} value={2}/>
        <Star selected={props.value > 2} setValue={props.onClick} value={3}/>
        <Star selected={props.value > 3} setValue={props.onClick} value={4}/>
        <Star selected={props.value > 4} setValue={props.onClick} value={5}/>
      </div>
    )
}

type StarPropsType = {
  selected: boolean
  value: RatingType
  setValue: (number: RatingType) => void
}

function Star(props: StarPropsType) {
  return <span onClick={() => props.setValue(props.value)}>{props.selected? <b>star </b> : "star " }</span>
}