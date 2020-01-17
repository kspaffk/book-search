import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import bookSearch from "./pages/book-search"
import bookList from "./pages/book-list"
import Nav from "./components/nav"
import nomatch from "./components/nomatch"
import "./App.css"

function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/list" component={bookList} />
            <Route exact path="/" component={bookSearch} />
            <Route component={nomatch} />
          </Switch>
        </div>
      </Router>
    )
}

export default App;