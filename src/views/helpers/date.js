module.exports = ms => {
  var d = new Date()
  return d.toString(ms).split('GMT')[0]
}