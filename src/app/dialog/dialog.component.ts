import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators}from '@angular/forms'
import { ApiService } from '../services/api.service';
import { MatDialogRef ,MAT_DIALOG_DATA} from "@angular/material/dialog";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  residenciaForm !:FormGroup;
  actionButton:string="SAVE";

  constructor(private formBuilder:FormBuilder,
  private api:ApiService,
  @Inject(MAT_DIALOG_DATA)public editData:any,
  private dialogRef:MatDialogRef<DialogComponent> ) {
  }



  ngOnInit(): void {
    this.residenciaForm=this.formBuilder.group({
      numeroFacultad:['',Validators.required],
      numeroEdificio:['',Validators.required],
      cantApto:['',Validators.required],
      nombreJefe:['',Validators.required]
    });
    if (this.editData) {
      this.actionButton="UPDATE";
      this.residenciaForm.controls['numeroFacultad'].setValue(this.editData.numeroFacultad);
      this.residenciaForm.controls['numeroEdificio'].setValue(this.editData.numeroEdificio);
      this.residenciaForm.controls['cantApto'].setValue(this.editData.cantApto);
      this.residenciaForm.controls['nombreJefe'].setValue(this.editData.nombreJefe);
    }

  }





  addResidencia(){
    if (!this.editData) {
      if(this.residenciaForm.valid){
      this.api.postResidencia(this.residenciaForm.value)
      .subscribe({
        next:(res)=>{
          this.residenciaForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the Residencia")
        }
      })
    }
    } else{
    this.updateResidencia();
    }
  }


  updateResidencia(){
    this.api.putResidencia(this.residenciaForm.value,this.editData.id).subscribe({
      next:(res)=>{
          Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Residencia actualizada !!',
  showConfirmButton: false,
  timer: 1000
})
        this.residenciaForm.reset();
        this.dialogRef.close('update');
      },error:(e)=>{
        Swal.fire({
  position: 'top-end',
  icon: 'error',
  title: 'error al actualizar la residencia',
  showConfirmButton: false,
  timer: 1000});
      }
    })
  }



}

