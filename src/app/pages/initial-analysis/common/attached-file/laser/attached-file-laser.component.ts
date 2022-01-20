import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-attached-file-laser',
    templateUrl: './attached-file-laser.component.html',
    styleUrls: ['./attached-file-laser.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class AttachedFileLaserComponent implements OnInit {
    @Input() currentRoute: string = null;
    attachedFileData: CollectionView | [];
    public href: string = "";
    constructor(private router: Router) {
      
    }
  
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
  