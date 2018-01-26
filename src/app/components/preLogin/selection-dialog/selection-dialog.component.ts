import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-selection-dialog',
  templateUrl: './selection-dialog.component.html',
  styleUrls: ['./selection-dialog.component.css']
})
export class SelectionDialogComponent implements OnInit {

  public sendData = '';

  allLeftCheckBoxes = [
    {
      name: 'Manufacturer Manufacturer',
      checkedClass: 'unchecked'
    },
    {
      name: 'Distributor',
      checkedClass: 'unchecked'
    },
    {
      name: 'Retailer',
      checkedClass: 'unchecked'
    },
    {
      name: 'Retailer2',
      checkedClass: 'unchecked'
    },
    {
      name: 'Retailer3',
      checkedClass: 'unchecked'
    },

  ];

  constructor(public dialogRef: MdDialogRef<SelectionDialogComponent>) {
        
  }

  ngOnInit() {
    // console.log(this.dialogRef._containerInstance.dialogConfig.data);
  }

  proceed() {
    this.dialogRef.close(this.sendData);
  }

  chooseType(name) {
    this.allLeftCheckBoxes.forEach(element => {
      if (element.name === name) {
        element.checkedClass = 'checked';
        this.sendData = name;
      } else {
        element.checkedClass = 'unchecked';
      }
    });
  }

}


