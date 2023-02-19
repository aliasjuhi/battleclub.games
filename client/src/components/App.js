import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Index from './../views/Index';


function App() {
  return (
 
      <div >
        <Router>
         
            <Switch>
           
         
              <Route path="/" component={Index} />
           

          
            </Switch>
          
        </Router>
      </div>
    
  )
}

export default App
