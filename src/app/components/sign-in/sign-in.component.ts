import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import {NgIf} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, FormsModule, SpinnerComponent, NgIf],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  template: `<div *ngIf="visible">Hi</div>`,
})
export class SignInComponent implements OnInit {
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  toaster=inject(ToastrService);

  constructor(private toastr: ToastrService, private _userService: UserService, private router: Router,
    private _errorService: ErrorService) {

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
      this.toaster.error('Las passwords ingresadas no coinciden', 'Error',
      {
        timeOut: 1000,
        positionClass: 'toast-bottom-right',
      
      });
      return;
    }

    const user: User = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    }

    this.loading = true;

    this._userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toaster.success(`El usuario ${this.nombre} fue registrado con exito`, "Usuario registrado")
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      },
      complete: () => console.info('complete') 
    })
  }

  
}
