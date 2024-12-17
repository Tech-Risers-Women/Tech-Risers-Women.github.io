import styles from "./whoweare.module.css";
import Banner from "../moons/Banner.jsx";
import Person from "../moons/Person.jsx";
import whoWeAre from "../data/whoWeAre.json";


function WhoWeAre() {
    const {pageTitle, secondaryTitle, chapeau, people} = whoWeAre;

  return (
    <div>
      <Banner name={pageTitle}/>
      <div>
        <h2>{secondaryTitle}</h2>
        <p>{chapeau}</p>
      </div>
      <div>
{        people.map(person => {
            return <Person key={person.name} person={person} />
        })}
      </div>
    </div>
  );
}

export default WhoWeAre;
