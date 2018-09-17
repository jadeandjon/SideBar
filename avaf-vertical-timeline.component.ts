import { Component, OnInit, Input } from '@angular/core';

import { DealInfo } from '../models/deal-info';
import { DealActivitiesGroup } from '../models/deal-activities-group';

@Component({
  selector: 'avaf-vertical-timeline',
  templateUrl: './avaf-vertical-timeline.component.html',
  styleUrls: ['./avaf-vertical-timeline.component.scss']
})
export class AvafVerticalTimelineComponent implements OnInit {

  private _dealInfo: DealInfo;
  @Input() set dealInfo(value: DealInfo) {
    console.log('set dealInfo', value);
    this._dealInfo = value;
  }
  get dealInfo(): DealInfo {
    return this._dealInfo;
  }

  constructor() { }

  ngOnInit() {
  }
}
