import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  @Input() checked: boolean;
  @Input() width: number;
  @Input() name: string;
  @Output() toggle = new EventEmitter<boolean>();

  myStyle: object;

  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'width': this.width + 'px'
    }
  }

  toggleButton() {
    this.checked = !!!this.checked;
    this.toggle.emit(this.checked);
  }
}
