import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  displayedColumns: string[] = ['name', 'kindergarden', 'address', 'age', 'birthDate', 'actions'];

  constructor(public storeService: StoreService, private backendService: BackendService) {}
  @Input() currentPage!: number;
  @Output() selectPageEvent = new EventEmitter<number>();

  ngOnInit(): void {
    this.backendService.getChildren(this.currentPage, this.storeService.pageSize);
  }

  getAge(birthDate: string) {
    var today = new Date();
    var birthDateTimestamp = new Date(birthDate);
    var age = today.getFullYear() - birthDateTimestamp.getFullYear();
    var m = today.getMonth() - birthDateTimestamp.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateTimestamp.getDate())) {
        age--;
    }
    return age;
  }

  onPageChange(event: PageEvent) {
    this.storeService.pageSize = event.pageSize;
    let currentPage = event.pageIndex + 1;
    this.selectPageEvent.emit(currentPage);
    this.backendService.getChildren(currentPage, this.storeService.pageSize);
  }

  onChildrenPerPageChange() {
    this.backendService.getChildren(this.currentPage, this.storeService.pageSize)
  }

  public returnAllPages() {
    return Math.ceil(this.storeService.childrenTotalCount / this.storeService.pageSize)
  }

  public cancelRegistration(childId: string) {
    this.backendService.deleteChildData(childId, this.currentPage);
  }
}


