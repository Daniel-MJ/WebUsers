import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../apirestlet.service';
import { Insputssearch } from '../insputssearch';
import { CalendarOptions, EventInput  } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {

  constructor(private apiService: ApiService) {}

  title = "CALENDARIO"
  actividades: Insputssearch[] = [];
  

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
  };

  eventsPromise: Promise<EventInput[]> = this.buscarActividades();

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }


  buscarActividades(): Promise<EventInput[]> {
    return new Promise<EventInput[]>((resolve, reject) => {
      this.apiService.getActividades()
        .subscribe(
          (actividades: Insputssearch[]) => {
            const eventos: EventInput[] = actividades.map(actividad => ({
              title: actividad.titulo,
              start: actividad.fechaInicio.$date,
              end: actividad.fechaFinal.$date
            }));
            resolve(eventos);
          },
          (error: any) => {
            console.error('Error al obtener actividades:', error);
            reject(error);
          }
        );
    });
  }


}
