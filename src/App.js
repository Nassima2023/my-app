
import React from 'react'
// import ReactDOM from 'react-dom'
import './App.scss';
import Layout from './layout';
import imgSource from './img.source.png'
import Card from './cardPicture'
import './card.scss'



function App() {
  return (
  <Layout> 
  
    <div className="App">
        <Card imageSrc={imgSource} altText="Image source" text="Chez vous, partout et ailleurs" />
 
    </div>
    
  </Layout>
  );
}

export default App;
