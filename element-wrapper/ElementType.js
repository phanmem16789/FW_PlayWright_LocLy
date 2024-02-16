exports.ElementType = class ElementType {
    static LABEL = new Sizes('small')
    static TEXT = new Sizes('medium')
    static XPATH = new Sizes('large')
    #value

    constructor(value) {
        this.#value = value
    }

    toString() {
        return this.#value
    }
}