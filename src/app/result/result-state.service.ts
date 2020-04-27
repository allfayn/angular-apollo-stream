import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';
import {
  SearchGQL,
  SearchResultFragment,
  SearchResultRepositoryFragment,
  SearchType,
  SetStateGQL,
} from '../types-generated';
import { map } from 'rxjs/operators';

@Injectable()
export class ResultStateService extends RxState<{
  list: SearchResultFragment[];
}> {
  constructor(private searchGQL: SearchGQL, private setStateGQL: SetStateGQL) {
    super();
    this.connect(
      'list',
      this.searchGQL
        .watch({ search: 'Apollo', first: 5, type: SearchType.Repository })
        .valueChanges.pipe(map((result) => result.data.search.nodes))
    );
  }

  setRepository(item: SearchResultRepositoryFragment) {
    this.setStateGQL
      .mutate({
        input: { repositoryName: item.name, repositoryOwner: item.owner.login },
      })
      .subscribe();
  }
}
