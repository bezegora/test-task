import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private _http: HttpClient) { }

  makeMarker(map: L.Map, lon: number, lat: number) {
    L.marker([lat, lon]).addTo(map);
  }
}
