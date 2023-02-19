import Header from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Work from "./pages/work/works";
import ContentCreators from "./pages/content-creators/content-creators";
import Projects from "./pages/projects/projects";
import NotFound from "./pages/not-found/not-found";

function App() {
  return (
    <div className="App">
      <Header />
        <div className={"app"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/content-creators" element={<ContentCreators />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
