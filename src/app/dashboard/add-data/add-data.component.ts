import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,
              public storeService: StoreService,
              public backendService: BackendService,
              private snackBar: MatSnackBar) {
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

  showToast(): void {
    const toastEl = document.getElementById('successToast');
    if (toastEl)
    {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }

  onSubmit() {
    if (this.addChildForm.valid) {
      this.backendService.addChildData(this.addChildForm.value)
        .subscribe(_ => {
          this.backendService.getChildren(this.currentPage, this.storeService.pageSize);
          this.showToast();
        });
    }
  }
}
