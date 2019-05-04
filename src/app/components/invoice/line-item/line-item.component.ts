import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

interface LineItem {
  item: string;
  quantity: number;
  rate: number;
}

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnChanges {
  lineItem: LineItem = { item: '', quantity: null, rate: null };
  @Input() item: string;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  deleteLineItem() {
    this.delete.emit(this);
  }
}
