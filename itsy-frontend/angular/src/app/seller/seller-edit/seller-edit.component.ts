import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.class';
import { ItemService } from 'src/app/service/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-edit',
  templateUrl: './seller-edit.component.html',
  styleUrls: ['./seller-edit.component.css']
})
export class SellerEditComponent implements OnInit {

  item: Item;
  imgURL: any;
  selectedFile: any;

  constructor(private httpClient: HttpClient, private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItemById(id).subscribe(data => {
      this.item = data;
    });
  }

  updateItem() {
    this.itemService.updateItem(this.item).subscribe(res => this.gotoItemList());
  }

  deleteItem() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.deleteItem(id).subscribe(res => this.gotoItemList());
  }

  gotoItemList(): void {
    this.router.navigate(['/seller']);
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    // For Displaying the selected image
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

}
