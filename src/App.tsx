import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div>
      <PageTitle text={'Title'}/>
      Article 1

      <Accordion titleValue={'Accordion 1'} collapsed={false} />
      <Accordion titleValue={'Accordion 2'} collapsed={true}/>
      Article 2
      <Rating value={5}/>
      <Rating value={4}/>
      <Rating value={3}/>
      <Rating value={2}/>
      <Rating value={1}/>
      <Rating value={0}/>
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
