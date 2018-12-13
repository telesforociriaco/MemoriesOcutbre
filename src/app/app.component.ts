import { Component } from '@angular/core';

function log(target, name, descriptor){
    console.log(target, name, descriptor)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MemoriesOctubre';

  @log
  aSimpleMethod(){
    console.log("hey there!")
  }
}
