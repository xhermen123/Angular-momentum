import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentComponent } from './experiment/experiment.component';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../../app/material.module';

@NgModule({
  declarations: [
    ExperimentComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class PagesModule { }
