import { Component, OnInit } from '@angular/core';
import { Sites } from './mock-Sites';
import { Site } from './site';

@Component({
  selector: 'app-my-sites',
  templateUrl: './my-sites.component.html',
  styleUrls: ['./my-sites.component.css']
})
export class MySitesComponent implements OnInit {
  sites = Sites;
  selectedSite: Site = this.sites[0];
  onSelect(site:Site){
    this.selectedSite = site;
  }
  constructor() { }

  ngOnInit() {
  }

}
