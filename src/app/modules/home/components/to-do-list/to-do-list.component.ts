import { Component, DoCheck, inject } from '@angular/core';
import { ToDoButtonDeleteAllComponent } from '../to-do-button-delete-all/to-do-button-delete-all.component';
import { ToDoInputAddItemsComponent } from '../to-do-input-add-items/to-do-input-add-items.component';
import { TaskList } from '../../model/task-list';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    ToDoButtonDeleteAllComponent,
    ToDoInputAddItemsComponent,
    FormsModule,
    NgClass
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent implements DoCheck {
  toastr = inject(ToastrService)
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]')

   constructor() {

   }

   ngDoCheck() {
    if (this.taskList) {
      this.setLocalStorage()
    }
   }

   public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
    this.toastr.success(
      'Você removeu uma nova tarefa em sua lista de tarefas.',
      'Tarefa removida!', {
      progressBar: true,
      progressAnimation: 'decreasing'
    })
   }

   public deleteAllTaskList() {
    this.toastr.warning(
      'Você irá remover todas tarefas',
      'Cuidado!', {
      progressBar: true,
      progressAnimation: 'decreasing'
    })

    const confirm = window.confirm('Você deseja realmente deletar todas as tasks?')
    if (confirm) {
      this.taskList = []
    }

    this.toastr.success(
      'Você removeu todas tarefas',
      'Tarefas removidas!', {
      progressBar: true,
      progressAnimation: 'decreasing'
    }
    )
   }

   public setEmitTaskList(event: string) {
    this.taskList.push({
      task: event,
      checked: false
    })
   }

   public validationinput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('A tarefa está vazia, deseja deletar?')

      if (confirm) {
        this.deleteItemTaskList(index)
      }
    }
   }

   public setLocalStorage() {
    if (this.taskList) {
      localStorage.setItem('list', JSON.stringify(this.taskList))
    }
   }
}
