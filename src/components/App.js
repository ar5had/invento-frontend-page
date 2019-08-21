import React from 'react';
import FilterSidebar from './FilterSidebar';
import Content from './Content';
import '../styles/App.css';

const App = () => {
  return (
    <div className="app">
      <FilterSidebar />
      <Content />
    </div>
  );
};

export default App;
