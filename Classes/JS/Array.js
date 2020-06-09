const Reeks = Array.prototype

Object.defineProperty(Reeks, 'lengte', {
  get: function () { return this.length },
  set: function (value) { this.length = value }
})

Reeks.aaneenschakelen = Reeks.concat
Reeks.kopieerVanbinnen = Reeks.copyWithin
Reeks.inschrijvingen = Reeks.entries
Reeks.elke = Reeks.every
Reeks.vul = Reeks.fill
Reeks.vind = Reeks.find
Reeks.vindIndex = Reeks.findIndex
Reeks.voorElke = Reeks.forEach
Reeks.van = Reeks.from
Reeks.omvat = Reeks.includes
Reeks.indexVan = Reeks.indexOf
Reeks.isReeks = Reeks.isArray
Reeks.samenvoegen = Reeks.join
Reeks.sleutels = Reeks.keys
Reeks.laatsteIndexVan = Reeks.lastIndexOf
Reeks.inKaartBrengen = Reeks.map
Reeks.knal = Reeks.pop
Reeks.duw = Reeks.push
Reeks.reduceer = Reeks.reduceer
Reeks.reduceerRechts = Reeks.reduceRight
Reeks.keerOm = Reeks.reverse
Reeks.verschuif = Reeks.shift
Reeks.snij = Reeks.slice
Reeks.enkele = Reeks.some
Reeks.sorteer = Reeks.sort
Reeks.splijt = Reeks.splice
Reeks.naarDraad = Reeks.toString
Reeks.onverschuif = Reeks.unshift
Reeks.waardeVan = Reeks.valueOf

export default Reeks