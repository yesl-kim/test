import number from './number'

describe('숫자 관련 유틸 함수', () => {
  describe('천 단위 자리에 ,를 찍는 함수: thousandCommas', () => {
    test('1000 미만의 숫자가 주어졌을 때는 , 찍지 않고 주어진 숫자 그대로 반환한다', () => {
      const value = 123
      expect(number.thousandCommas(value)).toMatch('123')
    })

    test('1000 이상의 숫자가 주어졌을 때 , 찍힌 값을 반환한다', () => {
      const value = 123456
      expect(number.thousandCommas(value)).toMatch('123,456')
    })
  })
})
