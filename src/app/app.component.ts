import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-course';

  staticText = 'StaticText from Ts'; 

  //Declaracion de objeto
  ObjUserTest =  {
    id: 3216,
    name: 'Jair',
    surname: 'Saavedra',
    age: 19,
    address: '1116654 Eltham',
  };

  // onClick(){
  //   console.log('clickXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
  // }

  onKeyUpName(newDinamicText: string){
    // console.log('hola mundo' + dinamicText);
    this.ObjUserTest.name = newDinamicText;    
  };

  onKeyUpSurname(newDinamicText: string){        
    this.ObjUserTest.surname = newDinamicText;
  };

  onKeyUpAge(newDinamicAge: string){        
    this.ObjUserTest.age = parseInt (newDinamicAge);
  };
}
