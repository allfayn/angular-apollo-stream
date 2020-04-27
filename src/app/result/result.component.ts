import { Component, OnInit } from '@angular/core';
import { ResultStateService } from './result-state.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ResultStateService],
})
export class ResultComponent {
  constructor(public state: ResultStateService) {}
}
