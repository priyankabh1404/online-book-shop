import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CrudServiceService {
  RESI_API :string = "/api";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
  }


//get books
getBooks(){
  let apiUrl = `${this.RESI_API}/getAllBooks`
  return this.httpClient.get(apiUrl);
}

}
