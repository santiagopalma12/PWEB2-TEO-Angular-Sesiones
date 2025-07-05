import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total.html',
  styleUrls: ['./total.css']
})
export class TotalComponent {
  @Input() total: number = 0;
}