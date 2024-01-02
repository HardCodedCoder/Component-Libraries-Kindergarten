import { Injectable } from '@angular/core';
import { Kindergarden } from './interfaces/Kindergarden';
import { ChildResponse } from './interfaces/Child';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public kindergardens: Kindergarden[] = [];
  public children: ChildResponse[] = []
  public childrenForFilter: ChildResponse[] = [];
  public childrenTotalCount: number = 0;
  public pageSize: number = 10;

}
