import "./App.css";
import App1 from "./app/App1";
import { Provider } from "react-rudex";
function App() {
  return (
    <Provider>
      <div className="app">
        <App1 />
      </div>
    </Provider>
  );
}

export default App;
