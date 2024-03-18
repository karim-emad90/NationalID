import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-national-id',
  templateUrl: './national-id.component.html',
  styleUrls: ['./national-id.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NationalIdComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: NationalIdComponent,
      multi: true,
    }
  ]
})

export class NationalIdComponent implements ControlValueAccessor,Validator {
number1: any='';
number2: any='';
number3: any='';
number4: any='';
number5: any='';
number6: any='';
number7: any='';
number8: any='';
number9: any='';
number10: any='';
number11: any='';
number12: any='';
number13: any='';
number14: any='';
finalNumber:string='';
code:Array<number>=[];
length:any;
errorMessage: string ='';
result: string ='';


  constructor() { 
  
  }
  validate(control: AbstractControl): ValidationErrors | null {
   if(!this.finalNumber )return null;
   else if(this.finalNumber.length<14){
    
  
        

        
       
        
          
          
          return{
           invalidNID:true
          };
         
          


        
       
      }
      
      else {
        return null;
      }
      
        
  }
  
  
  onChange: any = () => { };
  onTouched: any = () => { }; 


  writeValue(value: string): void {
    this.finalNumber= value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onKeyUp(){

    this.finalNumber=this.number1+this.number2+this.number3+this.number4+this.number5+this.number6+this.number7+this.number8+this.number9+this.number10+this.number11+this.number12+this.number13+this.number14;
    if(this.finalNumber.length <14){
      this.result = '';
    }
    else{
      this.result = this.finalNumber;
    }
    this.onChange(this.result,this.onKey(this.number14));
    this.onTouched();
   
    
  }

  onKey(number14:string){
    this.number14 = number14;
    if(number14 == ''){
      this.result = '';
    }
    else{
      this.result = this.finalNumber;
    }
  }
 
  

  moveToNext(e:any, p:any,c:any, n:any){
   var length= c.value.length;
   var maxLength= c.getAttribute('maxlength');

   if(length == maxLength){
     if(n != ''){
       n.focus();
     }
   }
   if(e.key === "Backspace"){
     if(p != ''){
       p.focus();
     }
   }
  }
  



  

}
