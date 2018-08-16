import { Component, OnInit } from '@angular/core';
import { MdBooksService } from '../../services/md-books.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  mdBook:any;
  mdNotes : any;


  constructor(
    private mdBooksService: MdBooksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((val) => {
      this.mdBooksService.getOne(val.id)
      .then(mdBook => {
        this.mdBook = mdBook;
        this.mdNotes = this.mdBook.mdNotes;
      })
      .catch(err => {
        console.error(err);
      });
    });
  }

}