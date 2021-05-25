import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Pages from './Pages/Pages';
import Tutorials from './Tutorials/Tutorials';
import Features from './Features/Features';
import Extensions from './Extensions/Extensions';
import Contact from './Contact/Contact';


const App = () => {
    return (
        <Router>
            <div className="page">
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/pages'>
                        <Pages />
                    </Route>
                    <Route path='/tutorials'>
                        <Tutorials />
                    </Route>
                    <Route path='/features'>
                        <Features />
                    </Route>
                    <Route path='/extensions'>
                        <Extensions />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    <Redirect to='/'></Redirect>
                </Switch>
            </div>
        </Router>
    );
};

export default App;