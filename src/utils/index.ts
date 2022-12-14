function pxToRem(value: number) {
  return `${String(value / 16)}rem`
}

function formatPrice(value: number) {
  const price = value.toFixed(2)
  return String(price).replace('.', ',')
}

export { pxToRem, formatPrice }
