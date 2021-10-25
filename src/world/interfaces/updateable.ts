
export interface Updateable {

    // Take careful note of the fact that Loop.tick will run every frame, 
    // which means it will run sixty times per second. 
    // It’s important to keep the amount of work done here to a minimum, 
    // which means that each animated object’s .tick method method must be as simple as possible.
    tick(delta:number): void;
  }