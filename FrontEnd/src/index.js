import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import * as serviceWorker from './serviceWorker';
import AuthenticationWrapper from './Components/Authentication/AuthenticationWrapper';
import UserLayout from './Components/UserView/UserLayout';



ReactDOM.render(
    <HttpsRedirect>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={UserLayout} />

                <Route path="/habcal" component={UserLayout} />

                <Route path="/profile" component={UserLayout} />

                <Route path="/authentication" component={AuthenticationWrapper} />
            </Switch>
        </BrowserRouter>
    </HttpsRedirect>
    , document.getElementById('root'));
serviceWorker.unregister();
