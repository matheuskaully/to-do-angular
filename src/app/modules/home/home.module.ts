import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HeaderComponent } from './components/header/header.component';
import { ToDoButtonDeleteAllComponent } from './components/to-do-button-delete-all/to-do-button-delete-all.component';
import { ToDoInputAddItemsComponent } from './components/to-do-input-add-items/to-do-input-add-items.component';
import { ToDoListComponent } from './components/to-do-list/ToDoListComponent';

// page
import { HomeComponent } from './pages/home/home.component';
import { LucideAngularModule, UserCheck } from 'lucide-angular';

@NgModule({
  declarations: [
  ],
  imports: [
    HeaderComponent,
    ToDoButtonDeleteAllComponent,
    ToDoInputAddItemsComponent,
    ToDoListComponent,
    HomeComponent,
    CommonModule,
    LucideAngularModule.pick({
      UserCheck
    })
  ]
})
export class HomeModule { }
