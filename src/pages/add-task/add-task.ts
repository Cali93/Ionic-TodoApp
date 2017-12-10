import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from './../../models/item/item.model';
import { TodoListService } from '../../services/todo-list/todo-list.service'
import { ToastService } from '../../services/toast/toast.service'

/**
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
  item: Item = {
    title: '',
    description: '',
    starts: undefined,
    ends: undefined

  }

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private todo: TodoListService,
     private toast: ToastService
   ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

  addItem(item: Item){
    this.todo.addItem(item).then(ref => {
      this.toast.show(`${item.title} added !`)
      this.navCtrl.setRoot('HomePage', {key:ref.key})
    })
  }

}
