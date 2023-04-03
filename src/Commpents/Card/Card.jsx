import { useState } from "react";
import './card.css';
import getData from "../../data";

function bornBefore() {
    var x = getData();
    var myDate = new Date('1-1-1990');
    var year = myDate.getFullYear();
    const filtered = x.filter((names) => new Date(names.birthday).getFullYear() < year);
    return filtered;
}

function getFavoriteFood(person) {
    const favoriteFoods = person.favoriteFoods;
    const foodItems = Object.keys(favoriteFoods).map((foodType) => {
      const foods = favoriteFoods[foodType];
      const foodList = foods.join(", ");
      return `${foodType}: ${foodList}`;
    });
    return foodItems.join(", ");
  }
  

export default function Card({ props }) {
    const [names, setNames] = useState(getData);
    const [filter, setFilter] = useState(bornBefore);

    return (
        filter.map((person) => (
            <div className="card">
                <div className="card-info">
                    <p className="name">{person.name}</p>
                    <p className="birthday">Birthday: {person.birthday}</p>
                    <p className="favorite-food">Favorite Food: {getFavoriteFood(person)}</p>
                </div>
            </div>
        ))
    );
}
