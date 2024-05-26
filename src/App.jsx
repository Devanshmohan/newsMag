import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Footer from "./components/Footer";

const App = () => {
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1); // Reset page when category changes
  };

  return (
    <>
      <Navbar setCategory={handleCategoryChange} />
      <NewsBoard category={category} page={page} />
      <Footer loadMore={handleLoadMore} />
    </>
  );
};

export default App;
