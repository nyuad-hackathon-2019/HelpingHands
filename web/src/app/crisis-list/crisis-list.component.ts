import { Component, OnInit } from '@angular/core';
import { CrisisService } from '../services/crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public crisis_list: any;
  // tslint:disable-next-line:variable-name
  constructor(private crisis_service: CrisisService) { }
  fetchCrisisData() {
    this.crisis_service.getCrisis().subscribe(
      (data) => {
        this.crisis_list = data;
      },
    );
  }
  ngOnInit() {
    this.fetchCrisisData();
  }

}
