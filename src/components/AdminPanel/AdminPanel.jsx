import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
    const [blogs, setBlogs] = useState([]);
    const [newBlog, setNewBlog] = useState({ title: '', description: '', image: '' });
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        setBlogs(storedBlogs);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBlog({ ...newBlog, [name]: value });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleAddBlog = () => {
        if (!newBlog.title || !newBlog.description || !imageFile) {
            alert('Please fill in all fields and select an image.');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const newBlogWithImage = {
                ...newBlog,
                image: reader.result // Save the image as a data URL
            };
            const newBlogWithId = {
                ...newBlogWithImage,
                id: blogs.length ? Math.max(blogs.map(blog => blog.id)) + 1 : 1
            };
            const updatedBlogs = [...blogs, newBlogWithId];
            setBlogs(updatedBlogs);
            localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

            // Reset form
            setNewBlog({ title: '', description: '', image: '' });
            setImageFile(null);
        };
        reader.readAsDataURL(imageFile);
    };

    const handleDeleteBlog = (id) => {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };

    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>
            <div className="add-blog-form">
                <h3>Add New Blog</h3>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newBlog.title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={newBlog.description}
                    onChange={handleInputChange}
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <button onClick={handleAddBlog}>Add Blog</button>
            </div>
            <div className="blog-list">
                <h3>Existing Blogs</h3>
                {blogs.map(blog => (
                    <div key={blog.id} className="blog-item">
                        <img src={blog.image} alt={blog.title} />
                        <div>
                            <h4>{blog.title}</h4>
                            <p>{truncateDescription(blog.description, 100)}</p>
                        </div>
                        <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

export default AdminPanel;
