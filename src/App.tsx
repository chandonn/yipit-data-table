import "./App.css";
import { Header } from "./components/Header/Header";
import { Table } from "./components/Table/Table";
import { StoreProvider } from "./context/store";

function App() {
  return (
    <StoreProvider>
      <div className="main-container">
        <Header />
        <Table />
      </div>
    </StoreProvider>
  );
}

export default App;
