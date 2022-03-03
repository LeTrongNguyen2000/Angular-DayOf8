import { Component } from "@angular/core";
import { Author, authors } from "src/app/authors.module";

@Component({
    selector: 'author-list',
    templateUrl: './author-list.component.html'
})

export class AuthorListComponent{
    authors = authors;
    currentAuthor = authors[1];

    onSelected(selectedAuthor: Author)
    {
        this.currentAuthor = selectedAuthor;
    }

    onDeleted(id: number){
        this.authors = this.authors.filter(author =>{
            return author.id != id;
        })
        if(this.currentAuthor.id === id)
        {
            this.currentAuthor = authors[0];
        }
    }
}
