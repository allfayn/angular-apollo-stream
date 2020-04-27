import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SearchViewStateService } from './search-view-state.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SearchViewStateService],
})
export class SearchViewComponent implements OnInit {
  constructor(public state: SearchViewStateService) {}

  ngOnInit(): void {}
}
