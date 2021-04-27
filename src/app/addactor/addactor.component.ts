import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-addactor",
  templateUrl: "./addactor.component.html",
  styleUrls: ["./addactor.component.css"],
})


export class AddactorComponent implements OnInit {
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";

  
  constructor(private dbService: DatabaseService, private router: Router) { }

  // This callback function will be invoked with the component get initialized by Angular.
   ngOnInit() {
    console.log("OnInit from addActorComponent!");
  }
  
  onSaveActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.createActor(obj).subscribe(result => {
      this.router.navigate(["/listactors"]);
    });
  }
}