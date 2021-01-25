/**
    截取n位小数，例如：
    参数：num   5345.234234     注释：  要截取的数
          n     2               注释：  几位小数
          type  round           注释：  round ceil floor  (默认为round)
    结果        5345.23
*/
export default function (num, n, type = 'round') {
  if (!n) {
    n = 2
  }
  let f = parseFloat(num)
  if (isNaN(f)) {
    f = 0
  }
  f = Math[type](f * (10 ** n)) / 10 ** n
  let s = f.toString()
  let rs = s.indexOf('.')
  if (rs < 0) {
    rs = s.length
    s += '.'
  }
  while (s.length <= rs + n) {
    s += '0'
  }
  return s
}
