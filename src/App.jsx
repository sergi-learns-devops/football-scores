import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CompetitionView from './pages/CompetitionView';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competition/:id" element={<CompetitionView />} />
      </Routes>
    </Layout>
  );
}

export default App;
