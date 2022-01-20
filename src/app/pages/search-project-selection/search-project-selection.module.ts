import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchProjectSelectionRoutingModule } from './search-project-selection-routing.module';
import { SearchProjectSelectionComponent } from './search-project-selection/search-project-selection.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [SearchProjectSelectionComponent, SearchComponent],
  imports: [CommonModule, SharedModule, SearchProjectSelectionRoutingModule],
  providers: [],
})
export class SearchProjectSelectionModule {}
