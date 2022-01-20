import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionView } from '@grapecity/wijmo';

@Component({
  selector: 'app-attached-file',
  templateUrl: './attached-file.component.html',
  styleUrls: ['./attached-file.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttachedFileComponent implements OnInit {
  href: string = '';
  currentRoute: string = '';

  testData: CollectionView | [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.currentRoute = this.href.split('/').pop();

    this.testData = new CollectionView([
      {
        fileName: 'testFilename',
        fileSize: '10MB',
        date: '2022/01/07 13:43'
      }
    ])
  }

}
