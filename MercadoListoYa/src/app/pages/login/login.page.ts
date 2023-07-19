import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { auth } from 'firebase/compat/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';

  password: string = '';
  
  constructor(private afAuth: AngularFireAuth) { }

  loginWithEmail() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        // Inicio de sesión exitoso
      })
      .catch(error => {
        // Error en el inicio de sesión
        console.error(error);
      });
  }
  
  loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider)
      .then(() => {
        // Inicio de sesión con Google exitoso
      })
      .catch(error => {
        // Error en el inicio de sesión con Google
        console.error(error);
      });
  }
  
}
