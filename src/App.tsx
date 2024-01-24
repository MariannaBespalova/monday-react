import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div>
      <PageTitle text={'Title'}/>
      Article 1
      <Rating value={5}/>
      <Accordion titleValue={'Accordion 1'} selected={false}/>
      <Accordion titleValue={'Accordion 2'} selected={true}/>
      Article 2
      <Rating value={3}/>
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
