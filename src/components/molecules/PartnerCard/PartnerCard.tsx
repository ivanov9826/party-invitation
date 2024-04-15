import { IEligiblePartner } from "../../../interfaces/interfaces";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import Paragraph from "../../atoms/Paragraph/Paragraph";

interface PartnerCardProps {
  partner: IEligiblePartner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <Wrapper>
      <Paragraph text={`Name: ${partner.name}`} />
      <Paragraph text={`ID: ${partner.partner_id}`} />
      <Paragraph text={`Distance from office: ${partner.distance} km`} />
    </Wrapper>
    // Could add button to show partner location on map
  );
};

export default PartnerCard;
