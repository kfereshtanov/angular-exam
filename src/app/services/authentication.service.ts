import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs';
import { User } from '../types/user';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: any;

  constructor(
    private auth: AngularFireAuth,
    private toast: HotToastService,
    private router: Router
  ) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  login(username: string, password: string) {
    const signIn = from(
      this.auth.signInWithEmailAndPassword(username, password)
    );
    return signIn
      .pipe(
        this.toast.observe({
          success: 'Logged in successfully',
          loading: 'Logging in...',
          error: 'There was an error',
        })
      )
      .subscribe({
        next: (response) => {
          this.setUserData(response.user);
          this.auth.authState.subscribe((user) => {
            if (user) {
              this.router.navigate(['profile']);
            }
          });
        },
        error: (error) => {
          window.alert(error.message);
        },
      });
  }

  logout() {
    const signOut = from(this.auth.signOut());

    return signOut.subscribe(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }

  register(name: string, email: string, password: string) {
    const register = from(
      this.auth.createUserWithEmailAndPassword(email, password)
    );

    register
      .pipe(
        this.toast.observe({
          success: 'User is created successfully',
          loading: 'Creating...',
          error: 'There was an error with account creation',
        })
      )
      .subscribe({
        next: (response) => {
          response.user?.updateProfile({
            displayName: name,
          });
          this.setUserData(response.user);
          this.router.navigate(['/']);
        },
        error: (error) => {
          window.alert(error.message);
        },
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  setUserData(user: any) {
    const userData: User = {
      id: user.uid,
      displayName: user.displayName,
      email: user.email,
      password: user.password,
    };

    return userData;
  }
}
