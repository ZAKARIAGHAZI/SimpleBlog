import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BLogs.css";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [visible, setVisible] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };
    fetchArticles();
  }, []);

  const handleReadMore = (index) => {
    navigate(`/blog/${index}`, { state: articles[index] });
  };

  const handleLoadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <section className="blogs-container">
      <h1>Blogs</h1>
      {articles.slice(0, visible).map((article, index) => (
        <div id="blogs" className="blogs-card" key={index}>
          <div className="content">
            <div className="image-wrapper">
              <img
                src={article.urlToImage || "https://via.placeholder.com/150"}
                alt={article.title}
              />
            </div>

            <div className="info-wrapper">
              <div className="card-header">
                <p>{article.author || "Unknown Author"}</p>
                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
              </div>

              <div className="card-body">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>

              <div className="card-footer">
                <button onClick={() => handleReadMore(index)}>Read more</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {visible < articles.length && (
        <button className="voir-plus-btn" onClick={handleLoadMore}>
          Voir plus
        </button>
      )}
    </section>
  );
};

export default Blogs;
