import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';
import {
  GetRepositoryGQL,
  GetStateGQL,
  SearchRepositoryViewFragment,
  State,
} from '../types-generated';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable()
export class SearchViewStateService extends RxState<{
  state: State;
  repo: SearchRepositoryViewFragment;
}> {
  constructor(
    private getRepositoryGQL: GetRepositoryGQL,
    private getStateGQL: GetStateGQL
  ) {
    super();
    this.connect(
      'state',
      this.getStateGQL
        .watch()
        .valueChanges.pipe(map((result) => result.data.state))
    );

    this.connect(
      'repo',
      this.select('state').pipe(
        filter((state) => !!state.repositoryName),
        switchMap(({ repositoryOwner, repositoryName }) =>
          this.getRepositoryGQL
            .watch({ name: repositoryName, owner: repositoryOwner })
            .valueChanges.pipe(map((result) => result.data.repository))
        )
      )
    );
  }
}
