

type OnOffPropsType = {
  onClicked: boolean
  onClick: (t: boolean) => void
  className?:string
}

export const OnOff = (props: OnOffPropsType) => {

  const onStyle = {
    backgroundColor: props.onClicked ? 'green' : 'white',
    border: '2px solid grey',
    fontSize: '30px',
    padding: '10px',
    fontWeight: 'bold'
  }
  const offStyle = {
    backgroundColor: props.onClicked ? 'white' : 'red',
    border: '2px solid grey',
    fontSize: '30px',
    padding: '10px',
    fontWeight: 'bold'
  }


  const btnOnClick = () => {
    props.onClick(true)
  }
  const btnOffClick = () => {
    props.onClick(false)
  }
  return(
    <div className="onOff-wrap">
      <div className="btn-wrap">
        <button onClick={btnOnClick} style={onStyle}>On</button>
        <button onClick={btnOffClick} style={offStyle}>Off</button>
      </div>
      <div className={props.onClicked ? "circle on" : "circle off"}/>
    </div>
  )
}