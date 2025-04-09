import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from "./list/list.component";
import { EditorspackComponent } from "./editorspack/editorspack.component";

@Component({
  selector: 'app-main',
  imports: [CommonModule, HeroComponent, EditorspackComponent,ListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
 
}
