## toBe vs toEqual

- toBe는 원시타입 값을 비교할 때 알맞다
- 객체와 비교할 경우 객체에 담긴 값이 같아도 false를 반환한다
- 단순히 객체의 내용이 같은지를 비교할 경우 toEqual를 사용해야함

## toBe vs toMatch

- 숫자를 비교할 때는 toBe
- 문자열을 비교할 때는 toMatch
- toMatch는 정규식도 지원한다
