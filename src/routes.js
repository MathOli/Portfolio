import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Projects from "./pages/Projects";

const Rotas = () => {

    return (
            <Routes>
                <Route path="/" exact element={<Main />}/>
                <Route path="projects" element={<Projects />} />
            </Routes>
    );

}

export default Rotas;