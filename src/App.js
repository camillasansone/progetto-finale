import './App.css';

//router
import { Routes, Route, Outlet } from 'react-router-dom';

//components
import './App.css';
import AboutUs from './components/about-us/AboutUs';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar';
import NotFound from './components/not-found/NotFound';
import Posts from './components/posts/Posts';
import PostsCategory from './components/posts-category/PostsCategory';
import PostDetail from './components/post-detail/PostDetail';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetail />} />
          <Route path="posts-categories/:categoryId/posts" element={<PostsCategory />} />
        </Route>

        <Route path="pages/about-us/:pageId" element={<AboutUs />} />
        <Route path="pages/contacts/:pageId" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;