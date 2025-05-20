// Pseudocode:
// - Import all functions from stringUtils.js
// - For each function, write tests to cover normal, edge, and error cases
// - reverseString: test empty, normal, unicode, single char
// - isPalindrome: test palindromes (with/without spaces/case), non-palindromes, empty, single char
// - truncateString: test string shorter, equal, longer than maxLength, maxLength 0, negative maxLength
// - countCharacters: test empty, normal, repeated chars, unicode, spaces

const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
} = require("../src/stringUtils");

describe("reverseString", () => {
  test("should reverse a normal string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("should reverse an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("should reverse a string with unicode characters", () => {
    expect(reverseString("città")).toBe("àttic");
  });

  test("should reverse a single character", () => {
    expect(reverseString("a")).toBe("a");
  });
});

describe("isPalindrome", () => {
  test("should return true for a simple palindrome", () => {
    expect(isPalindrome("anna")).toBe(true);
  });

  test("should return true for a palindrome with spaces and mixed case", () => {
    expect(isPalindrome("I topi non avevano nipoti")).toBe(true);
  });

  test("should return false for a non-palindrome", () => {
    expect(isPalindrome("ciao")).toBe(false);
  });

  test("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("should return true for a single character", () => {
    expect(isPalindrome("x")).toBe(true);
  });

  test("should return true for a palindrome with only spaces", () => {
    expect(isPalindrome("   ")).toBe(true);
  });
});

describe("truncateString", () => {
  test("should return the same string if shorter than maxLength", () => {
    expect(truncateString("ciao", 10)).toBe("ciao");
  });

  test("should return the same string if equal to maxLength", () => {
    expect(truncateString("ciao", 4)).toBe("ciao");
  });

  test("should truncate and add ... if longer than maxLength", () => {
    expect(truncateString("ciao mondo", 4)).toBe("ciao...");
  });

  test("should handle maxLength 0", () => {
    expect(truncateString("test", 0)).toBe("...");
  });

  test("should handle empty string", () => {
    expect(truncateString("", 5)).toBe("");
  });

  test("should handle negative maxLength (returns ...)", () => {
    expect(truncateString("test", -1)).toBe("...");
  });
});

describe("countCharacters", () => {
  test("should count characters in a normal string", () => {
    expect(countCharacters("aabbc")).toEqual({ a: 2, b: 2, c: 1 });
  });

  test("should return empty object for empty string", () => {
    expect(countCharacters("")).toEqual({});
  });

  test("should count spaces and special characters", () => {
    expect(countCharacters("a a!")).toEqual({ a: 2, " ": 1, "!": 1 });
  });

  test("should count unicode characters", () => {
    expect(countCharacters("ààè")).toEqual({ à: 2, è: 1 });
  });

  test("should count single character", () => {
    expect(countCharacters("z")).toEqual({ z: 1 });
  });
});
