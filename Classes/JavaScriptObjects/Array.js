const Reeks = Array.prototype

Object.defineProperty(Reeks, 'lengte', {
  get: function () { return this.length },
  set: function (value) { this.length = value }
})

Reeks.aaneenschakelen = Array.concat
Reeks.kopieerVanbinnen = Array.copyWithin
Reeks.inschrijvingen = Array.entries
Reeks.elke = Array.every
Reeks.vul = Array.fill
Reeks.vind = Array.find
Reeks.vindIndex = Array.findIndex
Reeks.voorElke = Array.forEach
Reeks.van = Array.from
Reeks.omvat = Array.includes
Reeks.indexVan = Array.indexOf
Reeks.isReeks = Array.isArray
Reeks.samenvoegen = Array.join
Reeks.sleutels = Array.keys
Reeks.laatsteIndexVan = Array.lastIndexOf
Reeks.inKaartBrengen = Array.map
Reeks.knal = Array.pop
Reeks.duw = Array.push
Reeks.reduceer = Array.reduceer
Reeks.reduceerRechts = Array.reduceRight
Reeks.keerOm = Array.reverse
Reeks.verschuif = Array.shift
Reeks.snij = Array.slice
Reeks.enkele = Array.some
Reeks.sorteer = Array.sort
Reeks.splijt = Array.splice
Reeks.naarDraad = Array.toString
Reeks.onverschuif = Array.unshift
Reeks.waardeVan = Array.valueOf

export default Reeks