import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteService } from '../site.service';
import { Site } from '../sites';
import { DxDataGridModule, DxButtonModule,DxDataGridComponent,DxFormModule } from 'devextreme-angular';
import {DeuxG} from '../deuxG';
import {TroisG} from '../troisG';
import {QuatreG} from '../QuatreG';
import {DeuxGNeufCent} from '../deuxGNeufCent'

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent implements OnInit {


  site:Site = new Site();
  
  constructor(private route: ActivatedRoute, private siteService: SiteService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('siteId');
    this.siteService.getSite(id).subscribe( site => this.site=site);  
    //console.log(this.site.troisGCell[0].cellId);
        
  }

}