import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {gql} from "@apollo/client/core";
import {BehaviorSubject} from "rxjs";
import {Apollo} from "apollo-angular";

const QUERY = gql`
  query GetAll {
    tags {
      id
    }
    products {
      id
      name
      description
      image
      price
      tags {
        name
      }
    }
}`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'angular-graphql';
  tags$ = new BehaviorSubject<any>([])
  constructor(private apollo: Apollo) {

  }
  ngOnInit(): void {
    this.apollo.watchQuery({query: QUERY}).valueChanges.subscribe((result) => {
      this.tags$.next(result.data)
    })
  }
}
