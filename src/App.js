import Header from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Work from "./pages/work/works";
import ContentCreators from "./pages/content-creators/content-creators";
import Projects from "./pages/projects/projects";
import NotFound from "./pages/not-found/not-found";
import Footer from "./components/footer/footer";
import Playlist from "./pages/playlist/playlist";

function App() {
    return (
        <div className="app">
            <Header/>
            <div className="body">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/content-creators" element={<ContentCreators/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/work" element={<Work/>}/>
                        <Route path="/music" element={<Playlist />}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );
}

export default App;
