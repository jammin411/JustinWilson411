import './css/App.css';
import Header from './components/Header';
import Body from './components/Body'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#9fa8da',
      main: '#3f51b5',
      dark: '#1a237e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#536dfe',
      main: '#424242',
      dark: '#304ffe',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Body />
      </ThemeProvider>      
    </div>
  );
}

export default App;