import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SitesComponent } from './sites/sites.component';
import { Site } from './sites'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class SiteService {

  constructor(private http: HttpClient, ) { }
  public getAll(): Observable<Site[]> {
    return this.http.get<Site[]>('//localhost:8080/sites/sites');
    //return this.http.get();
  }
  
 public deleteSite(site: Site): Observable<Site> {

   const siteId = typeof site == 'number' ? site : site.siteId;
    return this.http.delete<Site>('//localhost:8080/sites/sites'+siteId);
  }
  updateSite (site: Site): Observable<any> {
    return this.http.put('//localhost:8080/sites/sites', site, httpOptions);
}
/**  getSite (site: Site): Observable<Site>  {
    const siteId = typeof site == 'string' ? site : site.siteId;
      return this.http.get<Site>('//localhost:8080/sites/sites/' + siteId);
    }*/
    getSite (siteId): Observable<Site>  {
      return this.http.get<Site>('//localhost:8080/sites/sites/'+ siteId);
        //return this.http.get<Site>('//localhost:8080/sites/sites/' + siteId);
    }
  addSite (site: Site): Observable<Site> {
      return this.http.post<Site>('//localhost:8080/sites/sites/', site, httpOptions)
}


}

