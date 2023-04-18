import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Answer } from '../../types/Employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getDataRows(apiURL:string): Observable <Answer>
  {
    return this.http.get<Answer>(apiURL)
    .pipe
    (
      retry(2)
    )
  }
  remove(index:number){
    return this.http.delete("http://localhost:8080/employees/" +index);
  }
}
