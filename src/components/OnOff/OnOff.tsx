

type OnOffPropsType = {
  onClicked: boolean
  onClick: (t: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

  const btnOnClick = () => {
    props.onClick(true)
  }
  const btnOffClick = () => {
    props.onClick(false)
  }
  return(
    <div className="onOff-wrap">
      <div className="btn-wrap">
        <button onClick={btnOnClick} className={props.onClicked ? "button button-on" : "button"}>On</button>
        <button onClick={btnOffClick} className={!props.onClicked ? "button button-off" : "button"}>Off</button>
      </div>
      <div className={props.onClicked ? "circle on" : "circle off"}/>
    </div>
  )
}