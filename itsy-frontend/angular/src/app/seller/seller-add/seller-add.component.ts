import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.class';
import { ItemService } from 'src/app/service/item.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-add',
  templateUrl: './seller-add.component.html',
  styleUrls: ['./seller-add.component.css']
})
export class SellerAddComponent implements OnInit {

  private item: Item;
  private imgURL: any;
  private selectedFile;

  constructor(private itemService: ItemService, private router: Router, private httpClient: HttpClient) {
    this.item = new Item();
  }

  addItem() {
    this.itemService.addItem(this.item).subscribe(res => this.gotoItemList());
  }

  gotoItemList(): void {
    this.item = new Item();
    this.router.navigate(['/seller']);
  }

  ngOnInit() {
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
