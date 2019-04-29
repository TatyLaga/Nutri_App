import { NgModule } from '@angular/core';
import { PipesPipe } from './pipes/pipes';
import { PipesFiltroPipe } from './pipes-filtro/pipes-filtro';
@NgModule({
	declarations: [PipesPipe,
    PipesFiltroPipe],
	imports: [],
	exports: [PipesPipe,
    PipesFiltroPipe]
})
export class PipesModule {}
