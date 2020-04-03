import React from "react";
import "./App.css";
import { info } from './data/data';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <Layout
        gasoline={info.gasoline}
        developer={info.developer}
        djangoReleases={info.djangoReleases}
        projects={info.projects}
      />
    </div>
  );
}

export default App;
