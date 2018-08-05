interface Item {
    id: number;
}

export class Repository<T extends Item> {

  private items: T[] = [];

  private _uniqueId = 0;
  private get uniqueId() {
    return this._uniqueId++;
  }

  public getAll(){
    return this.items;
  }

  public get(id: number): T {
    let index = this.items.findIndex((value, index, array) => {return value.id === id});
    if (index > -1){
      return this.items[index];
    }
  }

  public create(type: {new(uniqueId: number): T}) {
    let uniqueId = this.uniqueId;
    let item = new type(uniqueId);
    this.items.push(item);
    return uniqueId;
  }

  public delete(id: number){
    let index = this.items.findIndex((value, index, array) => {return value.id === id});
    if (index > -1){
      this.items.splice(index, 1);
    }
  }

  //I think this method may become a sourse of type errors.
  //But it looks good instead explicit properties assignment.
  public setProperties(id: number, properties: any){
    let index = this.items.findIndex((value, index, array) => {return value.id === id});
    if (index > -1){
      let item = this.items[index];
      
      for (var property in properties){
        item[property] = properties[property];
      }
    }
  }

}
