import Header from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Work from "./pages/work/work";
import Projects from "./components/list/work/projects";

function App() {
  return (
    <div className="App">
      <Header />
        <div className={"app"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/content-creators" element={<Work />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/work" element={<Work />} />
                </Routes>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
