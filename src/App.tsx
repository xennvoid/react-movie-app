import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './layout/Layout';
import FullMovieList from './pages/FullMovieList/FullMovieList';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SingleMovie from './pages/SingleMovie/SingleMovie';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="list/:category/:movietype" element={<FullMovieList />} />
          <Route path=":category/:id" element={<SingleMovie />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;