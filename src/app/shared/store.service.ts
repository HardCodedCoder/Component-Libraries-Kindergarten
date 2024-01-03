import { Injectable } from '@angular/core';
import { Kindergarden } from './interfaces/Kindergarden';
import { Child } from './interfaces/Child';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public kindergardens: Kindergarden[] = [];
  public children: Child[] = []
  public childrenForFilter: Child[] = [];
  public childrenTotalCount: number = 0;
  public isLoading: boolean = true;
  public pageSize: number = 10;

  getKindergardenUrls(kindergarden: Kindergarden): string[] {
    const basePath = 'assets/images/kindergardens/';
    const kindergardenImagesFolder = `${kindergarden.id}/`;

     return [
      `${basePath}${kindergardenImagesFolder}image1.jpg`,
      `${basePath}${kindergardenImagesFolder}image2.jpg`,
      `${basePath}${kindergardenImagesFolder}image3.jpg`,
      `${basePath}${kindergardenImagesFolder}image4.jpg`,
      `${basePath}${kindergardenImagesFolder}image5.jpg`
    ];
  }
}
