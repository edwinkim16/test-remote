import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { ResponseDataService } from '../services/response-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  subjecs;
  notes;
  nots!: any[];
  // newNote = new ;
  // @Output() addNote = new EventEmitter<Goal>();

 //   submitNote(){
 // this.addNote.emit(this.newNote);
 //   }

  constructor(private responseService: ResponseDataService) {}

  ngOnInit(): void {
    this.getSubjects();
    this.getNotes();
  }

  getSubjects() {
    this.responseService.getSubjects().subscribe((data: any) => {
      this.subjecs = data;
      console.log(this.subjecs);
    });
  }
  getNotes() {
    this.responseService.getNotes().subscribe((data: any) => {
      //return this.nots
      this.notes = data;
      console.log(this.notes);
    });
  }
}
