import { officeCoords } from "../constants/constants";
import { IPartner } from "../interfaces/interfaces";

const { latitude: officeLatitude, longitude: officeLongitude } = officeCoords;

export default function rangeCheck(partner: IPartner, range: number) {
  const partnerLongitude = +partner.longitude;
  const partnerLatitude = +partner.latitude;

  const R = 6371; // еarth radius in kilometers
  const officeLatRad = (officeLatitude * Math.PI) / 180;
  const partnerLatRad = (partnerLatitude * Math.PI) / 180;
  const latDiff = (partnerLatitude - officeLatitude) * (Math.PI / 180);
  const lonDiff = (partnerLongitude - officeLongitude) * (Math.PI / 180);

  const x = lonDiff * Math.cos((officeLatRad + partnerLatRad) / 2);
  const y = latDiff;

  const distance = Math.sqrt(x * x + y * y) * R;

  if (distance <= range) {
    const eligibleParnter = { partner_id: partner.partner_id, name: partner.name, distance: Math.ceil(distance) };
    return eligibleParnter;
  }
}
