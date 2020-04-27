import { Component, Input, OnInit } from '@angular/core';
import { RepositoryItemFragment } from '../../types-generated';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.css'],
})
export class RepositoryItemComponent implements OnInit {
  @Input() item: RepositoryItemFragment;
  constructor() {}

  ngOnInit(): void {}
}
