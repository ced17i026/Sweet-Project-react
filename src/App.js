import React, { Component } from 'react'; 
import './App.css';
import {Recipe} from './foodFolder/recipe';
class App extends Component {
  render() {
    const recipe = [{
      title: "Peda",
      img: "http://images.honestcooking.com/wp-content/uploads/2015/08/DSC_0868.jpg",
      ingredients: ["Khoya","Sugar","Milk"],
      },{
        title: "Rasmalai",
        img : 'https://www.rachnas-kitchen.com/wp-content/uploads/2017/07/rasmalai-2-e1505245876472-gpo.jpg',
        ingredients: ["Rasgulla","Condensed Milk","Sugar"]
      },{
        title: "Coffee",
        ingredients: ["Coffee","Sugar","Water or Milk"],
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/d0/a9/4f/latte-art.jpg',
      }];
      const data = recipe.map((d,i)=>{
              return <Recipe key = {i} title={d.title} img={d.img} ingredients={d.ingredients}/>;
      });
    return (
      <div className="App">
      {data}
      </div>
    );
  }
}

export default App;
