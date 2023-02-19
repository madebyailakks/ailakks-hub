import Header from "./components/ui/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WorkList from "./pages/work/work-list";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<WorkList />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
