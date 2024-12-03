import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Support from "./pages/Support";
import NavigationBar from "./components/NavigationBar";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import Footer from "./components/Footer";
import CategoriesList from "./pages/CategoriesList";
import CategoriesState from "./context/CategoriesState";
import MovieDetails from "./pages/MovieDetails";
import SearchList from "./pages/SearchList";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <CategoriesState>
      <LoadingBar
        height={3}
        color="rgb(229, 0, 0)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home setProgress={setProgress} />} />
        <Route path="/categoriesList" element={<CategoriesList />} />
        <Route path="/searchlist" element={<SearchList />} />
        <Route path=":id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </CategoriesState>
  );
}

export default App;
