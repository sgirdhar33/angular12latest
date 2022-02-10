import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
    DepartmentId:string | undefined;
    DepartmentName:string | undefined;

  ngOnInit(): void {
    console.log(this.dep);
    this.DepartmentId=this.dep.DEPARTMENTID;
    this.DepartmentName=this.dep.DEPARTMENTNAME;

  }

  addDepartment(){
    var val = {DepartmentId:this.DepartmentId,
              DepartmentName:this.DepartmentName};
              
    this.service.addDepartment(val).subscribe(res=>{
      this.service.refreshDep.emit(true);
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
              DepartmentName:this.DepartmentName};
this.service.updateDepartment(val).subscribe(res=>{
this.service.refreshDep.emit(true);
  alert(res.toString());
});
  }

}
