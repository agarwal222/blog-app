import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await axios.get(`http://localhost:5000/api/posts/${id}`);
            setPost(data);
        };
        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        await axios.delete(`http://localhost:5000/api/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        navigate('/');
    };

    return post ? (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className='button-group'>
            <button onClick={() => navigate(`/posts/edit/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default PostDetail;
