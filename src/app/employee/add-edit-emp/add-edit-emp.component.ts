import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeeId:string | undefined;
  EmployeeName:string | undefined;
  Department:string|undefined;
  DateOfJoining:string|undefined;
  PhotoFileName:string|undefined;
  PhotoFilePath:string|undefined;

  DepartmentsList:any[]=[];

  ngOnInit(): void {
    console.log(this.emp);
   this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      
      data.forEach((element:any) => {
        this.DepartmentsList.push(element)    
      });
      console.log(this.DepartmentsList);
      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeName=this.emp.EmployeeName;
      this.Department=this.emp.Department;
      this.DateOfJoining=this.emp.DateOfJoining;
      this.PhotoFileName=this.emp.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+"/"+this.PhotoFileName;

    })
  }

  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
              EmployeeName:this.EmployeeName,
              Department:this.Department,
              DateOfJoining:this.DateOfJoining,
              PhotoFileName:this.PhotoFileName
              };
      this.service.addEmployee(val).subscribe(res=>{
      this.service.refreshEmp.emit(true);
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
              EmployeeName:this.EmployeeName,
              Department:this.Department,
              DateOfJoining:this.DateOfJoining,
              PhotoFileName:this.PhotoFileName
    };
      this.service.updateEmployee(val).subscribe(res=>{
      this.service.refreshEmp.emit(true);
      alert(res.toString());
  });
  }

  uploadPhoto(event:any){
    var file=event.target.files(0);
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file, file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }

}
