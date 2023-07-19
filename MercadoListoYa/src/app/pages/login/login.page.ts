import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


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
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Inicio de sesión con Google exitoso
        // Aquí puedes acceder a la información del usuario logueado si lo necesitas
        // const user = result.user;
      })
      .catch((error) => {
        // Error en el inicio de sesión con Google
        console.error(error);
      });
  }
  
}
