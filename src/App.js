import './App.css';
//import { Component } from 'react';
import React, { useState } from 'react';
import Layout from './components/Layout';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';


export default function App() {
  const [name, setName] = useState('');
 
  return (
    <Layout>
      <Searchbar onSubmit={setName} />
      <ImageGallery name={name} />
    </Layout>
  );
}



// class App extends Component {
//   state = {
//     name: '',
//   };

//   handleFormSubmit = name => {
//     this.setState({ name: name });
//   };

//   render() {
//     return (
//       <Layout>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery name={this.state.name} />
//       </Layout>
//     );
//   }
// }

// export default App;
