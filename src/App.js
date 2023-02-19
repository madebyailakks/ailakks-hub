import Header from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Work from "./pages/work/work";

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
