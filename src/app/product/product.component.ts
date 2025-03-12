import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
   productdata:any[]=[];
  constructor (private matdialog:MatDialog){

  }

  Add(){
    const MatDialogRef=this.matdialog.open(addproduct,{disableClose:true})
    MatDialogRef.afterClosed().subscribe((res:any)=>{
      this.productdata.push(res)
      

    })

  }

  

}

@Component({
  selector: 'addproduct',
  templateUrl: 'addproduct.html',
  styleUrls: ['./product.component.css']
})
export class addproduct {
 
   productform=this.formbuilder.group({
    product_name:['',Validators.required],
    product_code:['',Validators.required],
    price:['',Validators.required]
   })

  constructor(private formbuilder:FormBuilder,public dialogRef: MatDialogRef<ProductComponent>){

  }

  Save(){
    console.log(this.productform.value)
    this.dialogRef.close({...this.productform.value})
  }


}

