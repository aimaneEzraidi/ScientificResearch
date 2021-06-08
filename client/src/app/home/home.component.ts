import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { PublicationService } from '../_services/publication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  publications?:any;

  constructor(private userService: UserService,private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.publicationService.getPublications().subscribe(
      data=>{
        this.publications = JSON.parse(data);      
      },
      err=>{
        console.log(err);
      }
    )
  }
  home:string='../assets/images/19876.jpg'
}
