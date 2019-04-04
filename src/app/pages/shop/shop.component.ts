import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant/plant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  plants:any = [];
  loading: boolean = false;

  constructor(public plant:PlantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPlants();
    this.loading = true;
  }

  getPlants() {
    this.plants = [];
    this.plant.getPlants().subscribe((data: {}) => {
      this.loading = false;
      this.plants = data;
    });
  }
}
