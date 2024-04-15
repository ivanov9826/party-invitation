import "./PartnerList.scss";
import { useMemo } from "react";
import { eligibleParnter } from "../../../interfaces/interfaces";
import partnersData from "../../../constants/partnersData.json";
import rangeCheck from "../../../utils/rangeCheck";
import PartnerCard from "../../molecules/PartnerCard/PartnerCard";
import ListTitle from "../../atoms/ListTitle/ListTitle";

const PartnerList: React.FC = () => {
  const partnersArray = useMemo(() => {
    const tempArr: eligibleParnter[] = [];
    partnersData.forEach((partner) => {
      const result = rangeCheck(partner, 100);
      if (result) tempArr.push(result);
    });
    return tempArr.sort((a, b) => a.partner_id - b.partner_id);
  }, []);

  return (
    <div className="list-wrapper">
      <ListTitle text="Eligible partners:" />
      <div className="partners-container">
        {partnersArray.map((partner, index) => (
          <PartnerCard partner={partner} key={index} />
        ))}
      </div>
    </div> // Could add pagination
  );
};

export default PartnerList;
