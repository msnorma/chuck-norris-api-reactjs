import React from "react";

class Category extends React.Component{

   getJoke = async () =>{
    const apiCall = await fetch(`https://api.chucknorris.io/jokes/random?category=${this.props.name}`);
    const data = await apiCall.json();
    console.log(data.value)
    this.props.updateJoke(data.value)
   }
          
          
    render(){
        return(
                <ul className = "menu-list">
                    <li  onClick = {this.getJoke}><a>{this.props.name}</a></li>
                </ul>
        );
    }
}

export default Category;