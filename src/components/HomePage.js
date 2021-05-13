import React from 'react'
import '../typography.css';

function HomePage(){

    return(
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hell O! address me as
                    <span> Parth Arora</span>
                </h1>
                <p>
                    I am a Front-end Web and BlockChain developer,
                    I've worked on many projects based on those concepts
                    and have also tried to learn more such Libraries and frameworks.
                    I'm founder & President of the Literary, Arts, and Open Mic club, "The Allegory".
                    .
                    Also a poet/rapper/writer,and I've been recognised by The Game and Sasha Sloan
                    themselves and got some sponsorships too!
                </p>
                <div className="icons"></div>
            </header>

        </div>
    );

}

export default HomePage;