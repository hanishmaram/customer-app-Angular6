import { NgModule } from "@angular/core";
import {MatFormFieldModule,MatInputModule, MatRadioModule, MatAutocompleteModule, MatSliderModule, MatSlideToggleModule, MatDatepickerModule,MatNativeDateModule, MatSelectModule,MatCheckboxModule, MatButtonModule} from "@angular/material";

@NgModule({
  imports:[MatFormFieldModule,
           MatInputModule,
           MatRadioModule,
           MatAutocompleteModule,
           MatSliderModule,
           MatSlideToggleModule,
           MatDatepickerModule,
           MatNativeDateModule,
           MatSelectModule,
           MatCheckboxModule,
          MatButtonModule],
  exports:[MatFormFieldModule,
           MatInputModule,
           MatRadioModule,
           MatAutocompleteModule,
           MatSliderModule,
           MatSlideToggleModule,
           MatDatepickerModule,
           MatNativeDateModule,
           MatSelectModule,
           MatCheckboxModule,
           MatButtonModule]
})
export class MaterialModule{

}