import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs/Subscription';
import { FilterService } from '../../services/filter.service';


@Component({
  selector: 'app-list',
  styleUrls: ['list.component.css'],
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit, OnDestroy {

  countriesToBeRendered;
  countryChanged = this.service.countryChanged;
  subscription: Subscription;
  constructor(private service: FilterService) {
    this.countriesToBeRendered = this.service.countries;
  }
  ngOnInit() {
    this.countryChanged.subscribe(countries => {
      this.countriesToBeRendered = countries;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
