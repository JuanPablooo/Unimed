import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/home/Home';



const NotFound = () => {
    return (
      <div>
        <h1>404 page not found</h1>
      </div>
    );
};

// const PrivateRoute = ({component: Component, ...rest}) =>(
//     <Route {...rest} render={props =>(
//         isSignedIn() ? (
//             <Component  {...props}/>
//         ) : (
//             <Redirect to={ {pathname: '/', state: {from:props.location} } } />
//         )
//     )}/>
// );

const Routes = () =>(
    <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" component={ Home} />
                <Route component={NotFound} />
            </Switch>            
        </div>
    </Router>
);
export default  Routes;