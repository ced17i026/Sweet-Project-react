import React from 'react';
import './recipe.css';
class Recipe extends React.Component {
    render(){
        const {title,img} = this.props;
        const ingredients = this.props.ingredients.map((val,ind)=>{
            return <li key={ind}>{val}</li> 
        })
        return (
            <div className="main">
                <img src={img} alt={title}/>
                <h1>{title}</h1>
                <ul>
                    {ingredients}
                </ul>
            </div>
            )
    }
};

export {Recipe};