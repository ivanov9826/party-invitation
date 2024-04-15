export interface IPartner {
  latitude: string;
  longitude: string;
  partner_id: number;
  name: string;
}

export interface IEligiblePartner {
  partner_id: number;
  name: string;
  distance: number;
}
