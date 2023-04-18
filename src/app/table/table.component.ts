import { Component} from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string [] = ['id', 'birthDate', 'firstName', 'lastName', 'gender', 'hireDate', 'remove'];
  Current :any;

  constructor(private restClient: EmployeeService)
  {
    this.loadData("http://localhost:8080/employees");
  }

  data: any;
  
  loadData(url:string):void
  {
    this.restClient.getDataRows(url).subscribe
    (
      web_data => {this.data = web_data;
      this.Current=url}
      
    )
    
  }
  nextPage(){
    if(this.data) this.loadData(this.data._links.next.href)
  }
  firstPage(){
    if(this.data) this.loadData(this.data._links.first.href)
  }
  prevPage(){
    if(this.data) this.loadData(this.data._links.prev.href)

  }
  lastPage(){
    if(this.data) this.loadData(this.data._links.last.href)
  }
  removeRow(index : number){
    this.restClient.remove(index).subscribe(()=>{
      this.loadData(this.Current);
    }); 
  }
  
}




  