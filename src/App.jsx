import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/homePage/homePage";
import TweetsPage from "./pages/tweetsPage/tweetsPage";

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
