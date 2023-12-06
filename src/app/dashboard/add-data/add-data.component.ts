import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import {MatSnackBar} from "@angular/material/snack-bar";

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

  onSubmit() {
    if (this.addChildForm.valid) {
      this.backendService.addChildData(this.addChildForm.value)
        .subscribe(_ => {
          this.backendService.getChildren(this.currentPage, this.storeService.pageSize);
          this.snackBar.open('Anmeldung erfolgreich! 🥳', '', {duration: 3000});
        });
    }
  }
}
