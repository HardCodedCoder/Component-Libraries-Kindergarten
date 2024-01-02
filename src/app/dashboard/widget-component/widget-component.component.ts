import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-widget-component',
  templateUrl: './widget-component.component.html',
  styleUrls: ['./widget-component.component.scss']
})
export class WidgetComponentComponent {
  @Input() enrolledChildren: number = 0;
  @Input() totalCapacity: number = 0;
  @Input() kindergardenName: string = "";
  get fillPercentage(): number {
    return (this.enrolledChildren / this.totalCapacity) * 100;
  }

  getSpinnerColor(percentage: number): string {
    if (percentage > 75) {
      return '#ff5722'; // red color for 75%+ full
    } else if (percentage > 50) {
      return '#ffc107'; // amber color for 50%-75% full
    } else {
      return '#4caf50'; // green color for less than 50% full
    }
  }

}
