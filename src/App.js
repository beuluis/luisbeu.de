import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Index from './pages/Index/Index';
import LegalNotice from './pages/LegalNotice/LegalNotice';
import Privacy from './pages/Privacy/Privacy';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/legal-notice" component={LegalNotice} />
                <Route exact path="/privacy" component={Privacy} />
                <Route component={Index} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
