// import logo from './logo.svg';
import './App.css';
import { RouterComponent } from "./routes/Router";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from 'react-redux';
import store from './store'
import theme from "./theme/theme"


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterComponent />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
