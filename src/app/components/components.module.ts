import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinComponent } from './progress-spin/progress-spin.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    ProgressSpinComponent,
    ToggleButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ],
  exports: [
    ProgressSpinComponent,
    ToggleButtonComponent
  ]
})
export class ComponentsModule { }
