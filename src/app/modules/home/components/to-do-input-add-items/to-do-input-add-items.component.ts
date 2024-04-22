import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-to-do-input-add-items',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './to-do-input-add-items.component.html',
  styleUrl: './to-do-input-add-items.component.scss'
})
export class ToDoInputAddItemsComponent implements OnInit {
  @Output() public emitItemTaskList = new EventEmitter()
  public addItemTaskList: string = ''

  toastr = inject(ToastrService)

  constructor() {

  }

  ngOnInit(): void {

  }

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim()

    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList)

      this.toastr.success(
        'Você adicionou uma nova tarefa em sua lista de tarefas.',
        'Tarefa adicionada!', {
        progressBar: true,
        progressAnimation: 'decreasing'
      })

      this.addItemTaskList = ''
    }
  }
}
