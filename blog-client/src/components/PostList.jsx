import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axios.get('http://localhost:5000/api/posts');
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>
                        <Link to={`/posts/${post._id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
