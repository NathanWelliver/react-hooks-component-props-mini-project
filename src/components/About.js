import React from "react";

function About(props){
    const about = props.about;
    return (
        <aside>
            <img default="https://via.placeholder.com/215" src={props.img} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About;