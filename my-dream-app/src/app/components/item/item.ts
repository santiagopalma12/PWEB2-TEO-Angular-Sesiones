import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.html',
  styleUrls: ['./item.css']
})
export class ItemComponent {
  @Input() item: Item = {} as Item;
  @Output() deleteItemEvent = new EventEmitter<Item>();
  @Output() toggleItemEvent = new EventEmitter<Item>();

  onDelete(item: Item) {
    this.deleteItemEvent.emit(item);
  }

  onToggle(item: Item) {
    this.toggleItemEvent.emit(item);
  }
}