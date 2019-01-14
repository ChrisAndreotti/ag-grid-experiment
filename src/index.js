import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import Root from './Root';


const theme = createMuiTheme(
{
  transitions:{
    duration: {
      shortest:10
    }
  }
}

);

function AppWrap() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}



ReactDOM.render(<AppWrap />, document.getElementById('root'));
