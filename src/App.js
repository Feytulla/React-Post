import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import Page from './component/Page';
import PostPage from './pages/PostPage'


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='post' element={<Post />} />
        <Route path='PostPage' element={<PostPage />}>
          <Route path=':post' element={<Page />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='*' element={<h2>Error 404</h2>} />
      </Routes>
    </>
  );
}

export default App;
