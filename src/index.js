// this file is the entrypoint for webpack,
// so when webpack will run, it will consider all the items declared here
// so we also need webpack to consider our index.html
// for that we need to use file-loader
require('file-loader?name=[name].[ext]!./index.html')

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const appElement = document.getElementById('app')

ReactDOM.render(<App />, appElement)