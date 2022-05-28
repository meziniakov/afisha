export interface IEvent {
  name: string;
  shortDescription: string;
  ageRestriction: number;
  categoryName: string;
  imageLink: string;
  link: string;
  price: number;
  tagNames: [];
  fullAddress: string;
  slug?: string;
}
