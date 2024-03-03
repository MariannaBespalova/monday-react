import {useState} from "react";

export const UncontrolledOnOff = () => {
  const [onClicked, setOnClicked] = useState<boolean | null>(null)
  const btnOnClick = () => {
    setOnClicked(true)
  }
  const btnOffClick = () => {
    setOnClicked(false)
  }
  return(
    <div className="onOff-wrap">
      <div className="btn-wrap">
        <button onClick={btnOnClick} className={onClicked ? "button button-on" : "button"}>On</button>
        <button onClick={btnOffClick} className={!onClicked ? "button button-off" : "button"}>Off</button>
      </div>
      <div className={onClicked ? "circle on" : "circle off"}/>
    </div>
  )
}