import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import PartnerCard from "./PartnerCard";

const partnerData = {
  name: "John Doe",
  partner_id: "123",
  distance: 5,
};

describe("PartnerCard Component", () => {
  it("renders partner name correctly", () => {
    const { getByText } = render(<PartnerCard partner={partnerData} />);
    const nameElement = getByText(`Name: ${partnerData.name}`);
    expect(nameElement).toBeTruthy();
  });

  it("renders partner ID correctly", () => {
    const { getByText } = render(<PartnerCard partner={partnerData} />);
    const idElement = getByText(`ID: ${partnerData.partner_id}`);
    expect(idElement).toBeTruthy();
  });

  it("renders partner distance correctly", () => {
    const { getByText } = render(<PartnerCard partner={partnerData} />);
    const distanceElement = getByText(`Distance from office: ${partnerData.distance} km`);
    expect(distanceElement).toBeTruthy();
  });

  it("renders all partner information", () => {
    const { getByText } = render(<PartnerCard partner={partnerData} />);
    const nameElement = getByText(`Name: ${partnerData.name}`);
    const idElement = getByText(`ID: ${partnerData.partner_id}`);
    const distanceElement = getByText(`Distance from office: ${partnerData.distance} km`);
    expect(nameElement).toBeTruthy();
    expect(idElement).toBeTruthy();
    expect(distanceElement).toBeTruthy();
  });
});
