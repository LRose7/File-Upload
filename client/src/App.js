import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomeScreen from './screens/HomeScreen';
import SingleFileUploadScreen from './screens/SingleFileUploadScreen';
import MultipleFileUploadScreen from './screens/MultipleFileUploadScreen';


export default function App() {



  return (
    <BrowserRouter>
      <div className="container">
        <Header></Header>
        <main>
          <Route path="/" exact={true} component={HomeScreen}></Route>
          <Route path="/SingleFileUpload" component={SingleFileUploadScreen}></Route>
          <Route path="/MultipleFileUpload" component={MultipleFileUploadScreen}></Route>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}


