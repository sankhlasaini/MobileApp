import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ClientSpeakDialogComponent } from 'app/components/preLogin/client-speak-dialog/client-speak-dialog.component';
import { WhitePaperDialogComponent } from 'app/components/preLogin/white-paper-dialog/white-paper-dialog.component';
import { CaseStudyDialogComponent } from 'app/components/preLogin/case-study-dialog/case-study-dialog.component';
import { NewsFeedDialogComponent } from 'app/components/preLogin/news-feed-dialog/news-feed-dialog.component';
import { MdDialog } from '@angular/material';


@Component({
  selector: 'app-pre-login-content',
  templateUrl: './pre-login-content.component.html',
  styleUrls: ['./pre-login-content.component.css']
})

export class PreLoginContentComponent implements OnInit, OnChanges {

  @Input() parentData;

  newsFeed = [
    'Ut wisi enim ad minim veniam',
    'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat',
    'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat',
    'Ut wisi enim ad minim veniam',
  ];

  constructor(public dialog: MdDialog) { }

  ngOnChanges() { }

  ngOnInit() {

    // setInterval(() => this.runningLoop(), 2000);
  }

  openDialog(dialogName) {
    switch (dialogName) {
      case 'clientSpeak': this.openClientSpeak(); break;
      case 'caseStudy': this.openCaseStudy(); break;
      case 'whitePaper': this.openWhitePaper(); break;
      case 'newsFeed': this.openNewsFeed(); break;
    }
  }
  openClientSpeak() {
    const dialogRef = this.dialog.open(ClientSpeakDialogComponent, {
      // height: '82%',
      // width: '64.5%',
      // position: { top: '90px', bottom: '', left: '25px', right: '25px' },
      data: 'this is client speak dialog',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });

  }
  openCaseStudy() {
    const dialogRef = this.dialog.open(CaseStudyDialogComponent, {
      // height: '80%',
      // width: '80%',
      data: 'this is CaseStudyDialogComponent dialog',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });

  }
  openWhitePaper() {
    const dialogRef = this.dialog.open(WhitePaperDialogComponent, {
      // height: '80%',
      // width: '80%',
      data: 'this is WhitePaperDialogComponent dialog',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });

  }
  openNewsFeed() {
    const dialogRef = this.dialog.open(NewsFeedDialogComponent, {
      // height: '80%',
      // width: '80%',
      data: 'this is NewsFeedDialogComponent dialog',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });

  }

}
