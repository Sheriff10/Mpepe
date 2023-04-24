import React from 'react'

export const Header = () => {
  return (
    <div className="header">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-12">
                    <div className="menu-link">
                        <a href="#">home</a>
                        <a href="#about">about</a>
                        <div className="logo">
                            <img src="logo.png" alt="moon pepe" className='img-fluid' />
                        </div>
                        <a href="#buy">how to buy</a>
                        <a href="#tokenomics">tokenomics</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
