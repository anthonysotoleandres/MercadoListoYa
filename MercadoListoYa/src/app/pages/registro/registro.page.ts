import { Component } from '@angular/core';

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  registerWithEmail() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Registro exitoso
        const user = userCredential.user;
        console.log('Usuario registrado:', user);
        // Aquí puedes realizar acciones adicionales luego del registro exitoso, como redirigir a una página de bienvenida.
      })
      .catch((error) => {
        // Error en el registro
        console.error('Error en el registro:', error);
      });
  }

  registerWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Registro con Google exitoso
        const user = result.user;
        console.log('Usuario registrado con Google:', user);
        // Aquí puedes realizar acciones adicionales luego del registro exitoso, como redirigir a una página de bienvenida.
      })
      .catch((error) => {
        // Error en el registro con Google
        console.error('Error en el registro con Google:', error);
      });
  }
}
