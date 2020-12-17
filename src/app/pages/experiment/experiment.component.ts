import { Component, OnInit } from '@angular/core';
import { ProgressSpinComponent } from '../../components/progress-spin/progress-spin.component';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {

  gini: boolean = true;
  mcc: boolean = false;
  fos: boolean = true;
  f1: boolean = true;
  f2: boolean = true;
  accuracy: boolean = false;
  logloss: boolean = false;
  auc: boolean = false;
  aucpr: boolean = false;
  classification: boolean = false;
  reproducible: boolean = false;
  enablegpu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  giniToggle(checked: boolean) {
    this.gini = checked;
  }

  mccToggle(checked: boolean) {
    this.mcc = checked;
  }

  fosToggle(checked: boolean) {
    this.fos = checked;
  }

  f1Toggle(checked: boolean) {
    this.f1 = checked;
  }

  f2Toggle(checked: boolean) {
    this.f2 = checked;
  }

  accuracyToggle(checked: boolean) {
    this.accuracy = checked;
  }

  loglossToggle(checked: boolean) {
    this.logloss = checked;
  }

  aucToggle(checked: boolean) {
    this.auc = checked;
  }
  
  aucprToggle(checked: boolean) {
    this.aucpr = checked;
  }

  classificationToggle(check: boolean) {
    this.classification = check;
  }

  reproducibleToggle(check: boolean) {
    this.reproducible = check;
  }
  
  enablegpuToggle(check: boolean) {
    this.enablegpu = check;
  }
}
