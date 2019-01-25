import React from "react";
import Category from "./list";
import JokeBox from "./box";

class CategoryList extends React.Component{
    state = {
        categories: []
    }

    async componentDidMount(){
        const apiFetchCategory = await fetch(`https://api.chucknorris.io/jokes/categories`);
        const dataCategories = await apiFetchCategory.json();

        this.setState({
            categories: dataCategories
        })
    }

    updateJoke(joke){
        console.log(`Passing joke to Parent (App.js)`)
        this.props.handleJokeUpdate(joke)
    }

    render(){
        return(
            <ul>
                {
                    this.state.categories.map(category => {
                        return <Category key = {category} name = {category} updateJoke = {this.updateJoke.bind(this)}/>
                    })
                }
            </ul>
        )
    }
}

export default CategoryList;