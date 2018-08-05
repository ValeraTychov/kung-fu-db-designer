import { Component, OnInit } from '@angular/core';
import { ConnectionLinesService } from './connection-lines.service';

@Component({
  selector: 'app-connection-lines',
  templateUrl: './connection-lines.component.html',
  styleUrls: ['./connection-lines.component.css']
})
export class ConnectionLinesComponent implements OnInit {

  public lineList: any;

  public arrow: string;
  
  constructor(private connectionLinesService: ConnectionLinesService) { }

  ngOnInit() {
    this.lineList = this.connectionLinesService.lineList;
  }
  
/*   this.lineList = ["M10 10 C 80 10, 80 150, 150 150"];
  this.arrow = "M150 150 L140 155 L140 145"; */

}
