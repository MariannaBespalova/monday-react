import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";

function App() {
  const [ratingValue, setRatingValue] = useState<RatingType>(0)
  const [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(true)
  const [onClicked, setOnClicked] = useState<boolean>(false)


  return (
    <div>
      <PageTitle text={'Title'}/>

      <OnOff onClicked={onClicked} onClick={(onClicked) => setOnClicked(onClicked)} />

      <Accordion collapsed={collapsedAccordion} onClick={() => setCollapsedAccordion(!collapsedAccordion)} titleValue={'Accordion 1'}/>
      <UncontrolledAccordion titleValue={'Accordion 2'} />
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
