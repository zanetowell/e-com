import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
    ]

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet totam architecto obcaecati voluptatum distinctio nesciunt iusto tenetur, consequuntur excepturi laudantium ipsa perspiciatis voluptas id modi culpa nobis minima blanditiis facere doloremque. Voluptates sunt, accusamus necessitatibus quisquam reiciendis repellat minima fuga. Dignissimos debitis expedita earum.</p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts