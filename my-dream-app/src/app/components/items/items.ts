import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item';

import { Item } from '../item/item';
import { Total } from '../total/total';
import { AddItemForm } from '../add-item-form/add-item-form';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, Item, Total, AddItemForm],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
    this.getTotal();
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item);
    this.items = this.itemService.getItems(); 
    this.getTotal();
  }

  toggleItem(item: Item) {
    this.itemService.toggleItem(item);
    this.getTotal();
  }

  addItem(item: Item) {
    this.itemService.addItem(item);
    this.items = this.itemService.getItems(); 
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
      .filter(item => !item.completed)
      .map(item => item.quantity * item.price)
      .reduce((acc, item) => acc += item, 0);
  }
}