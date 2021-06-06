import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';
import ErrorBoundry from './components/error-boundry';
import { BrowserRouter as Router } from 'react-router-dom';
import { RealEstateServiceProvider } from './components/real-estate-service-context';
import RealEstateService from './services';

const realEstateService = new RealEstateService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <RealEstateServiceProvider value={ realEstateService }>
        <Router>
          <App />
        </Router>
      </RealEstateServiceProvider>
    </ErrorBoundry>
  </Provider>,    
  document.getElementById('root')
);

