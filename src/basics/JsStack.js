const _items = new WeakMap()

class Stack {
    constructor() {
        _items.set(this, [])
    }

    push(obj) {
        return _items.get(this).push(obj)
    }

    pop(){
        let items = _items.get(this)
        if(items.length === 0) throw new Error("Stack is empty")
        return items.pop()
    }

    peek(){
        let items = _items.get(this)
        if(items.length === 0) throw new Error("Stack is empty")
        return items[items.length-1]  
    }

    count(){
        return _items.get(this).length
    }
}
