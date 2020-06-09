const Datum = Date.prototype

Object.defineProperty(Datum.constructor, 'naam', {
    get: function () { return this.name },
    set: function (value) { this.name = value }
})
Object.defineProperty(Datum.constructor, 'argumenten', {
    get: function () { return this.arguments },
    set: function (value) { this.arguments = value }
})
Object.defineProperty(Datum.constructor, 'aanroeper', {
    get: function () { return this.caller },
    set: function (value) { this.caller = value }
})
Datum.constructor.brengAan = Datum.constructor.apply
Datum.constructor.verbind = Datum.constructor.bind
Datum.constructor.roepAan = Datum.constructor.call
Datum.constructor.naarDraad = Datum.constructor.toString

Datum.krijgDatum = Datum.getDate
Datum.krijgDag = Datum.getDay
Datum.krijgVolledigJaar = Datum.getFullYear
Datum.krijgUren = Datum.getHours
Datum.krijgMilliseconden = Datum.getMilliseconds
Datum.krijgMinuten = Datum.getMinutes
Datum.krijgMaand = Datum.getMonth
Datum.krijgSeconden = Datum.getSeconds
Datum.krijgTijd = Datum.getTime
Datum.krijgTijdzoneVerschil = Datum.getTimezoneOffset
Datum.krijgUTCDatum = Datum.getUTCDate
Datum.krijgUTCDag = Datum.getUTCDay
Datum.krijgUTCVolledigJaar = Datum.getUTCFullYear
Datum.krijgUTCUren = Datum.getUTCHours
Datum.krijgUTCMilliseconden = Datum.getUTCMilliseconds
Datum.krijgUTCMinuten = Datum.getUTCMinutes
Datum.krijgUTCMaand = Datum.getUTCMonth
Datum.krijgUTCSeconden = Datum.getUTCSeconds
Datum.krijgJaar = Datum.getYear
Datum.nu = Datum.now
Datum.ontleed = Datum.parse
Datum.zetDatum = Datum.setDate
Datum.zetUren = Datum.setHours
Datum.zetMilliseconden = Datum.setMilliseconds
Datum.zetMinuten = Datum.setMinutes
Datum.zetMaand = Datum.setMonth
Datum.zetSeconden = Datum.setSeconds
Datum.zetTijd = Datum.setTime
Datum.zetUTCDatum = Datum.setUTCDate
Datum.zetUTCVolledigJaar = Datum.setUTCFullYear
Datum.zetUTCUren = Datum.setUTCHours
Datum.zetUTCMilliseconden = Datum.setUTCMilliseconds
Datum.zetUTCMinuten = Datum.setUTCMinutes
Datum.zetUTCMaand = Datum.setUTCMonth
Datum.zetSeconden = Datum.setUTCSeconds
Datum.naarDatumDraad = Datum.toDateString
Datum.naarISODraad = Datum.toISOString
Datum.naarJSON = Datum.toJSON
Datum.naarLandinstellingDatumDraad = Datum.toLocaleDateString
Datum.naarLandinstellingTijdDraad = Datum.toLocaleTimeString
Datum.naarDraad = Datum.toString
Datum.naarTijdDraad = Datum.toTimeString
Datum.naarUTCDraad = Datum.toUTCString
Datum.waardeVan = Datum.valueOf

export default Datum