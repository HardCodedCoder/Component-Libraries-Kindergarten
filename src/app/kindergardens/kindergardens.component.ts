import { Component } from '@angular/core';
import {StoreService} from "../shared/store.service";
import {Kindergarden} from "../shared/interfaces/Kindergarden";

@Component({
  selector: 'app-kindergardens',
  templateUrl: './kindergardens.component.html',
  styleUrls: ['./kindergardens.component.scss']
})
export class KindergardensComponent {
   timing: string = "5s ease-in";

   constructor(public storeService: StoreService) {
   }

  getKindergardenUrls(kindergarden: Kindergarden): string[] {
     return this.storeService.getKindergardenUrls(kindergarden);
    }
}
