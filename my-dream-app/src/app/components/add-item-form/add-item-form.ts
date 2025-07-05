import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-add-item-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-item-form.html',
  styleUrls: ['./add-item-form.css']
})
export class AddItemFormComponent {
  name: string = '';
  price: number = 0;
  quantity: number = 0;
  @Output() addItemEvent = new EventEmitter<Item>();

  onSubmit() {
    const newItem: Item = {
      id: new Date().getTime(), 
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      completed: false
    };
    this.addItemEvent.emit(newItem);
    this.name = '';
    this.price = 0;
    this.quantity = 0;
  }
}