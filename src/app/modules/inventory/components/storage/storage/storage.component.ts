import { Component, OnInit } from '@angular/core';

import { Storage } from '@app/models/storage';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  storages: Storage[];

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.getStorageList();
  }

  getStorageList(): void{
    this.storageService.getStorages().subscribe(
      response => { this.storages = response;  console.log(response); }
    );
  }

  delete(id: number): void{
    this.storageService.deleteStorage(id).subscribe(data => {
      alert('Storage with ID ' + id + ' has been deleted');
      location.reload();
    });
  }

}
