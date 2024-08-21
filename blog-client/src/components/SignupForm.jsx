import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', {
                username,
                password,
            });
            setMessage('Signup successful! Please log in.');
            setSuccess(true);
        } catch (error) {
            setMessage('Signup failed. Please try again.');
            setSuccess(false);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign Up</button>
            {message && <p>{message}</p>}
            {success && <Link to="/login">Login</Link>}
        </form>
    );
};

export default SignupForm;
