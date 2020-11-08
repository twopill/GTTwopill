import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/table';


export class Fermata {

  line: string;
  hour: number;

  public get _line() { return this.line }
  public set _line(linea) { this.line = linea }

  public get _hour() { return this.hour }
  public set _hour(orario) { this.hour = orario }


}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts = [];
  numeroFermata

  //dataSource = [ { _line: '1', hour: '2' } ]
  displayedColumns: string[] = ['_line', '_hour'];

  dataSource = null;

  constructor(public http: HttpClient) {}

  send(numeroFermata: string) {

    this.dataSource = null; //FIXME: da sistemare
    if (numeroFermata != null) {
      this.http.get('http://gpa.madbob.org/query.php?stop=' + numeroFermata)
      .subscribe(
        (value: any) => {
          if (value) {
            value.forEach(fermate => {
              let temp: Fermata = new Fermata;
              if (fermate.line) {
                temp.line = fermate.line;
                temp.hour = fermate.hour;
              }
              this.posts.push(temp)
            })
            this.dataSource = this.posts;
          }
        })
    }else this.dataSource = null;
  }

}




