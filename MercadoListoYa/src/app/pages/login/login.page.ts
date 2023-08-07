import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';

  password: string = '';  
  
  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController) { }

  loginWithEmail() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        // Inicio de sesión exitoso
        this.navCtrl.navigateForward('/dashboard');
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
        this.navCtrl.navigateForward('/dashboard');
      })
      .catch((error) => {
        // Error en el inicio de sesión con Google
        console.error(error);
      });
  }

    // Función para manejar el evento de registro
    register() {
      // Aquí puedes agregar la lógica para redirigir al usuario a la página de registro
      // Por ejemplo, puedes utilizar el NavController para navegar a otra página de tu aplicación
      this.navCtrl.navigateForward('/registro'); // Reemplaza '/registro' con la ruta de tu página de registro
    }
  
}
