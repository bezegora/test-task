import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from 'src/app/services/marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;

  @Input()
  public coords!: {
    lon: number,
    lat: number
  };

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.coords.lat, this.coords.lon],
      zoom: 3
    });

    const tiles = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
      maxZoom: 18,
      minZoom: 1,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor(
    private _markerService: MarkerService
  ) { }

  ngAfterViewInit(): void {
    this.initMap();
    this._markerService.makeMarker(this.map, this.coords.lon, this.coords.lat);
  }
}
