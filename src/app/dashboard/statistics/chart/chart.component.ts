import { Component, Input } from '@angular/core';
import { ConfigService } from '../../services/config-service/config.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  @Input() selectedCountry: string | null = null;
  @Input() chartDataValues: Array<any> = [];
  public defaultDataValue: Array<any> = [];
  public lineChartData: Array<any> = [];
  public chart = {
    PieChart: 'PieChart',
    ColumnChart: 'ColumnChart',
    Histogram: 'Histogram',
    LineChart: 'LineChart',
    options: {
      animation: {
        duration: 1000,
        easing: 'out',
      },
      is3D: true,
    },
  };
  constructor(public configService: ConfigService) {}

  ngOnChanges(): void {
    this.defaultDataValue = this.configService.parseStatsToChartData(
      this.chartDataValues
    );
    this.lineChartData = this.configService.parseLineChartData(
      this.chartDataValues
    );
  }
}
