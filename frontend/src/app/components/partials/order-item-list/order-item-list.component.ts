import { Component, Input } from '@angular/core';
import { Order } from '../../../shared/models/order.model';

@Component({
  selector: 'order-item-list',
  templateUrl: './order-item-list.component.html',
  styleUrl: './order-item-list.component.css'
})
export class OrderItemListComponent {
  @Input()
  order!: Order;
}
