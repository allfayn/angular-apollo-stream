import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { RepositoryViewFragment } from '../../types-generated';

@Component({
  selector: 'app-repository-view',
  templateUrl: './repository-view.component.html',
  styleUrls: ['./repository-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryViewComponent implements OnInit {
  @Input() repository: RepositoryViewFragment;
  constructor() {}

  ngOnInit(): void {}
}
