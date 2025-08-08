import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddBlog.css";

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    description: "",
    content: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBlog((prev) => ({ ...prev, image: reader.result })); // base64 string
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

 const handleSubmit = (e) => {
   e.preventDefault();

   try {
     const existingBlogs = JSON.parse(localStorage.getItem("userBlogs")) || [];
     const newBlog = {
       ...blog,
       publishedAt: new Date().toISOString(),
     };

     localStorage.setItem(
       "userBlogs",
       JSON.stringify([...existingBlogs, newBlog])
     );

     alert("✅ Blog added successfully!");
     navigate("/");
   } catch (error) {
     console.error("Error adding blog:", error);
     alert("❌ Failed to add blog. Please try again.");
   }
 };
  return (
    <div className="add-blog-form-container">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={blog.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={blog.author}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Short Description"
          value={blog.description}
          onChange={handleChange}
          required
        />

        <textarea
          name="content"
          placeholder="Content"
          value={blog.content}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />

        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
