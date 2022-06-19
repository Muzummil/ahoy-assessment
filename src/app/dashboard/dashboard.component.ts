import { ConfigService } from './services/config-service/config.service';
import { DashboardService } from './services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { StatisticsInterface } from './models/statistics.interface';
import { MarkersInterface } from './models/map-markers.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public countriesList: Array<string> = [];
  public selectedCountry: string | null = null;
  public statisticsObj: StatisticsInterface[] = [];

  public chartDataValues: Array<any> = [];
  public mapData: MarkersInterface[] = [];

  constructor(
    private dashboardService: DashboardService,
    public configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.getMapsData();
    this.getCountriesList();
    this.getStatistics();
  }

  getCountriesList(): void {
    this.dashboardService.getCountriesList().subscribe((res) => {
      this.countriesList = res.response.slice(0, 200);
    });
  }
  getMapsData(countryName: string | null = null): void {
    this.dashboardService.getMapCountriesList(countryName).subscribe((res) => {
      this.mapData = this.configService.parseDataToMapsData(res);
      console.log(this.mapData);
    });
  }
  getStatistics(countryName: null | string = null): void {
    this.dashboardService.getStatistics(countryName).subscribe((res) => {
      this.statisticsObj = this.configService.getStatisticObjFromCountries(
        res.response
      );
      this.chartDataValues = res.response;
    });
  }
  onCountrySelectionChange(selectedCountry: string | any): void {
    this.selectedCountry = selectedCountry;
    this.getStatistics(selectedCountry);
    this.getMapsData(selectedCountry);
  }
}
