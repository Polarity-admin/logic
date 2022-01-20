import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { CollectionView } from '@grapecity/wijmo';

  @Component({
    selector: 'app-attached-file-is',
    templateUrl: './attached-file-is.component.html',
    styleUrls: ['./attached-file-is.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class AttachedFileIsComponent implements OnInit {
    @Input() currentRoute: string = null;
    attachedFileData: CollectionView | [];

    public href: string = "";
    constructor(private router: Router) {}
  
    ngOnInit(): void {
          this.href = this.router.url;
          this.currentRoute =  this.href.split('/').pop();
          this.attachedFileData = new CollectionView([{
            fileName: 'Test1124.pdf', 
            fileSize: '206KB',
            UploadDateTime: "2021/11/24 11:22"
          }])

    }
  }
  