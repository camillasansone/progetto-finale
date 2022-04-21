import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import NotFound from './components/not-found/NotFound';
import Posts from './components/posts/Posts';
import PostDetail from './components/post-detail/PostDetail';
import PostsCategory from './components/posts-category/PostsCategory';
import Contact from './components/contact/Contact';
import AboutUs from './components/about-us/AboutUs';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetail />} />
          <Route path="posts-categories/:categoryId/posts" element={<PostsCategory />} />
        </Route>

        <Route path="/contact/:pageId" element={<Contact />} />
        <Route path="/about-us/:pageId" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;