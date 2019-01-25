import React from "react";
//import Category from "./components/list";
import CategoryList from "./components/categoryList";
import JokeBox from "./components/box";
import Title from "./components/Title";
import Footer from "./components/footer";

import 'bulma/css/bulma.css';
//import './sass/mystyles.css';

class App extends React.Component{

    state = {
        joke: '' 
    }

    handleJokeUpdate(joke){
        this.setState({
            joke: joke
        })
    }

  
    render(){ 
        return(
            <div> 
                <Title/>
                    <div className="tile is-ancestor">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p class="menu-label">Category</p>
                                    <CategoryList handleJokeUpdate = {this.handleJokeUpdate.bind(this)}/>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <JokeBox joke = {this.state.joke}/>
                            </article>
                        </div>
                    </div>
                <Footer/>
            </div>
        );
    }
};

export default App;