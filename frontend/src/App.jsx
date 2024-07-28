import React from 'react';
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">

        <Routes>

          {/* Each <Route> component defines a mapping between a URL path and a React component that should be rendered when the application navigates to that path. */}

          {/* In this case, when the URL path is /, the Home component will be rendered. */}

          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </div>



    </>
  );
}

export default App
