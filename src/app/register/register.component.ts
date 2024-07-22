import { CommonModule } from '@angular/common';
import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  google="google.png"
  facebook="facebook.jpg"
  
  username="";
  password="";
  name="";
  phone="";
  conpwd="";
  address="";
  gender="";
  userinfo:any[]=[];

  onSubmit(){
    const details=localStorage.getItem("Details");
    if(details){
      this.userinfo=JSON.parse(details);
    }
    const profile={
      username:this.username,
      password:this.password,
      name:this.name,
      phone:this.phone,
      address:this.address,
      gender:this.gender
    };
    this.userinfo.push(profile);
    localStorage.setItem("Details",JSON.stringify(this.userinfo));
    window.alert("Registration Successful !!")
    this.username="";
    this.password="";
    this.name="";
    this.phone="";
    this.conpwd="";
    this.address="";
    this.gender="";
  }
  @Output()
  buttonClicked:EventEmitter<string>=new EventEmitter<string>();

  onClick(){
    this.buttonClicked.emit("Login")
  }
}
