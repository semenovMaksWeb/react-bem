import React from 'react';

import {NavMain} from "./components/nav/nav_main/nav_main";

import {RouteConfig as Router} from "./router";

function App() {
  return (
    <>
        <header className="header">
            <NavMain/>
        </header>
        <main>
            <Router/>
        </main>
    </>
  );
}

export default App;
