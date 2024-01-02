import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import {PageEvent} from "@angular/material/paginator";
import {Child} from "../../shared/interfaces/Child";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  displayedColumns: string[] = ['name', 'kindergarden', 'address', 'age', 'birthDate'];

  constructor(public storeService: StoreService, private backendService: BackendService) {}
  @Input() currentPage!: number;
  @Output() selectPageEvent = new EventEmitter<number>();
  tableData!: Child[]
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

  applyFilter($event: KeyboardEvent) {
    console.log(($event.target as HTMLInputElement).value.toLowerCase())
    const kindergardenName: string = ($event.target as HTMLInputElement).value.toLowerCase();
    this.storeService.children = this.storeService.childrenForFilter.filter(child => {
      return child.kindergarden.name.toLowerCase().includes(kindergardenName);
    })
  }

  announceSortChange($event: Sort) {
    if ($event.active === "name") {
      this.backendService.getChildren(this.currentPage, this.storeService.pageSize, $event.active, $event.direction);
    } else if ($event.active === "kindergarden") {
        console.log(this.storeService.children)
        this.storeService.children.sort((childOne, childTwo) => {
        const kindergardenOne = childOne.kindergarden.name;
        const kindergardenTwo = childTwo.kindergarden.name;

        let comparison = 0 ;
        if (kindergardenOne < kindergardenTwo)
          comparison =  -1;
        else if (kindergardenOne > kindergardenTwo)
          comparison = 1;

        return $event.direction === "desc" ? comparison * -1 : comparison;
      })

      console.log(this.storeService.children)
    }
  }
}


