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
      this.nameError="Value cannot be empty"
      this.usernameError="Value cannot be empty"
      this.pwdError="Value cannot be empty"
      this.conpwdError="Value cannot be empty"
      this.phoneError="Value cannot be empty"
      this.genderError="Value cannot be empty"
      return
    }
    if(this.name===""){
      this.nameError="Value cannot be empty"
      return
    }
    if(this.conpwd===""){
      this.conpwdError="Value cannot be empty"
      return
    }
    if(this.phone===""){
      this.phoneError="Value cannot be empty"
      return
    }
    if(this.password===""){
      this.pwdError="Value cannot be empty"
      return
    }
    if(this.gender===""){
      this.genderError="Value cannot be empty"
      return
    }
    if(this.username===""){
      this.usernameError="Value cannot be empty"
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

