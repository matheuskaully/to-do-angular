import { Component } from '@angular/core';
import { ToDoButtonDeleteAllComponent } from '../to-do-button-delete-all/to-do-button-delete-all.component';
import { ToDoInputAddItemsComponent } from '../to-do-input-add-items/to-do-input-add-items.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    ToDoButtonDeleteAllComponent,
    ToDoInputAddItemsComponent
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {

}
