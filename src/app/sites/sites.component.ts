import { Component, OnInit, enableProdMode, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SiteService } from '../site.service';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../sites';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule, DxButtonModule,DxDataGridComponent } from 'devextreme-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})

export class SitesComponent implements OnInit {

  sites: Site[];
  site : Site;
  
    constructor(private siteService: SiteService, private router: Router, private route: ActivatedRoute) {
    
    }

    rowSelectedHandler(event) : void {
      var selectedSite: Site = event.selectedRowsData[0];
      if(selectedSite)
        this.router.navigate(['/site-detail/'+selectedSite.siteId]);

    }
    deleteSite(site) {
      this.siteService.deleteSite(site);
      }
    

    delete(event) : void {
      var selectedSite: Site = event.selectedRowsData[0];
      this.deleteSite(selectedSite);
      console.log(event.data);
      
}
   /** addSite (site) {
      this.siteService.addSite(site);
   }*/
    create(event) : void {
      this.siteService.addSite(this.site)
      console.log(event.data);
    }
    update(event) : void {
      console.log(event.data);
    }

    /*getSite(site : Site) : void{
      const siteId = +this.route.snapshot.paramMap.get('siteId');
      this.siteService.getSite(site).subscribe(data => {
        this.site = data;
      });
    }**/
  /** onRowClick (e: Object) {
     
   }*/

    ngOnInit() {
      this.siteService.getAll()
      .subscribe(sites => this.sites = sites);    
    }
   
   
  
  }

