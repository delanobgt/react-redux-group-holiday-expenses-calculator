export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

export function formatRupiah(value) {
  if (typeof value !== 'number') return '0'
  return 'Rp. ' + value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
