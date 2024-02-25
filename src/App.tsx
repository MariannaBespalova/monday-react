import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
  return (
    <div>
      <PageTitle text={'Title'}/>

      <OnOff />

      <Accordion titleValue={'Accordion 1'} collapsed={false} />
      <Accordion titleValue={'Accordion 2'} collapsed={true}/>
      Article 2
      <Rating />

    </div>
  );
}


type PageTitlePropsType = {
  text: string
}

function PageTitle(props: PageTitlePropsType) {
  return (
    <h1>{props.text}</h1>
  )
}

export default App;
