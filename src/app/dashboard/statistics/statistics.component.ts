import { ConfigService } from './../services/config-service/config.service';
import { StatisticsInterface } from './../models/statistics.interface';
import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  @Input() statisticsObj: StatisticsInterface[] = [];
  public chartDataValues: Array<any> = [];
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('changes', changes);
    console.log('value', this.statisticsObj);
    this.chartDataValues = this.configService.parseStatsToChartData(
      this.statisticsObj
    );
  }
}
