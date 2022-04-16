export default class Section {
    constructor({items, renderer}, containerSelector){
        this._items =items
        this._renderer =renderer
        this._container = containerSelector

    }
    addItem(element){
        this._container.prepend(element)
    }
    render(){
        this._items.forEach(data =>{
            this._renderer(data)
        })
    }
        
    }