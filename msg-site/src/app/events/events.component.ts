import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  data: any;
  events: any;
  private route: string = "events"


  constructor(private dataService: DataService, private window: Window) {}
  ngOnInit(): void {
    this.getData()
  }

  formatDate(date: any) {
    let day = date.split(" ")[1].substring(0, 2).split(",")[0];
    const month = date.substring(0, 3);
    if(day[day.length - 1] === "1") {
        day += "st";
    } else if(day[day.length - 1] === "2") {
        day += "nd";
    } else if(day[day.length - 1] === "3") {
        day += "rd";
    } else {
        day += "th"
    }
    
    return [day, month];
  }

  getData() {
    this.dataService.getData(this.route).subscribe(res => {
      this.data = res
      
      this.events = this.data.body.map((item: any) => {
          const [day, month] = this.formatDate(item.date)

          return {
            ...item,
            day: day,
            month: month,
            goToLink: () => this.window.open(item.link, "_blank")
          }
      }).reverse()
    })
  }

}
