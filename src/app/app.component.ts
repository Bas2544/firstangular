import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = { id: 1001,
  name:"Teerapat ",
  address:"Thailand" }

  sayHi(){
    return "Hi from" + this.
    user.name;  
  }
  i:number = 0
  addCount(){
    this.i++;
  }
  deleteCount(){
    this.i--;
  }
  nameInput:string ="";
  readName(name:string){
    console.log(name);
    this.nameInput=name;
  }
  valid: boolean = 1>2;
  validAge: boolean=false;

  readAge(age:string){
    let a =parseInt(age)
    this.validAge = a>=18 && a<=25
  }

  menus = ["Shubu","KFC","MK","BBQ","Salad"];

courses = [
  {id: 1, title:"TypeScript"},
  {id: 2, title:"Java"},
  {id: 3, title:"PHP"},
  {id: 4, title:"Angulat"},
  {id: 5, title:"Flutter"}
];

}