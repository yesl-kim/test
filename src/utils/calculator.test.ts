import calculator from "./calculator";

describe("calculator", () => {
  describe("plus", () => {
    // 인수가 2일 때
    // 인수가 2 이상일 때
    // 음수끼리 더했을 때
    // 음수와 양수를 더했을 때
    // 양수와 음수를 더했을 때
    // 양수끼리 더했을 때
    test("인수가 2일 때", () => {
      const value1 = calculator.plus(1, 2);
      expect(value1).toBe(3);

      const value2 = calculator.plus(-1, 2);
      expect(value2).toBe(1);

      const value3 = calculator.plus(-1, -1);
      expect(value3).toBe(-2);
    });

    test("인수가 2 이상일 때", () => {
      const value1 = calculator.plus(1, 2, 3, 4, 5, 6);
      expect(value1).toBe(21);

      const value2 = calculator.plus(-1, 2, -3, 4, 5);
      expect(value2).toBe(7);

      const value3 = calculator.plus(-1, -2, -3);
      expect(value3).toBe(-6);
    });
  });
});
