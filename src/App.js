import React from 'react'

// components폴더안에서 index.js파일을 만들음으로써 components폴더 안에 있는 파일들을 전부 한꺼번에 import할 수 있게 만든 것.
import { Brand, CTA, Navbar } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import './App.css';

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