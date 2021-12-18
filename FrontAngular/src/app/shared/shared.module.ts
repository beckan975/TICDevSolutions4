import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TitlesComponent } from './titles/titles.component';

@NgModule({
  declarations: [
    SidebarComponent,
    TitlesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitlesComponent
  ]
})
export class SharedModule { }
