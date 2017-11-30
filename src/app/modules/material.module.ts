import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatTableModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule} from '@angular/material';
import {MatSidenavModule, MatToolbarModule, MatTabsModule, MatInputModule, MatDialogModule, MatRadioModule, MatSlideToggleModule, MatAutocompleteModule} from '@angular/material';

const elements = [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatIconModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatTabsModule
];

@NgModule({
    imports: elements,
    exports: elements,
})
export class MaterialModule { }