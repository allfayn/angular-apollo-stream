import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { gql } from '@apollo/client/core';
import { BehaviorSubject } from 'rxjs';
import { Apollo } from 'apollo-angular';

const QUERY = gql`
  query GetAll($search: String!, $first: Int!) {
    search(query: $search, type: REPOSITORY, first: $first) {
      nodes {
        ... on Repository {
          nameWithOwner
          homepageUrl
        }
      }
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'angular-graphql';
  result$ = new BehaviorSubject<any>([]);
  constructor(private apollo: Apollo) {}
  ngOnInit(): void {
    this.apollo
      .watchQuery({ query: QUERY, variables: { search: 'Apollo', first: 10 } })
      .valueChanges.subscribe((result) => {
        this.result$.next(result.data);
      });
  }
}
