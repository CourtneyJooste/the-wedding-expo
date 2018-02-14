import {NgModule} from '@angular/core';

import { CovalentLayoutModule, CovalentStepsModule /*, any other modules */ } from '@covalent/core';
// (optional) Additional Covalent Modules imports
// import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import {CovalentSearchModule} from '@covalent/core';
import {CovalentDataTableModule} from '@covalent/core';
import {CovalentPagingModule} from '@covalent/core';
import { CovalentCommonModule } from '@covalent/core';
import { CovalentFileModule } from '@covalent/core';
import { CovalentChipsModule } from '@covalent/core';
import { CovalentLoadingModule } from '@covalent/core';
import { CovalentDialogsModule } from '@covalent/core';
import { CovalentExpansionPanelModule } from '@covalent/core';

const elements = [
  CovalentCommonModule,
  CovalentLayoutModule,
  CovalentStepsModule,
  CovalentHighlightModule,
  CovalentMarkdownModule,
  CovalentDynamicFormsModule,
  CovalentSearchModule,
  CovalentDataTableModule,
  CovalentPagingModule,
  CovalentFileModule,
  CovalentChipsModule,
  CovalentLoadingModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule
];

@NgModule({
    imports: elements,
    exports: elements,
})
export class CovalentModule { }
