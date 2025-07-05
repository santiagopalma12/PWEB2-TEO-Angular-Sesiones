import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [
    { id: 0, name: 'ZAPATILLAS', price: 250, quantity: 3, completed: false },
    { id: 1, name: 'PANTALONES', price: 150, quantity: 4, completed: true },
    { id: 2, name: 'MANZANA', price: 10.50, quantity: 2, completed: true }
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.items.unshift(item); 
  }

  deleteItem(itemToDelete: Item) {
    this.items = this.items.filter(item => item.id !== itemToDelete.id);
  }

  toggleItem(itemToToggle: Item) {
    const item = this.items.find(item => item.id === itemToToggle.id);
    if (item) {
      item.completed = !item.completed;
    }
  }
}