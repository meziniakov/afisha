export interface IEvent {
  id: number;
  name: string;
  organizer?: string;
  shortDescription?: string;
  description?: string;
  ageRestriction?: number;
  isFree?: boolean;
  price: number;
  maxPrice?: number;
  status?: string;
  saleLink?: string;
  needMedia?: boolean;
  organizerPlace?: any;
  start?: string;
  end?: string;
  tags?: any;
  gallery?: any;
  image?: any;
  category?: any;
  organization?: any;
  places: any;
  seances?: any;
}
