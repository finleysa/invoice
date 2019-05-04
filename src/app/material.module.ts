import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule
  ]
})
export class MaterialModule {}
