import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [];
  numeroFermata

  constructor(public http: HttpClient) { }

  send(numeroFermata) {
    numeroFermata;
    this.http.get('http://gpa.madbob.org/query.php?stop=597' )
      .subscribe(
        (value: any) => {
          this.posts.push(value)
          console.log(this.posts)
        })


  }
}


