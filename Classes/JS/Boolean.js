Object.defineProperty(Boolean.prototype.constructor, 'naam', {
    get: function () { return this.name },
    set: function (value) { this.name = value }
})
Object.defineProperty(Boolean.prototype.constructor, 'argumenten', {
    get: function () { return this.arguments },
    set: function (value) { this.arguments = value }
})
Object.defineProperty(Boolean.prototype.constructor, 'aanroeper', {
    get: function () { return this.caller },
    set: function (value) { this.caller = value }
})
Boolean.prototype.constructor.brengAan = Boolean.prototype.constructor.apply
Boolean.prototype.constructor.verbind = Boolean.prototype.constructor.bind
Boolean.prototype.constructor.roepAan = Boolean.prototype.constructor.call
Boolean.prototype.constructor.naarDraad = Boolean.prototype.constructor.toString

Boolean.prototype.naarDraad = Boolean.prototype.toString
Boolean.prototype.waardeVan = Boolean.prototype.valueOf

export default Boolean