import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-register-child',
  templateUrl: './register-child.component.html',
  styleUrls: ['./register-child.component.scss']
})
export class RegisterChildComponent implements OnInit{

  public addChildForm: any;
  @Input() currentPage!: number;

  constructor(private formbuilder: FormBuilder,
              public storeService: StoreService,
              public backendService: BackendService) {
  }

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
      const selectedKindergardenId = this.addChildForm.value.kindergardenId;
      const selectedKindergardenIndex = this.storeService.kindergardens.findIndex(kg => kg.id === selectedKindergardenId);

      if (selectedKindergardenIndex !== -1) {
        let kindergarden = this.storeService.kindergardens[selectedKindergardenIndex];
        kindergarden.enrolled++;

        this.backendService.patchkindergardenData(kindergarden)
          .subscribe(response => {
            console.log("Success");
            console.log(response);
          }, error => {
            console.log("No success");
            console.log(error);
          });
      }

      this.backendService.addChildData(this.addChildForm.value)
        .subscribe(_ => {
          this.backendService.getChildren(this.currentPage, this.storeService.pageSize);
          this.showToast();
        });
    }
  }

}





