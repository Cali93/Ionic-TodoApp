import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTasksPage } from './edit-tasks';

@NgModule({
  declarations: [
    EditTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(EditTasksPage),
  ],
})
export class EditTasksPageModule {}
