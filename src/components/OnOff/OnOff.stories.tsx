import {action} from '@storybook/addon-actions'
import "../../index.css"
import React, {useState} from "react";
import {OnOff} from "./OnOff";


export default {
  title: 'On Off Tumbler',
  component:OnOff
}

const callback = action('off clicked')


export const OnModeTumbler = () => <OnOff onClicked={true} onClick={callback} />
export const OffModeTumbler = () => <OnOff onClicked={false} onClick={callback} className="circle off"/>

export const ChangeModeTumbler = () => {
  const [onMode, setOnMode] = useState(true)
  return(
    <OnOff onClicked={onMode} onClick={setOnMode} className={onMode? 'circle on' : 'circle off'}/>
    )
}



