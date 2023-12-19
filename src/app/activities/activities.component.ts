import { Component, Input } from '@angular/core';
import { Insputssearch } from '../insputssearch'; 

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActividadComponent {
  @Input() actividad!: Insputssearch;

}
