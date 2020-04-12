import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { fader } from './animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent implements OnInit {

  title = 'Mivaan Pharmatech';

  public currentYear = new Date().getFullYear();
  public companyName = 'Mivaan Pharmatech Pvt. Ltd.';
  constructor(private router: Router) {

  }

  ngOnInit() {

    $(document).ready(() => {

      let prevScrollpos = window.pageYOffset;

      window.onscroll = () => {

        if (window.pageYOffset > 100) {

          scrollFunction(); // For showing go to top button

          const currentScrollPos = window.pageYOffset;

          if (prevScrollpos > currentScrollPos) {
            document.getElementById('navbar').style.top = '0';
          } else {
            document.getElementById('navbar').style.top = '-110px';
          }
          prevScrollpos = currentScrollPos;

        } else {
          document.getElementById('navbar').style.top = '0';
        }

        if (window.pageYOffset > 100) {
          document.getElementById('navbar').classList.add('white-bg');
        } else {
          document.getElementById('navbar').classList.remove('white-bg');
        }

      };

      function scrollFunction() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
          document.getElementById('goTop').style.display = 'block';
        } else {
          document.getElementById('goTop').style.display = 'none';
        }
      }

      $('#goTop').on('click', () => {
        $('html,body').animate({ scrollTop: 0 }, '500');
      });

    });

    this.router.events.subscribe((event) => {
      document.getElementById('mobileMenuWrapper').addEventListener('click', this.openMobileMenu);
      document.getElementById('closeMobileNav').addEventListener('click', this.closeMobileMenu);
    });

  }


  openMobileMenu() {
    document.getElementById('navWrapper').style.right = '0%';
  }

  closeMobileMenu() {
    document.getElementById('navWrapper').style.right = '-100%';
  }

  getRoutersData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

}
