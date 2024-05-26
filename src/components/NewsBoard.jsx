import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

function NewsBoard({ category, page }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=3e30629f2b9e40bba81e5ce500b5c8a8`;  
      const response = await fetch(url);
      const data = await response.json();
      setArticles(prevArticles => page === 1 ? data.articles : [...prevArticles, ...data.articles]);
    };

    fetchArticles();
  }, [category, page]);

  return (
    <div className="py-4">
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => (
        <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
}

export default NewsBoard;
