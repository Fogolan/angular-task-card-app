import { Component, Input } from '@angular/core';

import { Task } from '../model/task';

@Component({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.css' ]
})

export class CardComponent { 
    @Input() task: Task;

    statusToggle():void {
        this.task.completed = !this.task.completed;
    }
    deleteTask():void {
        this.task.exist = false;
    }
}