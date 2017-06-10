import { ClassLevel } from  './classLevel.model';

export class Spells {
  spellName: string;
  spellDescription: string;
  classLevel: ClassLevel[];
  castingTime: string;
  components: string;
  range: string;
  target: string;
  duration: string;
  savingThrow: string;
  spellResistance: string;

  constructor(spellName: string, classLevel1: ClassLevel, castingTime: string, components: string, range: string,
      target: string, duration: string,savingThrow: string, spellResistance: string, spellDesicription: string,
      classLevel2?:ClassLevel){
       if(classLevel2 == null){
         this.classLevel = [classLevel1];
       }
       else{
         this.classLevel = [classLevel1, classLevel2];
       }

       this.castingTime = castingTime;
       this.components = components;
       this.range = range;
       this.target = target;
       this.duration = duration;
       this.savingThrow = savingThrow;
       this.spellResistance = spellResistance;
  }





}
