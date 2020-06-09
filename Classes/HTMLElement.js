const HTOTElement = HTMLElement.prototype

Object.defineProperty(HTOTElement, 'toegangsSleutel', {
  get: function () { return this.accessKey },
  set: function (value) { this.accessKey = value }
})
Object.defineProperty(HTOTElement, 'attributen', {
  get: function () { return this.attributes },
  set: function (value) { this.attributes = value }
})
Object.defineProperty(HTOTElement, 'kindElementAantal', {
  get: function () { return this.childElementCount },
  set: function (value) { this.childElementCount = value }
})
Object.defineProperty(HTOTElement, 'kindKnooppunten', {
  get: function () { return this.childNodes },
  set: function (value) { this.childNodes = value }
})
Object.defineProperty(HTOTElement, 'kinderen', {
  get: function () { return this.children },
  set: function (value) { this.children = value }
})
Object.defineProperty(HTOTElement, 'klassenLijst', {
  get: function () { return this.classList },
  set: function (value) { this.classList = value }
})
Object.defineProperty(HTOTElement, 'klasNaam', {
  get: function () { return this.className },
  set: function (value) { this.className = value }
})
Object.defineProperty(HTOTElement, 'cliëntHoogte', {
  get: function () { return this.clientHeight },
  set: function (value) { this.clientHeight = value }
})
Object.defineProperty(HTOTElement, 'cliëntLinks', {
  get: function () { return this.clientLeft },
  set: function (value) { this.clientLeft = value }
})
Object.defineProperty(HTOTElement, 'cliëntTop', {
  get: function () { return this.clientTop },
  set: function (value) { this.clientTop = value }
})
Object.defineProperty(HTOTElement, 'cliëntBreedte', {
  get: function () { return this.clientWidth },
  set: function (value) { this.clientWidth = value }
})
Object.defineProperty(HTOTElement, 'inhoudBewerkbaar', {
  get: function () { return this.contentEditable },
  set: function (value) { this.contentEditable = value }
})
Object.defineProperty(HTOTElement, 'richting', {
  get: function () { return this.dir },
  set: function (value) { this.dir = value }
})
Object.defineProperty(HTOTElement, 'eersteKind', {
  get: function () { return this.firstChild },
  set: function (value) { this.firstChild = value }
})
Object.defineProperty(HTOTElement, 'eersteElementKind', {
  get: function () { return this.firstElementChild },
  set: function (value) { this.firstElementChild = value }
})
Object.defineProperty(HTOTElement, 'binnensteHTOT', {
  get: function () { return this.innerHTML },
  set: function (value) { this.innerHTML = value }
})
Object.defineProperty(HTOTElement, 'binnensteTekst', {
  get: function () { return this.innerText },
  set: function (value) { this.innerText = value }
})
Object.defineProperty(HTOTElement, 'taal', {
  get: function () { return this.lang },
  set: function (value) { this.lang = value }
})
Object.defineProperty(HTOTElement, 'laatsteKind', {
  get: function () { return this.lastChild },
  set: function (value) { this.lastChild = value }
})
Object.defineProperty(HTOTElement, 'laatsteElementKind', {
  get: function () { return this.lastElementChild },
  set: function (value) { this.lastElementChild = value }
})
Object.defineProperty(HTOTElement, 'naamruimteUBI', {
  get: function () { return this.namespaceURI },
  set: function (value) { this.namespaceURI = value }
})
Object.defineProperty(HTOTElement, 'volgendeBroerOfZus', {
  get: function () { return this.nextSibling },
  set: function (value) { this.nextSibling = value }
})
Object.defineProperty(HTOTElement, 'volgendeElementBroerOfZus', {
  get: function () { return this.nextElementSibling },
  set: function (value) { this.nextElementSibling = value }
})
Object.defineProperty(HTOTElement, 'knooppuntNaam', {
  get: function () { return this.nodeName },
  set: function (value) { this.nodeName = value }
})
Object.defineProperty(HTOTElement, 'knooppuntType', {
  get: function () { return this.nodeType },
  set: function (value) { this.nodeType = value }
})
Object.defineProperty(HTOTElement, 'knooppuntWaarde', {
  get: function () { return this.nodeValue },
  set: function (value) { this.nodeValue = value }
})
Object.defineProperty(HTOTElement, 'afstandHoogte', {
  get: function () { return this.offsetHeight },
  set: function (value) { this.offsetHeight = value }
})
Object.defineProperty(HTOTElement, 'afstandBreedte', {
  get: function () { return this.offsetWidth },
  set: function (value) { this.offsetWidth = value }
})
Object.defineProperty(HTOTElement, 'afstandOuder', {
  get: function () { return this.offsetParent },
  set: function (value) { this.offsetParent = value }
})
Object.defineProperty(HTOTElement, 'afstandTop', {
  get: function () { return this.offsetTop },
  set: function (value) { this.offsetTop = value }
})
Object.defineProperty(HTOTElement, 'buitensteHTOT', {
  get: function () { return this.outerHTML },
  set: function (value) { this.outerHTML = value }
})
Object.defineProperty(HTOTElement, 'buitensteTekst', {
  get: function () { return this.outerText },
  set: function (value) { this.outerText = value }
})
Object.defineProperty(HTOTElement, 'eigenaarDocument', {
  get: function () { return this.ownerDocument },
  set: function (value) { this.ownerDocument = value }
})
Object.defineProperty(HTOTElement, 'ouderKnooppunt', {
  get: function () { return this.parentNode },
  set: function (value) { this.parentNode = value }
})
Object.defineProperty(HTOTElement, 'ouderElement', {
  get: function () { return this.parentElement },
  set: function (value) { this.parentElement = value }
})
Object.defineProperty(HTOTElement, 'vorigeBroerofZus', {
  get: function () { return this.previousSibling },
  set: function (value) { this.previousSibling = value }
})
Object.defineProperty(HTOTElement, 'vorigeElementBroerofZus', {
  get: function () { return this.previousElementSibling },
  set: function (value) { this.previousElementSibling = value }
})
Object.defineProperty(HTOTElement, 'scrollHoogte', {
  get: function () { return this.scrollHeight },
  set: function (value) { this.scrollHeight = value }
})
Object.defineProperty(HTOTElement, 'scrollLinks', {
  get: function () { return this.scrollLeft },
  set: function (value) { this.scrollLeft = value }
})
Object.defineProperty(HTOTElement, 'scrollBreedte', {
  get: function () { return this.scrollWidth },
  set: function (value) { this.scrollWidth = value }
})
Object.defineProperty(HTOTElement, 'stijl', {
  get: function () { return this.style },
  set: function (value) { this.style = value }
})
Object.defineProperty(HTOTElement, 'tabbladIndex', {
  get: function () { return this.tabIndex },
  set: function (value) { this.tabIndex = value }
})
Object.defineProperty(HTOTElement, 'labelNaam', {
  get: function () { return this.tagName },
  set: function (value) { this.tagName = value }
})
Object.defineProperty(HTOTElement, 'tekstInhoud', {
  get: function () { return this.textContent },
  set: function (value) { this.texContent = value }
})
Object.defineProperty(HTOTElement, 'titel', {
  get: function () { return this.title },
  set: function (value) { this.title = value }
})

HTOTElement.voegEvenementLuisteraarToe = HTOTElement.addEventListener


export default HTOTElement