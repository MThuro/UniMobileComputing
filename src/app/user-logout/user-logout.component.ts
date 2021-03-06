import { NavigationService } from './../navigation.service';
import { NavigationComponent } from './../navigation/navigation.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {
  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    //set Navigation Status for different components
    this.navigationService.setLogoutStatus(false);
    this.navigationService.setDeleteStatus(false);
    this.navigationService.setAddStatus(false);
    this.navigationService.setTicketListStatus(false);
    this.navigationService.setLoginStatus(true);
    this.navigationService.setHeaderTitle("Logout");
    //remove data from local storage
    localStorage.removeItem("username");
    localStorage.removeItem("logon");
    localStorage.removeItem("Date");
  }

}
