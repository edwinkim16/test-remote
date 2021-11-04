import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: UserAuthService, private router: Router) {}

  message;
  ngOnInit(): void {}

  loginUser(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService.loginUser(username, password).subscribe(
      (response) => {
        console.log(response);
        // this.token = response;
        //   // console.log(this.token.token);
        //   // check if reponse token is undefined
        //   if (this.token.token === undefined) {
        //     this.displayAlert = true;
        //   } else {
        //     localStorage.setItem('token', this.token.token);
        //     this.displayAlert = false;
        //     // redirect to todos page
        //     this.router.navigateByUrl('/todos');
        //   }
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
