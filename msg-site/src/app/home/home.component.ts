import { Component } from '@angular/core';
import { faFacebookF,faTwitter,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  facebook = faFacebookF
  twitter = faTwitter
  linkedin = faLinkedin
  instagram = faInstagram

  constructor(private window: Window){}

  more(link: string){
    this.window.open(link, "_blank")
  }
}
