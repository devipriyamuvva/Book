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
    var hasErrors=false;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(this.name===""){
      this.nameError="This field is required."
      hasErrors=true
    }
    if(this.conpwd===""){
      this.conpwdError="This field is required."
      hasErrors=true
    }
    if(this.phone===""){
      this.phoneError="This field is required."
      hasErrors=true
    }
    if(this.password===""){
      this.pwdError="<p>This field is required.</p>"
      hasErrors=true
    }
    if(this.gender===""){
      this.genderError="This field is required."
      hasErrors=true
    }
    if(this.username===""){
      this.usernameError="This field is required."
      hasErrors=true
    }

    if(hasErrors){
      return
    }
    
    var hasError=false;

    if(this.password!==this.conpwd){
      this.conpwdError="Passwords donot match"
      hasError=true
    }

    if(this.phone.length!=10){
      this.phoneError="Invalid Phone Number"
      hasError=true
    }

    if(!pwdRegex.test(this.password)){
      this.pwdError="Password must contain at least 1 digit,<br> 1 lowercase letter,1 uppercase letter,<br>1 special character <br> length must be 8 characters"
      hasError=true
    }

    if(!emailRegex.test(this.username)){
      this.usernameError="Invalid Email Address"
      hasError=true
    }

    const details=localStorage.getItem("Details");
    if(details){
      this.userinfo=JSON.parse(details);
      for(var i=0;i<this.userinfo.length;i++){
        if(this.userinfo[i].username===this.username){
          this.usernameError="Email Address already exists"
          hasError=true
          break;
        }
      }
    }

    if(hasError){
      return
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
    this.reset();
  }

  reset(){
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

