import {Injectable} from "@angular/core";
import {RxState} from "ngx-rx-state";
import {GetProductsGQL, ProductsFragment} from "../types-generated";
import {map} from "rxjs/operators";

@Injectable()
export class ProductsState extends RxState<{ products: ProductsFragment[] }> {
  readonly state$ = this.select();

  constructor(private getProductsGQL: GetProductsGQL) {
    super();
    this.connect('products', this.getProductsGQL.watch().valueChanges.pipe(map((result)=>result.data.products)))
  }
}
