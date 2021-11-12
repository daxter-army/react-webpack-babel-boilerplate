import React from 'react'
import Logo from './logo.svg'
import './App.css'
import './index.css'

const App = () => {
    return (
        <div>
            <img src={Logo} alt="logo" />
            <h1>Welcome { new Date().toDateString() }</h1>
        </div>
    )
}

export default App