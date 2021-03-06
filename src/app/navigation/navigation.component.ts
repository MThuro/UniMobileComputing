import { TicketService } from './../ticket.service';
import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Router} from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { NavigationService } from '../navigation.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private id: string;
  env = environment;
  link: {
    text: string,
    path: string,
  }

  constructor( private router: Router, private ticketService: TicketService,
    public navigationService: NavigationService) { 
  }

  ngOnInit() {
  }

  //navigate to customer list
  addTicket(): void {
    this.router.navigateByUrl('/customers');
  }

  //delete ticket from database
  deleteTicket(): void{
    this.ticketService.deleteTicket();
    this.router.navigateByUrl('/ticket-list');
  }
  getLoginStatus(): boolean{
    //return true if user is already logged in, else return false
    if (JSON.parse(localStorage.getItem("login")) == undefined){
      return true;
    }else{
      return JSON.parse(localStorage.getItem("login"));
    };
  }

}
