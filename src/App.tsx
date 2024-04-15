import "./App.scss";
import Header from "./components/organisms/Header/Header";
import Router from "./routes/Routes";
//Add header

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
