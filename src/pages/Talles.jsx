import React from 'react'
import Camisetas from '../../public/img/camisetas.jpg'

const Talles = () => {
    return (
        <div className='container'>
            <div className='text-center'>
                <h1>
                    Tablas de Talles
                </h1>

                <br />
            </div>


            <div className="row text-center">
                <div className="col d-flex align-items-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat temporibus similique id, accusantium architecto odit eum saepe, enim, eos possimus inventore magni. Laborum deserunt quisquam debitis? Nam, maiores adipisci.</div>
                <div className="col">
                    <img src={Camisetas} alt="img" className='img-talles' />
                </div>

                <div className="row text-center">
                <div className="col">
                    <img src={Camisetas} alt="img" className='img-talles' />
                </div>
                <div className="col d-flex align-items-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat temporibus similique id, accusantium architecto odit eum saepe, enim, eos possimus inventore magni. Laborum deserunt quisquam debitis? Nam, maiores adipisci.</div>
                </div>
               
                <div className="row text-center">
                <div className="col d-flex align-items-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat temporibus similique id, accusantium architecto odit eum saepe, enim, eos possimus inventore magni. Laborum deserunt quisquam debitis? Nam, maiores adipisci.</div>
                <div className="col">
                    <img src={Camisetas} alt="img" className='img-talles' />
                </div>
                </div>
            </div>


        </div>
    )
}

export default Talles