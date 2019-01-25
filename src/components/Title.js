import React from "react";
import logo from "../images/chuckGit.png";

class Title extends React.Component{
    render(){
        return(
            <section class="hero is-primary is-medium is-primary is-warning">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <img src={logo} alt="Logo"></img>
                    </a>
                </div>

                <div class="hero-body">
                    <div class="has-text-centered">
                        <img src={logo} alt="Logo"></img>
                        <p className = "title is-1 is-spaced">Chuck Randoms</p>
                        <p className = "subtitle is-5">Click any category from the list below and hear what uncle Chuck has got to say</p>  
                    </div>
                </div>

            </section>
        );
    }
};

export default Title;