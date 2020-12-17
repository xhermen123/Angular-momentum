import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-spin',
  templateUrl: './progress-spin.component.html',
  styleUrls: ['./progress-spin.component.scss']
})
export class ProgressSpinComponent implements OnInit {
  @Input() percent: number;

  constructor() { }

  ngOnInit() {
  }

}
