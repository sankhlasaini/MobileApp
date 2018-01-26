import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { SelectionDialogComponent } from 'app/components/preLogin/selection-dialog/selection-dialog.component';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-pre-login-layout',
  templateUrl: './pre-login-layout.component.html',
  styleUrls: ['./pre-login-layout.component.css'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        animate(200, keyframes([
          // style({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
          style({ opacity: 0, transform: 'translateY(25px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ]
    )
  ]
})
export class PreLoginLayoutComponent implements OnInit {

  industrySelectResult = '';

  navList = [
    { name: 'Dashboard', link: '/dashboard', path: '../../assets/images/menu1.png' },
    { name: 'Order', link: '/order', path: '../../assets/images/menu2.png' },
    { name: 'Delivery', link: '/delivery', path: '../../assets/images/menu3.png' },
    { name: 'Promotions', link: '/promotion', path: '../../assets/images/menu4.png' },
    { name: 'Region', link: '/region', path: '../../assets/images/menu5.png' },
    { name: 'Products', link: '/products', path: '../../assets/images/menu6.png' }
  ];

  lists = [
    { name: 'About Deltaverge', listurl: '#' },
    { name: 'Contact Deltaverge', listurl: '#' },
    { name: 'Chat With Us', listurl: ' #' }
  ];

  selectPersona1 = false;
  selectPersona2 = false;
  selectPersona3 = false;
  signUpUsing = false;

  allLeftCheckBoxes = [
    {
      name: 'Manufacturer',
      imgUrl: '../../assets/images/slide1.png',
      isChecked: false,
      checkedClass: 'unchecked-left-checkbox',
    },
    {
      name: 'Distributor',
      imgUrl: '../../assets/images/slide2.png',
      isChecked: false,
      checkedClass: 'unchecked-left-checkbox',
    },
    {
      name: 'Retailer',
      imgUrl: '../../assets/images/slide3.png',
      isChecked: false,
      checkedClass: 'unchecked-left-checkbox',
    },
    {
      name: 'Retailer',
      imgUrl: '../../assets/images/slide3.png',
      isChecked: false,
      checkedClass: 'unchecked-left-checkbox',
    },
    {
      name: 'Retailer',
      imgUrl: '../../assets/images/slide3.png',
      isChecked: false,
      checkedClass: 'unchecked-left-checkbox',
    },
  ];

  country = [
    {
      name: 'country1',
      imgUrl: '../../assets/images/cone.png',
      languages: ['lang1', 'lang2']
    }, {
      name: 'country2',
      imgUrl: '../../assets/images/ctwo.png',
      languages: ['lang3', 'lang4']
    }, {
      name: 'country3',
      imgUrl: '../../assets/images/cthree.png',
      languages: ['lang5', 'lang6']
    },
    {
      name: 'country4',
      imgUrl: '../../assets/images/ctwo.png',
      languages: ['lang7', 'lang8']
    }, {
      name: 'country5',
      imgUrl: '../../assets/images/cthree.png',
      languages: ['lang9', 'lang10']
    }
  ];

  constructor(public dialog: MdDialog) {
    this.openDialog();
  }

  ngOnInit() { }

  openDialog() {
    const dialogRef = this.dialog.open(SelectionDialogComponent, {
      // height: '80%',
      // width: '50%',
      data: 'this is selection dialog',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.industrySelectResult = result;
      console.log(this.industrySelectResult);

    });
  }

  chooseType(index, name) {
    if (this.allLeftCheckBoxes[index].name === name) {
      if (this.allLeftCheckBoxes[index].isChecked === true) {
        this.allLeftCheckBoxes[index].checkedClass = 'unchecked-left-checkbox';
        this.allLeftCheckBoxes[index].isChecked = false;
      } else {
        this.allLeftCheckBoxes[index].checkedClass = 'checked-left-checkbox';
        this.allLeftCheckBoxes[index].isChecked = true;
      }
    }
  }

  selectPersona(option) {
    this.signUpUsing = true;
    switch (option) {
      case 1: {
        this.selectPersona1 = true;
        this.selectPersona2 = false;
        this.selectPersona3 = false;
        break;
      }
      case 2: {
        this.selectPersona1 = false;
        this.selectPersona2 = true;
        this.selectPersona3 = false;
        break;
      }
      case 3: {
        this.selectPersona1 = false;
        this.selectPersona2 = false;
        this.selectPersona3 = true;
        break;
      }
    }
    console.log('-->>', option);
  }
}
