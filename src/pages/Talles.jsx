import React from 'react'
import Camisetas from '../../public/img/camisetas.jpg'

const Talles = () => {
    return (
        <div className='container'>
            <div className='text-center text-white'>
                <h1>
                    Tablas de Talles
                </h1>

                <br />
            </div>


            <div className="row text-center">
                <div className="col d-flex align-items-center">
                    <h6 className=' text-white'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat temporibus similique id, accusantium architecto odit eum saepe, enim, eos possimus inventore magni. Laborum deserunt quisquam debitis? Nam, maiores adipisci
                    </h6>
                </div>
                <div className="col">
                    <img src={Camisetas} alt="img" className='img-talles' />
                </div>

                <div className="row text-center">
                    <div className="col">
                        <img src={Camisetas} alt="img" className='img-talles' />
                    </div>
                    <div className="col d-flex align-items-center text-white">
                        <h6 className=' text-white'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat temporibus similique id, accusantium architecto odit eum saepe, enim, eos possimus inventore magni. Laborum deserunt quisquam debitis? Nam, maiores adipisci
                        </h6>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col d-flex align-items-center text-white">
                        <h6 className=' text-white'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat temporibus similique id, accusantium architecto odit eum saepe, enim, eos possimus inventore magni. Laborum deserunt quisquam debitis? Nam, maiores adipisci
                        </h6>
                    </div>
                    <div className="col">
                        <img src={Camisetas} alt="img" className='img-talles' />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Talles