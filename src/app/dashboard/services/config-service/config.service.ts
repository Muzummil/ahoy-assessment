import {
  StatisticsInterface,
  Deaths,
} from "./../../models/statistics.interface";
import { Injectable } from "@angular/core";
import { MarkersInterface } from "../../models/map-markers.interface";
@Injectable({
  providedIn: "root",
})
export class ConfigService {
  constructor() {}

  public getApiBaseUrl(): string {
    return "https://covid-193.p.rapidapi.com/";
  }

  public getMapDataApiBaseURL(): string {
    return "https://disease.sh/v3/covid-19/";
  }

  private getMonthName = (date: string): string => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date(date);
    return monthNames[d.getMonth()];
  };

  public parseStatsToChartData(statsArr: StatisticsInterface[]): Array<any> {
    let retData: Array<any> = [];
    let uniqueCountriesData = [...new Set(statsArr)];
    uniqueCountriesData.forEach((data) => {
      retData.push([data.country, data.cases.total]);
    });
    return retData;
  }

  public parseDataToMapsData(apiResponse: any): MarkersInterface[] {
    if (apiResponse.length) {
      return apiResponse.map((val: any) => {
        return {
          lat: val.countryInfo.lat,
          lng: val.countryInfo.long,
          label: val.country,
          cases: val.cases,
          deaths: val.deaths,
        };
      });
    } else {
      return [
        {
          lat: apiResponse.countryInfo.lat,
          lng: apiResponse.countryInfo.long,
          label: apiResponse.country,
          cases: apiResponse.cases,
          deaths: apiResponse.deaths,
        },
      ];
    }
  }

  public parseLineChartData(statsArr: StatisticsInterface[]): Array<any> {
    let retData: Array<any> = [];
    let uniqueCountriesData = [...new Set(statsArr)];
    uniqueCountriesData.forEach((data) => {
      retData.push([
        this.getMonthName(data.day),
        data.cases.total,
        data.cases.active,
        data.cases.recovered,
        data.deaths.total,
      ]);
    });
    return retData;
  }

  public getStatisticObjFromCountries(
    countryName: string | null,
    countriesArr: Array<StatisticsInterface>
  ): StatisticsInterface[] {
    let retObj: StatisticsInterface = {
      country: "",
      day: "",
      deaths: { total: 0 },
      cases: { total: 0, active: 0, recovered: 0 },
    };
    if (countryName) {
      retObj.cases = countriesArr[0].cases;
      retObj.deaths = countriesArr[0].deaths;
      retObj.country = countriesArr[0].country;
    } else {
      for (let i = 0; i < countriesArr.length; i++) {
        retObj.cases.active =
          (retObj.cases.active || 0) + countriesArr[i].cases.active;
        retObj.cases.recovered =
          (retObj.cases.recovered || 0) + countriesArr[i].cases.recovered;
        retObj.cases.total =
          (retObj.cases.total || 0) + countriesArr[i].cases.total;
        retObj.deaths.total =
          (retObj.deaths.total || 0) + countriesArr[i].deaths.total;
      }
    }
    return [retObj];
  }
}
