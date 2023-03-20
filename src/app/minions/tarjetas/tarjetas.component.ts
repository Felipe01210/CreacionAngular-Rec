import { Component, OnInit } from '@angular/core';
import { Minion } from '../interface/minion.interface';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent implements OnInit {

  data!: Minion[]

  constructor(private mService: MinionsService) { }

  ngOnInit(): void {
    this.mService.getURLMinions()
    .subscribe({
      next: (resp) => {this.data = resp}
    }
    )
  }

}
