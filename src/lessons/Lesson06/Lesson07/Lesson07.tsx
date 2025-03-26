import { v4 } from "uuid";


import { animalData } from "./data";
import './styles.css';
import AnimalCard from "../../../components/AnimalCard/AnimalCard";

function Lesson07() {
  const animalCards = animalData.map((animal) => {
    return <AnimalCard
      key={v4()}
      name={animal.name}
      species={animal.species}
      img={animal.image} />
  })

  console.log(animalCards);


  return (
    <div className='cards-wrapper'>
      {animalCards}
    </div>
  )
  // <AnimalCard name={animalData[0].name} species="Lion" img='' />
}

export default Lesson07