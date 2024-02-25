import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {
  const [ratingValue, setRatingValue] = useState<RatingType>(0)
  return (
    <div>
      <PageTitle text={'Title'}/>

      <OnOff />

      <Accordion titleValue={'Accordion 1'}/>
      <Accordion titleValue={'Accordion 2'} />
      Article 2
      <Rating value={ratingValue} onClick={setRatingValue}/>

      Uncontrolled
      <UncontrolledRating />

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
