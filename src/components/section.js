export default class Section {
    constructor(renderer, containerSelector){
        this._renderer =renderer
        this._container = containerSelector

    }
    addItem(element){
        this._container.prepend(element)
    }
    renderItems(data){
            data.forEach(element => this.addItem( this._renderer(element)))  
        }
    
        
    }