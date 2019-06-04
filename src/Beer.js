import React from 'react';
import './Beer.css'

const Beer = (props) => {
    //console.log('props', props)
    return (
        <div className='body'>
            <div className='beers'>
                <img alt="Beer" src={props.beer.image_url}></img><br></br>
                Name: {props.beer.name}<br></br>
                ABV:{props.beer.abv}% - IBU:{props.beer.ibu}<br></br>
                <button onClick={()=>props.like(props.id)}>LIKE</button>
            </div>
        </div>
    )
}

export default Beer