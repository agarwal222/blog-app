import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import PostForm from './components/PostForm';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts/:id" element={<PostPage />} />
                <Route path="/create" element={<PostForm action="create" />} />
                <Route path="/posts/edit/:id" element={<PostForm action="update" />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;