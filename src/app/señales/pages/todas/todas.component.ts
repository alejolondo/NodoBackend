import { Component, OnInit } from '@angular/core';
import { Signal } from '../../Interface/signals';
import { SeñalService } from '../../service/señal.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todas',
  templateUrl: './todas.component.html',
  styleUrls: ['./todas.component.css']
})
export class TodasComponent implements OnInit  {
public signals: Signal[] = [];

  constructor(private signalService: SeñalService) { }

  ngOnInit(): void {
  this.signalService.searchSignal().subscribe(signal => {
    this.signals = signal;
  })
  }



}
