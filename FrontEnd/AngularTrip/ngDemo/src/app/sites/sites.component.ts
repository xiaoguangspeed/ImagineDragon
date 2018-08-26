import { Component, OnInit } from '@angular/core';
import { Sites } from './mockSites';
@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  links = Sites;
  constructor() { }

  ngOnInit() {
  }

}
