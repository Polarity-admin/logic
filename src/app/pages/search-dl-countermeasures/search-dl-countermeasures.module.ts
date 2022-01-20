import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchDlCountermeasuresRoutingModule } from './search-dl-countermeasures-routing.module';
import { SearchDlCountermeasuresComponent } from './search-dl-countermeasures/search-dl-countermeasures.component';

@NgModule({
  declarations: [SearchDlCountermeasuresComponent],
  imports: [CommonModule, SharedModule, SearchDlCountermeasuresRoutingModule],
  providers: [],
})
export class SearchDlCountermeasuresModule {}

