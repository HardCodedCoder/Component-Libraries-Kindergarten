import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kindergarden } from './interfaces/Kindergarden';
import { StoreService } from './store.service';
import { Child, ChildResponse } from './interfaces/Child';
import { SENSORS_PER_PAGE } from './constants';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private storeService: StoreService) { }

  public getKindergardens() {
    this.http.get<Kindergarden[]>('http://localhost:5000/kindergardens').subscribe(data => {
      this.storeService.kindergardens = data;
    });
  }

  public getChildren(page: number) {
    this.http.get<ChildResponse[]>(`http://localhost:5000/childs?_expand=kindergarden&_page=${page}&_limit=${SENSORS_PER_PAGE}`, { observe: 'response' }).subscribe(data => {
      console.log(data);
      this.storeService.children = data.body!;
      this.storeService.sensorenDatenTotalCount = Number(data.headers.get('X-Total-Count'));

    });
    }

    public async addChildData(child: Child, page:  number) {
      this.http.post('http://localhost:5000/childs', child).subscribe(_ => {
        this.getChildren(page);
      })
    }

    public async deleteChildData(childId: string, page: number) {
      this.http.delete(`http://localhost:5000/childs/${childId}`).subscribe(_=> {
        this.getChildren(page);
      })
    }
  }
