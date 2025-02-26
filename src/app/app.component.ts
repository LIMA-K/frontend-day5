import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./units/navbar/navbar.component";
import { FooterComponent } from "./units/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
