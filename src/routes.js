import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Projects from "./pages/Projects";

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main />}/>
                <Route path="projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );

}

export default Rotas;