import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatCardModule,
  MatDialogModule,
  MatButtonModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatIconModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule,
  MatInputModule,
  MatChipsModule,
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule { }
