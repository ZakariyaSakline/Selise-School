import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
} from '@angular/material';

import { from } from 'rxjs';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataTableComponent } from './data-table/data-table.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    DashbordComponent,
    ProductListComponent,
    DataTableComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      { path: 'add_product', component: AddproductComponent },
      { path: 'dash_board', component: DashbordComponent },
      { path: 'product_list', component: ProductListComponent },
      { path: 'data_table', component: DataTableComponent },
      { path: 'cart_details', component: CartDetailsComponent },


    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
