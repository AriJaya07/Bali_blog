import Intro from './components/intro/Intro'
import PostList from './components/postList/PostList'
import About from './components/about/About'
import Contact from './components/contact/Contact'


function App() {
  return (
    <div className="App">
      <Intro />
      <h1 style={{ color: '#0e9d57'}}>
        -
      </h1>
      <PostList />
      <About />
      <Contact />
    </div>
  );
}

export default App;
