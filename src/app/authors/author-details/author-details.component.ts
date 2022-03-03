import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Author } from "src/app/authors.module";

@Component({
    selector: 'author-details',
    templateUrl: './author-details.component.html'
})

export class AuthorDetailsComponent{
    @Input() author!: Author;
    @Output() select = new EventEmitter<Author>();
    @Output() delete = new EventEmitter<number>();
}