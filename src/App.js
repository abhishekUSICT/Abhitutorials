import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LeftNavBar from './components/LeftNavBar.js';
import Introduction from './components/Introduction.js';
import Subjects from './components/Subjects.js';
import Questions from './components/Questions.js';
import Books from './components/Books.js';
function App() {
    return (
        <Router>
            <div className="tutorial">
                <LeftNavBar />
                <div className="content">
                    <Switch>
                        <Route exact path='/' component={Introduction} />
                        <Route exact path='/subjects' component={Subjects} />
                        <Route exact path='/questions' component={Questions} />
                        <Route exact path='/books' component={Books} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
