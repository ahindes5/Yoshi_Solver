import './App.css';
import {Board} from "./Board";
import {Background} from "./Background";
import {AppContextProvider} from "./AppContext";

function App() {
  return (
    <AppContextProvider>
        <Background>
          <Board/>
        </Background>
    </AppContextProvider>
  );
}

export default App;
