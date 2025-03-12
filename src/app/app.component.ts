import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // string
  // number
  // boolean
  // array
  // object


  // title:string = 'Nila';
  // age:number=1323;
  // condition:boolean=false;
  // name:any="Kesavan";
  // email:any="kesavan8672@gmail.com";

  // userform = this.formbuilder.group({name:'',email:''})


form=this.formbuilder.group({name:['',[Validators.required]],age:['',[Validators.required]],gender:['',Validators.required]})
record:any[]=[]

  constructor(private formbuilder:FormBuilder){
    // this.userform.controls.name.setValue(this.name)
    // this.userform.controls.email.setValue(this.email)
    
    // console.log( String(this.condition))
  }

  //  onsubmit(){

  //   console.log(this.userform.value)
  //   this.email = this.userform.value.email
  //   this.name =this.userform.value.name
  //   // console.log("working")

  //   // const name = (document.getElementById('name') as HTMLInputElement)?.value;
  //   // const email = (document.getElementById('email') as HTMLInputElement)?.value;
  //   // console.log(name, email);
    

  // }


  submit(){
    
    this.record.push(this.form.value)
    this.form.reset()
    

  }

  



  
}
