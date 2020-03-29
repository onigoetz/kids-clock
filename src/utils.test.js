import { isEliorUp, isAlyssaUp, isJamesUp } from "./utils";

it("Is James Up", () => {
  // Morning
  expect(isJamesUp(8, 0)).toBeTruthy();
  expect(isJamesUp(9, 0)).toBeTruthy();
  expect(isJamesUp(7, 30)).toBeTruthy();
  expect(isJamesUp(7, 29)).toBeFalsy();
  expect(isJamesUp(6, 0)).toBeFalsy();

  // Evening
  expect(isJamesUp(18, 0)).toBeTruthy();
  expect(isJamesUp(18, 59)).toBeTruthy();
  expect(isJamesUp(19, 0)).toBeTruthy();
  expect(isJamesUp(19, 20)).toBeTruthy();
  expect(isJamesUp(19, 30)).toBeFalsy();
  expect(isJamesUp(22, 20)).toBeFalsy();
});

it("Is Elior Up", () => {
  // Morning
  expect(isEliorUp(8, 0)).toBeTruthy();
  expect(isEliorUp(9, 0)).toBeTruthy();
  expect(isEliorUp(7, 30)).toBeTruthy();
  expect(isEliorUp(7, 29)).toBeFalsy();
  expect(isEliorUp(6, 0)).toBeFalsy();

  // Evening
  expect(isEliorUp(18, 0)).toBeTruthy();
  expect(isEliorUp(18, 59)).toBeTruthy();
  expect(isEliorUp(19, 0)).toBeFalsy();
  expect(isEliorUp(22, 20)).toBeFalsy();
});

it("Is Alyssa Up", () => {
  // Morning
  expect(isAlyssaUp(8, 0)).toBeTruthy();
  expect(isAlyssaUp(9, 0)).toBeTruthy();
  expect(isAlyssaUp(7, 30)).toBeTruthy();
  expect(isAlyssaUp(7, 29)).toBeFalsy();
  expect(isAlyssaUp(6, 0)).toBeFalsy();

  // Evening
  expect(isAlyssaUp(18, 0)).toBeTruthy();
  expect(isAlyssaUp(18, 59)).toBeTruthy();
  expect(isAlyssaUp(19, 0)).toBeFalsy();
  expect(isAlyssaUp(22, 20)).toBeFalsy();
});
