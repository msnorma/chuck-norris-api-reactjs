import React from "react";
import chuck from "../images/chuck.jpg";

class JokeBox extends React.Component{

    

    render(){
        return( 
                <article className = "media">
                    <figure className = "media-left">
                        <p className = "image is-64x64">
                            <img src = {chuck}></img>
                        </p>
                    </figure>
                    <div className = "media-content">
                        <div className = "content">
                            <p>
                                <strong>Chuck Norris</strong> <small>@uncleChuck</small>
                                <br></br>
                                {this.props.joke}
                            </p>
                        </div>
                    </div>
                </article> 
        );
    }
};

export default JokeBox;