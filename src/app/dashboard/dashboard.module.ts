import { ChartComponent } from "./statistics/chart/chart.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "./shared/shared.module";
import { DashboardService } from "./services/dashboard.service";
import { ConfigService } from "./services/config-service/config.service";
import { RequestsInterceptor } from "./interceptor/requests.interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MapComponent } from "./map/map.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { GoogleChartsModule } from "angular-google-charts";
import { NgHttpLoaderModule } from "ng-http-loader";
import { AgmCoreModule } from "@agm/core";
import { CacheResolverService } from "./services/cache-service/cache.service";
@NgModule({
  declarations: [
    DashboardComponent,
    MapComponent,
    StatisticsComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    GoogleChartsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCjsTb9gkX08HyDUC913eIAYpcj4dQ9is8",
    }),
  ],
  providers: [
    ConfigService,
    CacheResolverService,
    DashboardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsInterceptor,
      multi: true,
    },
  ],
})
export class DashboardModule {}
