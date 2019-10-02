import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search/search.pipe';
import { SelectpipePipe } from './select-pipe/selectpipe.pipe';
import { RecommendedPipe } from './recommended-list-pipe/recommended.pipe';
import { DefaultimagePipe } from './default-image/defaultimage.pipe';
import { FilterPipe } from './filterpipe/filter.pipe';



@NgModule({
  declarations: [SearchPipe, SelectpipePipe, RecommendedPipe, DefaultimagePipe, FilterPipe],
  imports: [
    CommonModule
  ], exports: [SearchPipe, RecommendedPipe, SelectpipePipe, DefaultimagePipe, FilterPipe]
})
export class PipesModule { }
