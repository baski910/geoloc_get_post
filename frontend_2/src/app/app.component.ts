import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_2';
  location!: any

  constructor(private commonService: CommonService){}
  
  ngOnInit(): void {
    this.commonService.getLocation().subscribe(
      (response)=>{
      this.location = response
      console.log(response)
    },
    (error) => {
      console.error(error)
    }
  )
  }


}
