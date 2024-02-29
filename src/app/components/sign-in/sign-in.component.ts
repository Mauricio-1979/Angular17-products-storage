import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  toaster=inject(ToastrService);

  constructor() {
// private toastr: ToastrService
  }

  ngOnInit(): void {
      
  }

  addUser(){

    if(this.nombre == '' || this.email == '' || this.password == '' || this.confirmPassword == ''){
      
      this.toaster.error('todos los campos son obligatorios!', 'Error!', 
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        
      }
      );
      
    }

    if(this.password !== this.confirmPassword){
      this.toaster.error('Las passwords ingresadas no coinciden');
      return;
    }

    const user: User = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    }

    console.log(user)

  }



}
