import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../app.component'

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform(tasks: Task[], status:string='todo'): Task[] {
    return tasks.filter(res => res.status===status);
  }

}
