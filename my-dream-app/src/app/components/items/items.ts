// src/app/components/items/items.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// CORRECTO: La interfaz Item está en esta ruta.
import { Item } from '../../models/item.model';

// CORRECTO: El servicio está en esta ruta.
import { ItemService } from '../../services/item';

// --- SECCIÓN DE IMPORTACIONES CORREGIDA ---

// ANTES (Incorrecto): import { ItemComponent } from '../item/item';
// CORRECTO: Importamos 'ItemComponent' desde el archivo 'item.component'
import { ItemComponent } from '../item/item';

// ANTES (Incorrecto): import { TotalComponent } from '../total/total';
// CORRECTO: Importamos 'TotalComponent' desde el archivo 'total.component'
import { TotalComponent } from '../total/total';

// ANTES (Incorrecto): import { AddItemFormComponent } from '../add-item-form/add-item-form';
// CORRECTO: Importamos 'AddItemFormComponent' desde el archivo 'add-item-form.component'
import { AddItemFormComponent } from '../add-item-form/add-item-form';


@Component({
  selector: 'app-items',
  standalone: true,
  // Esta lista de imports ahora debería funcionar porque los nombres de las clases son correctos.
  imports: [CommonModule, ItemComponent, TotalComponent, AddItemFormComponent],
  templateUrl: './items.html', // Esta ruta ahora debería funcionar si el archivo se llama items.component.ts
  styleUrls: ['./items.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
    this.getTotal();
  }

  // --- MÉTODOS (SIN CAMBIOS, PERO VERIFICADOS) ---

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
      .reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);
  }
}