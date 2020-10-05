import React from 'react'

const Card = ({item}) => {
    return (
        <div>
            
            <img scr={item.url} alt={item.title} />
            <h1>{item.title}</h1> 
        </div>
    )
}

export default Card;