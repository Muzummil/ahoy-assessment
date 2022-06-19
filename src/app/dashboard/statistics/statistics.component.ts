import { ConfigService } from "./../services/config-service/config.service";
import { StatisticsInterface } from "./../models/statistics.interface";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"],
})
export class StatisticsComponent implements OnInit {
  @Input() statisticsObj: StatisticsInterface[] = [];
  public chartDataValues: Array<any> = [];
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.chartDataValues = this.configService.parseStatsToChartData(
      this.statisticsObj
    );
  }
}
