import React from "react";

function Game({step,question,questions, onClickVariand}){
    const percentAge =  Math.round( step / questions.length * 100); 

    // console.log(percentAge);
    return (

        <>
        <div className="progress">
          <div style={{ width:`${percentAge}%` }} className="progress__inner"></div>
        </div>
        <h1> {question.title}</h1>
        <ul>
             {
                question.variants.map((text,index) =>(

                   <li onClick={ () => onClickVariand(step,index) } key={index}>{text}</li> 
                ) )
             }
          
        </ul>
      </>
    );

}


export default Game;