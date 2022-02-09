import React from 'react'
import { Footer, Blog, Possibility, Features, WhatFUTURE, Header } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'
import WhatGPT3 from './containers/whatgpt3/WhatGPT3'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
