export interface StatisticsInterface {
  country: string;
  cases: Cases;
  deaths: Deaths;
  day: string;
}

export interface Cases {
  active: number;
  recovered: number;
  total: number;
}
export interface Deaths {
  total: number;
}
