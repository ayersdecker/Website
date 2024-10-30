import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Stack } from 'react-bootstrap';
import HomePage from './components/pages/Home';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <Layout>
      <HomePage />
    </Layout>
    
  );
}

export default App;
