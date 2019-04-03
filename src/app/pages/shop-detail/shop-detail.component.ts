import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant/plant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {

  product:any;
  loading: boolean = false;

  constructor(public plant:PlantService, private route: ActivatedRoute, private router: Router) {
    
   }

  ngOnInit() {
    this.getPlant(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
  }

  getPlant(id) {
    this.plant.getPlant(id).subscribe((data: {}) => {
      this.loading = false;
      this.product = data;
    });
  }

}
