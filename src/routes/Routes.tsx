import { Routes, Route } from "react-router-dom";
import PartnerList from "../components/organisms/PartnerList/PartnerList";
import Home from "../pages/Home";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invitees" element={<PartnerList />} />
    </Routes>
  );
};

export default Router;
