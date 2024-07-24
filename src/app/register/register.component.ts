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

  nameError=""
  usernameError=""
  pwdError=""
  conpwdError=""
  phoneError=""
  genderError=""

  @Output()
  buttonClicked:EventEmitter<string>=new EventEmitter<string>();

  onSubmit(){
    if(this.username==="" && this.password==="" && this.name==="" && this.phone==="" && this.conpwd==="" && this.genderError===""){
      this.nameError="Name cannot be empty"
      this.usernameError="Email address cannot be empty"
      this.pwdError="Password cannot be empty"
      this.conpwdError="Password cannot be empty"
      this.phoneError="Phone number cannot be empty"
      this.genderError="Gender cannot be empty"
      return
    }
    if(this.name===""){
      this.nameError="Name cannot be empty"
      return
    }
    if(this.conpwd===""){
      this.conpwdError="Password cannot be empty"
      return
    }
    if(this.phone===""){
      this.phoneError="Phone number cannot be empty"
      return
    }
    if(this.password===""){
      this.pwdError="Password cannot be empty"
      return
    }
    if(this.genderError===""){
      this.genderError="Gender cannot be empty"
      return
    }
    if(this.username===""){
      this.usernameError="Username cannot be empty"
      return
    }
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
    this.buttonClicked.emit("Login")
    window.alert("Registration Successful !!")
    this.username="";
    this.password="";
    this.name="";
    this.phone="";
    this.conpwd="";
    this.address="";
    this.gender="";
  }

  clearNameError(){
    this.nameError=""
  }
  clearUsernameError(){
    this.usernameError=""
  }
  clearPwdError(){
    this.pwdError=""
  }
  clearConPwdError(){
    this.conpwdError=""
  }
  clearPhoneError(){
    this.phoneError=""
  }
  clearGenderError(){
    this.genderError=""
  }
}

