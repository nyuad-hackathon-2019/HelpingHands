import { Component, OnInit } from '@angular/core';
import { CrisisService } from './services/crisis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(private crisis_service: CrisisService) {}
  title = 'web';
  ngOnInit(): void {
    const crisis = {
      charityId: 'lalala',
      itemsIds: ['lalala'],
      personalSkillsIds: ['lalala'],
      location: {
        country: 'some unfortunate country :p',
        city: 'a city in that unfortunate country :p'
      },
      date: Date.now(),
      title: 'a very bad flood',
      causalities: [
        {
          affected_people: 234,
          injured_people: 100,
          dead_people: 10,
          lost_homes: 237,
        },
      ]
    };
    this.crisis_service.createCrisis(crisis).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
