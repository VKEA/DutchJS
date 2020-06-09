const HTOTDocument = HTMLDocument.prototype

Object.defineProperty(HTOTDocument, 'actiefElement', {
  get: function () { return this.activeElement },
  set: function (value) { this.activeElement = value }
})
Object.defineProperty(HTOTDocument, 'ankers', {
  get: function () { return this.anchors },
  set: function (value) { this.anchors = value }
})
Object.defineProperty(HTOTDocument, 'basisUBI', {
  get: function () { return this.baseURI },
  set: function (value) { this.baseURI = value }
})
Object.defineProperty(HTOTDocument, 'lichaam', {
  get: function () { return this.body },
  set: function (value) { this.body = value }
})
Object.defineProperty(HTOTDocument, 'koekje', {
  get: function () { return this.cookie },
  set: function (value) { this.cookie = value }
})
Object.defineProperty(HTOTDocument, 'karakterSet', {
  get: function () { return this.characterSet },
  set: function (value) { this.characterSet = value }
})
Object.defineProperty(HTOTDocument, 'standaardweergave', {
  get: function () { return this.defaultView },
  set: function (value) { this.defaultView = value }
})
Object.defineProperty(HTOTDocument, 'ontwerpmodus', {
  get: function () { return this.designMode },
  set: function (value) { this.designMode = value }
})
Object.defineProperty(HTOTDocument, 'documentUBI', {
  get: function () { return this.documentURI },
  set: function (value) { this.documentURI = value }
})
Object.defineProperty(HTOTDocument, 'domein', {
  get: function () { return this.domain },
  set: function (value) { this.domain = value }
})
Object.defineProperty(HTOTDocument, 'insluitingen', {
  get: function () { return this.embeds },
  set: function (value) { this.embeds = value }
})
Object.defineProperty(HTOTDocument, 'formulieren', {
  get: function () { return this.forms },
  set: function (value) { this.forms = value }
})
Object.defineProperty(HTOTDocument, 'volledigSchermElement', {
  get: function () { return this.fullscreenElement },
  set: function (value) { this.fullscreenElement = value }
})
Object.defineProperty(HTOTDocument, 'volledigSchermIngeschakeld', {
  get: function () { return this.fullscreenEnabled },
  set: function (value) { this.fullscreenEnabled = value }
})
Object.defineProperty(HTOTDocument, 'hoofd', {
  get: function () { return this.head },
  set: function (value) { this.head = value }
})
Object.defineProperty(HTOTDocument, 'afbeeldingen', {
  get: function () { return this.images },
  set: function (value) { this.images = value }
})
Object.defineProperty(HTOTDocument, 'implementatie', {
  get: function () { return this.implementation },
  set: function (value) { this.implementation = value }
})
Object.defineProperty(HTOTDocument, 'invoerCodering', {
  get: function () { return this.inputEncoding },
  set: function (value) { this.inputEncoding = value }
})
Object.defineProperty(HTOTDocument, 'laatstGewijzigd', {
  get: function () { return this.lastModified },
  set: function (value) { this.lastModified = value }
})
Object.defineProperty(HTOTDocument, 'gereedStaat', {
  get: function () { return this.readyState },
  set: function (value) { this.readyState = value }
})
Object.defineProperty(HTOTDocument, 'refereerder', {
  get: function () { return this.referrer },
  set: function (value) { this.referrer = value }
})
Object.defineProperty(HTOTDocument, 'strikteFoutControle', {
  get: function () { return this.strictErrorChecking },
  set: function (value) { this.strictErrorChecking = value }
})
Object.defineProperty(HTOTDocument, 'titel', {
  get: function () { return this.title },
  set: function (value) { this.title = value }
})
Object.defineProperty(HTOTDocument, 'UBL', {
  get: function () { return this.URL },
  set: function (value) { this.URL = value }
})

HTOTDocument.voegEvenementLuisteraarToe = HTOTDocument.addEventListener
HTOTDocument.adopteerKnooppunt = HTOTDocument.adoptNode
HTOTDocument.sluit = HTOTDocument.close
HTOTDocument.creëerAttribuut = HTOTDocument.createAttribute
HTOTDocument.creëerOpmerking = HTOTDocument.createComment
HTOTDocument.creëerDocumentFragment = HTOTDocument.createDocumentFragment
HTOTDocument.creëerElement = HTOTDocument.createElement
HTOTDocument.creëerEvenement = HTOTDocument.createEvent
HTOTDocument.creëerTekstKnooppunt = HTOTDocument.createTextNode
HTOTDocument.voerCommandoUit = HTOTDocument.execCommand
HTOTDocument.krijgElementBijId = HTOTDocument.getElementById
HTOTDocument.krijgElementenBijKlasnaam = HTOTDocument.getElementsByClassName
HTOTDocument.krijgElementenBijNaam = HTOTDocument.getElementsByName
HTOTDocument.krijgElementenBijLabelnaam = HTOTDocument.getElementsByTagName
HTOTDocument.heeftFocus = HTOTDocument.hasFocus
HTOTDocument.importeerKnooppunt = HTOTDocument.importNode
HTOTDocument.normaliseer = HTOTDocument.normalize
HTOTDocument.normaliseerDocument = HTOTDocument.normalizeDocument
HTOTDocument.vraagSelector = HTOTDocument.querySelector
HTOTDocument.vraagSelectorAlles = HTOTDocument.querySelectorAll
HTOTDocument.haalEvenementLuisteraarWeg = HTOTDocument.removeEventListener
HTOTDocument.schrijf = HTOTDocument.write
HTOTDocument.schrijfLijn = HTOTDocument.writeLn

export default HTOTDocument