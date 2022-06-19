import { Observable } from "rxjs";
import { ConfigService } from "./config-service/config.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  private apiBaseURL = this.configService.getApiBaseUrl();
  private mapDataApiBaseURL = this.configService.getMapDataApiBaseURL();
  constructor(
    private configService: ConfigService,
    private httpClient: HttpClient
  ) {}

  getCountriesList(): Observable<any> {
    return this.httpClient.get(this.apiBaseURL + "countries");
  }
  getMapCountriesList(countryName: string | null = null): Observable<any> {
    return this.httpClient.get(
      this.mapDataApiBaseURL + "countries/" + (countryName ?? "")
    );
  }
  getStatistics(countryName: null | string = null): Observable<any> {
    let countryParams: any;
    let apiURL: string = "statistics";
    if (countryName) {
      let obj = { country: "" };
      obj.country = countryName;
      countryParams = obj;
      apiURL = "history";
    }
    return this.httpClient.get(this.apiBaseURL + apiURL, {
      params: countryParams,
    });
  }
}
