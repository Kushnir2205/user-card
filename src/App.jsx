import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import TweetsPage from "./pages/TweetsPage/TweetsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweet" element={<TweetsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
