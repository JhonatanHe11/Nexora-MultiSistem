import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

    isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 80;
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (!element) return;
    const navbarHeight = 90;
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }

}
