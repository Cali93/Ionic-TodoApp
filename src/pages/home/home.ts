import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { TodoListService } from '../../services/todo-list/todo-list.service'
import { Observable } from 'rxjs/Observable'
import { Item } from './../../models/item/item.model';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todoList$: Observable<Item[]>

  constructor(public navCtrl: NavController, private todo: TodoListService) {
    this.todoList$=this.todo
    .getTodoList() // DB LIST
    .snapshotChanges() // Key and Value
    .map(
      changes=> {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })) // Pour chacun de ces changements je veux retourner un new Obj
      }
    )
  }

}
