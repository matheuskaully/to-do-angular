import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ToDoListComponent } from '../../components/to-do-list/to-do-list.component';
import { ToDoButtonDeleteAllComponent } from '../../components/to-do-button-delete-all/to-do-button-delete-all.component';
import { ToDoInputAddItemsComponent } from '../../components/to-do-input-add-items/to-do-input-add-items.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ToDoListComponent,
    ToDoButtonDeleteAllComponent,
    ToDoInputAddItemsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
