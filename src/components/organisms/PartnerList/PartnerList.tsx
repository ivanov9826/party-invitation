import style from "./PartnerList.module.scss";
import { useMemo } from "react";
import { IEligiblePartner } from "../../../interfaces/interfaces";
import partnersData from "../../../constants/partnersData.json";
import rangeCheck from "../../../utils/rangeCheck";
import PartnerCard from "../../molecules/PartnerCard/PartnerCard";
import Title from "../../atoms/Title/Title";

const PartnerList: React.FC = () => {
  const partnersArray = useMemo(() => {
    const tempArr: IEligiblePartner[] = [];
    partnersData.forEach((partner) => {
      const result = rangeCheck(partner, 100);
      if (result) tempArr.push(result);
    });
    return tempArr.sort((a, b) => a.partner_id - b.partner_id);
  }, []);

  return (
    <div className={style["list-wrapper"]}>
      <Title text="Eligible partners" size="small" />
      <div className={style["partners-container"]}>
        {partnersArray.length ? (
          partnersArray.map((partner, index) => <PartnerCard partner={partner} key={index} />)
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div> // Could add pagination
  );
};

export default PartnerList;
