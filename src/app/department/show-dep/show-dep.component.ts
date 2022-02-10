import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
  
  public ModalTitle: string;

  constructor(private service:SharedService) { 
    this.ModalTitle="";
    service.refreshDep.subscribe((val:boolean)=>{
      this.refreshDepList();
    })
  }

  DepartmentList:any=[];

  
  ActivateAddEditDepCom: boolean=false;
  dep:any;


  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];
  //item:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

addClick(){
  this.dep={
    DepartmentId:0,
    DepartmentName:""
  }
  this.ModalTitle="Add Department";
  this.ActivateAddEditDepCom=true;
}

editClick(item: any){
  this.dep=item;
  this.ModalTitle="Edit Department";
  this.ActivateAddEditDepCom=true;
}

deleteClick(item: any){
  if(confirm('Are you sure??')){
    this.service.deleteDepartment(item.DEPARTMENTID).subscribe(data=>{
      alert(data.toString());
      this.refreshDepList();
    });
  }
}

closeClick(){
  this.ActivateAddEditDepCom=false;  
  //this.DepartmentList();
  this.refreshDepList();
}

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
      this.DepartmentListWithoutFilter=data;
    });
  }

  FilterFn(){
    var DepartmentIdFilter=this.DepartmentIdFilter;
    var DepartmentNameFilter=this.DepartmentNameFilter;

    this.DepartmentList = this.DepartmentListWithoutFilter.filter(function (el:any){
      return el.DEPARTMENTID.toString().toLowerCase().includes(
        DepartmentIdFilter.toString().trim().toLowerCase()
      )&&
      el.DEPARTMENTNAME.toString().toLowerCase().includes(
        DepartmentNameFilter.toString().trim().toLowerCase()
      )
    });
  }

  sortResult(prop:string, asc:boolean){
    this.DepartmentList=this.DepartmentListWithoutFilter.sort((a:any,b:any)=>{
      if(asc==true){
        return (a[prop]>b[prop]) ? 1 : ((a[prop]<b[prop]) ? 1:0);
      }
      else {
        return (b[prop]>a[prop]) ? 1 : ((b[prop]<a[prop]) ? 1:0);
      }
    })
  }

}
