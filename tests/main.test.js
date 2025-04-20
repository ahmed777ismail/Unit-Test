const {
  checkNumber,
  sayHello,
  getNames,
  getUser,
  loginUsers,
} = require("../src/main.js");

//test number function
describe("checkNumber", () => {
  test("should return a number greater than 0", () => {
    const result = checkNumber(5);
    expect(result).toBe(5);
  });

  it("should return 0 if number is less than 0", () => {
    const result = checkNumber(-5);
    expect(result).toBe(0);
  });

  it("should return 0", () => {
    const result = checkNumber(0);
    expect(result).toBe(0);
  });
});

// test string function
describe("sayHello", () => {
  it("should return Hello, name!", () => {
    const result = sayHello("Ahmed");
    expect(result).toContain("Hello, Ahmed!");
    expect(result).toMatch(/Hello, Ahmed!/);
  });
});
// test array function
describe("getNames", () => {
  it("should return an array of names", () => {
    const result = getNames();
    expect(result).toEqual(["Ahmed", "Ali", "Sara"]);
    expect(result).toHaveLength(3);
    expect(result).toContain("Ahmed");
    expect(result).toBeDefined();
    expect(result).not.toBeNull();
  });
});
// test object function
describe("getUser", () => {
  it("should return an object with id and name", () => {
    const result = getUser(1, "Ahmed");
    expect(result).toEqual({ id: 1, name: "Ahmed" });
    expect(result).toHaveProperty("id", 1);
    expect(result).toMatchObject({ id: 1, name: "Ahmed" });
  });
});

describe("loginUsers", () => {
  it("should return an error if email is false", () => {
    // expect(() => {
    //   loginUsers(null);
    // }).toThrow();
    // expect(() => {
    //   loginUsers(undefined);
    // }).toThrow();
    // expect(() => {
    //   loginUsers("");
    // }).toThrow();
    // expect(() => {
    //   loginUsers(false);
    // }).toThrow();
    // expect(() => {
    //   loginUsers(0);
    // }).toThrow();
    // expect(() => {
    //   loginUsers(NaN);
    // }).toThrow();
    // you can simplify the above code by using an array of falsy values
    // and looping through it to check if the function throws an error for each value
    const falsyValues = [null, undefined, "", false, 0, NaN];
    falsyValues.forEach((value) => {
      expect(() => {
        loginUsers(value);
      }).toThrow("Email is required");
    });
  });
  it("should return an object with id and email", () => {
    const result = loginUsers("R0E0Y@example.com");
    expect(result).toEqual({ id: 1, email: "R0E0Y@example.com" });
    expect(result).toHaveProperty("id", 1);
    expect(result).toMatchObject({ id: 1, email: "R0E0Y@example.com" });
  });
});
