import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card'; // Add missing import
import { MatInputModule } from '@angular/material/input'; // Add missing import
import { MatButtonModule } from '@angular/material/button'; // Add missing import
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIcon, 
    ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  error = "";
  errorTrigger = false;

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('hola')
    console.warn(this.profileForm.value);

    localStorage.setItem('loggedIn', 'true');
    console.warn(this.profileForm.value);

    location.reload(); // Reload the page
  }
  


}
