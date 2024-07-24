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
      this.nameError="This field is required."
      this.usernameError="This field is required."
      this.pwdError="This field is required."
      this.conpwdError="This field is required."
      this.phoneError="This field is required."
      this.genderError="This field is required."
      return
    }
    if(this.name===""){
      this.nameError="This field is required."
      return
    }
    if(this.conpwd===""){
      this.conpwdError="This field is required."
      return
    }
    if(this.phone===""){
      this.phoneError="This field is required."
      return
    }
    if(this.password===""){
      this.pwdError="This field is required."
      return
    }
    if(this.gender===""){
      this.genderError="This field is required."
      return
    }
    if(this.username===""){
      this.usernameError="This field is required.."
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

