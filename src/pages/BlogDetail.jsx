import { useLocation, useNavigate } from "react-router-dom";
import "../styles/BlogDetail.css";

const BlogDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Redirect back if state is missing (e.g. on refresh)
  if (!state) {
    navigate("/");
    return null;
  }

  const { title, description, content, urlToImage, author, publishedAt, url } =
    state;

  return (
    <div className="blog-detail-container">
      <div className="blog-detail-card">
        <img
          src={urlToImage || "https://via.placeholder.com/600x300"}
          alt={title}
        />

        <div className="meta">
          <p>
            <strong>{author || "Unknown Author"}</strong>
          </p>
          <p>{new Date(publishedAt).toLocaleDateString()}</p>
        </div>

        <h1>{title}</h1>
        <p className="desc">{description}</p>
        {content && <p className="content">{content}</p>}

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="read-original"
        >
          Read full article →
        </a>

        <button onClick={() => navigate(-1)} className="back-btn">
          ⬅ Back to Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
