import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Invitees from "../pages/Ivitees";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invitees" element={<Invitees />} />
    </Routes>
  );
};

export default Router;
