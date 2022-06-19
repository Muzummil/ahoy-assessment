import { Component, Input } from '@angular/core';
import { MarkersInterface } from '../models/map-markers.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  @Input() mapData: MarkersInterface[] = [];
  @Input() zoomValue: number = 4;

  // Initial center position of UAE
  lat: number = 23.4241;
  lng: number = 53.8478;

  constructor() {}
}
