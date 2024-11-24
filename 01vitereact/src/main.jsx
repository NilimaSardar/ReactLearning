import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom React</h1>
        </div>
    )
}

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit google</a>
// )

const anotherUser = "Nilima Saradr"
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
  
   
    reactElement
    

)
