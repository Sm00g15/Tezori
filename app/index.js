import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Root from './containers/Root/';
import { configureStore, history } from './store/configureStore';
import muiTheme from './muiTheme';
import './styles/global-styles';

const store = configureStore();

render(
  <MuiThemeProvider theme={muiTheme}>
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>
  </MuiThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(() => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppContainer>
          <NextRoot store={store} history={history} />
        </AppContainer>
      </MuiThemeProvider>,
      document.getElementById('root')
    );
  });
}
