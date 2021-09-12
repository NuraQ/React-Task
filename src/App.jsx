// import logo from './logo.svg';
import './App.css';
import { RouterComponent } from "./routes/Router";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme"


const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

      <RouterComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
