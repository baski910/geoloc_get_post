import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, switchMap,forkJoin } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }


  getDataAndPost(): Observable<any> {
      return this.http.get('https://api.ipgeolocation.io/v2/ipgeo?apiKey=d1c484515e914aa78e83d236572a3e7c').pipe(
      switchMap(data =>{
        console.log(data)
        
        return this.http.post('http://localhost:5000/getLocations',data,httpOptions)
    })
  )
  }

}




