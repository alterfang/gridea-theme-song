const generateOverride = (params = {}) => {
  let result = ''



  if (typeof params.valine !== 'undefined' && !params.valine) {
    result += `
      .v {
        display: none;
      }
    `
  }

  console.log('result', result)

  return result
}

module.exports = generateOverride