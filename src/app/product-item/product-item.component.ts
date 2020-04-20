import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProductItemFragment} from "../types-generated";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent{
  @Input() product: ProductItemFragment
  constructor() { }

}
