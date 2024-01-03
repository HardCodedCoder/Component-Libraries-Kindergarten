import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataComponent } from './dashboard/data/data.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { PaginationPipe } from './dashboard/data/pagination.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule} from "@angular/material/dialog";
import { MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule} from "@angular/material/core";
import { MatTableModule} from "@angular/material/table";
import { MatPaginatorModule} from "@angular/material/paginator";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RegisterChildComponent } from './register-child/register-child.component';
import { WidgetComponentComponent } from './dashboard/widget-component/widget-component.component';
import { MatCardModule} from "@angular/material/card";
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { KindergardensComponent } from './kindergardens/kindergardens.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTabsModule} from "@angular/material/tabs";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataComponent,
    HeaderComponent,
    ButtonComponent,
    PaginationPipe,
    RegisterChildComponent,
    WidgetComponentComponent,
    KindergardensComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatGridListModule,
    MatTabsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
