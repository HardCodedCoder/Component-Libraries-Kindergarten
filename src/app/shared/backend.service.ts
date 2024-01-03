import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kindergarden } from './interfaces/Kindergarden';
import { StoreService } from './store.service';
import { Child } from './interfaces/Child';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private storeService: StoreService) { }

  public getKindergardens() {
    this.storeService.isLoading = true;
    this.http.get<Kindergarden[]>('http://localhost:5000/kindergardens').subscribe(data => {
      this.storeService.kindergardens = data;
      this.storeService.isLoading = false;
    });
  }

  public getChildren(page: number, childrenPerPage: number, sortBy?: string, direction?: string) {
    this.storeService.isLoading = true;
    this.http.get<Child[]>(`http://localhost:5000/childs?_expand=kindergarden&_sort=${sortBy}&_order=${direction}&_page=${page}&_limit=${childrenPerPage}`, { observe: 'response' }).subscribe(data => {
      this.storeService.children = data.body!;
      this.storeService.childrenTotalCount = Number(data.headers.get('X-Total-Count'));
      this.storeService.childrenForFilter = this.storeService.children;
      this.storeService.isLoading = false;
    });
    }

    public addChildData(child: Child): Observable<any> {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      child.registrationDate = formattedDate;
      return this.http.post('http://localhost:5000/childs', child);
    }

    public patchkindergardenData(kindergarden: Kindergarden): Observable<any> {
      return this.http.patch(`http://localhost:5000/kindergardens/${kindergarden.id}`, kindergarden)
    }

    public deleteChildData(childId: string, page: number) {
      this.storeService.isLoading = true;
      this.http.delete(`http://localhost:5000/childs/${childId}`).subscribe(_=> {
        this.getChildren(page, this.storeService.pageSize);
        this.storeService.isLoading = false;
      })
    }
}
