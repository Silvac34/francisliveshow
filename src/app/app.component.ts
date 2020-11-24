import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Non.';
  constructor() {
    const now = new Date();
    const liveHour = this.setDateMonday(22, 0);
    const liveHour2 = this.setDateMonday(20, 0);
    // si now entre 22h et 22h30
    console.log(+now - +liveHour2 );
    if ((+now - +liveHour > (1000 * 60)) && (+now - +liveHour < (30 * 1000 * 60))) {
      this.title = 'c\'est maintenant';
    }
    // si now entre 20h et 22h
    else if ((+now - +liveHour2 > (1000 * 60 )) && (+now - +liveHour2 < (120 * 1000 * 60))) {
      this.title = 'Presque.';
    }
  }

  setDateMonday(hour, min) {
    const d = new Date();
    d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);
    d.setHours(hour);
    d.setMinutes(min);
    return d;
  }
}


