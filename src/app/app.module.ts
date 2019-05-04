import { AppComponent } from './app.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LineItemComponent } from './components/invoice/line-item/line-item.component';
import { LineItemListComponent } from './components/invoice/line-item-list/line-item-list.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, InvoiceComponent, LineItemComponent, LineItemListComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MaterialModule, FlexLayoutModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
