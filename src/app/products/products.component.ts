import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {GetProductsGQL, ProductsFragment} from "../types-generated";
import {BehaviorSubject, Subscription} from "rxjs";
import {ProductsState} from "./products-state.service";
import {RxState} from "ngx-rx-state";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent extends RxState<{ products: ProductsFragment[], status: boolean }> {
  constructor(private getProductsGQL: GetProductsGQL) {
    super();
    this.setState({status: false})
    this.connect('products', this.getProductsGQL.watch().valueChanges.pipe(map((result)=>result.data.products)))
    this.setState({status: true})
  }
}
