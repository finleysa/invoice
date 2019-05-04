import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { LineItemComponent } from '../line-item/line-item.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.scss']
})
export class LineItemListComponent implements OnChanges {
  lineItems = Array<LineItemComponent>();

  constructor() {
    this.addLineItem();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  addLineItem() {
    const lineItem = new LineItemComponent();
    this.lineItems.push(lineItem);
    console.log(this.lineItems);
  }

  deleteLineItem(lineItem: LineItemComponent, lineItemNumber: number) {
    this.lineItems.splice(lineItemNumber, 1);
  }
}
