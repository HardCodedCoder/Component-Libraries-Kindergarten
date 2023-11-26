import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import {SuccessDialogComponent} from "../../success-dialog/success-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit{

  constructor(private formbuilder: FormBuilder,
              public storeService: StoreService,
              public backendService: BackendService,
              public dialog: MatDialog) {
  }
  public addChildForm: any;
  @Input() currentPage!: number;

  ngOnInit(): void {
    this.addChildForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      kindergardenId: ['', Validators.required],
      birthDate: [null, Validators.required]
    })
  }

  onSubmit() {
    if (this.addChildForm.valid) {
      this.backendService.addChildData(this.addChildForm.value)
        .subscribe(_ => {
          this.backendService.getChildren(this.currentPage, this.storeService.pageSize);
            this.dialog.open(SuccessDialogComponent, {
              data: {
                name: this.addChildForm.value.name,
              }
            })
          })
      }
    }
}
