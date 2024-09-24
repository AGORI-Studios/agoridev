import React from 'react'

import Header from '../components/Header'

import './Home.css'

// custom button

const Buttons = [
    {
        name: 'Guys Vs Gods',
        desc: 'Guys Vs Gods desc',
        link: '/gvg'
    },
    {
        name: "Rit",
        desc: "Rit desc",
        link: "/rit"
    }
]

function Home() {
  return (
    <>
        <Header />
        <div className="Home">
            <h1>Home</h1>

            <p>AGORI desc</p>

            <div className="Home__content">
                {
                    Buttons.map((button, index) => {
                        return (
                            <div key={index} className="Home__content__item">
                                <h2>{button.name}</h2>
                                <p>{button.desc}</p>

                                <a className="Home__content__item__button" href={button.link}>
                                    {button.name}
                                </a>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Home