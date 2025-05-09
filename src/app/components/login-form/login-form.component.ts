import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  loginError: string | null = null; // Para mostrar errores de autenticación

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;

    if (this.authService.login(username, password)) {
      // Redirigir o realizar alguna acción en caso de éxito
      console.log('Inicio de sesión exitoso');
      //this.loginError = null;
      this.loginError = 'Credenciales OK';
    } else {
      // Mostrar un mensaje de error en caso de credenciales inválidas
      this.loginError = 'Credenciales inválidas. Inténtalo de nuevo.';
    }
  }
}