import { useState } from "react";

function MyRecipesComponent({label, image, calories, ingredients}) {

    const [ showAll, setShowAll ] = useState(false);
    const defaultShow = 2;
    const showAllByDefault = ingredients.length <= defaultShow;
    const ingredientsToShow = (showAll || showAllByDefault) ? ingredients : ingredients.slice(0, defaultShow);

    return(<div>
        <div className='container pa'>
            <h2>{label}</h2>
        </div>
        <div className='container'>
            <img className="tasty" src={image} alt='dish' width='350px' height='350px'/>
        </div >
        <div className='container'>
            <p>{calories.toFixed()} calories</p>
        </div>
        <div  className='container'>
        <ul>
            {ingredientsToShow.map((ingredient, index) => (
                <li key={index}><img src='https://img.icons8.com/small/20/double-tick.png' alt='recipe' />{ingredient}</li>
            ))}
        </ul>
        </div>
        <div  className='container'>
            {showAllByDefault ? null : <p><button className="btn" onClick={() => setShowAll(val => !val)}>{showAll ? 'HIDE' : 'SHOW'}</button></p>}
        </div>
    </div>
    );
 }

 export default MyRecipesComponent;

