import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { FooterComponent } from './footer/footer.component';
import { BaseComponent } from './base/base.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    BaseComponent,
    NavigationMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemesModule { }
