import { Kindergarden } from "./Kindergarden";

  export interface Child {
    id: string;
    name: string;
    birthDate: string,
    kindergarden: Kindergarden,
    kindergardenId: number,
    registrationDate: string;
  }
