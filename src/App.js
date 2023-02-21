import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/home";
import Work from "./pages/work/works";
import ContentCreators from "./pages/content-creators/content-creators";
import Projects from "./pages/projects/projects";
import NotFound from "./pages/not-found/not-found";
import Footer from "./components/footer/footer";
import Playlist from "./pages/playlist/playlist";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import style from "./transition.module.css";
import Navbar from "./components/navbar/navbar";
import Comissions from "./pages/comissions/comissions";

function App() {
    const location = useLocation();

    return (
        <div className="app">
            <Navbar />
            <div className="body">
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={{ enter: 300, exit: 300 }}
                        classNames={{
                            enter: style["fade-enter"],
                            enterActive: style["fade-enter-active"],
                            exit: style["fade-exit"],
                            exitActive: style["fade-exit-active"],
                        }}>
                        <Routes location={location}>
                            <Route path="/" element={<Home />} />
                            <Route path="/content-creators" element={<ContentCreators />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/work" element={<Work />} />
                            <Route path="/music" element={<Playlist />} />
                            <Route path="*" element={<NotFound />} />
                            <Route path="/comissions" element={<Comissions />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <Footer />
        </div>
    );
}

export default App;