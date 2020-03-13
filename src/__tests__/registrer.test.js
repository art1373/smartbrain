import { queries } from "@testing-library/dom";
import React from "react";
import ReactDom from "react-dom";
import SignIn from "../components/Signin/Signin";

test("to have have input with label Email and Password", () => {
  const div = document.createElement("div");
  ReactDom.render(<SignIn />, div);
  expect(div.querySelector("label").textContent).toBe("Email");
});
test("email input should be empty", () => {
  const div = document.createElement("div");
  ReactDom.render(<SignIn />, div);
  const input = queries.getByLabelText(div, "Email");
  expect(input.innerHTML).toBe("");
});
test("password input should be empty", () => {
  const div = document.createElement("div");
  ReactDom.render(<SignIn />, div);
  const input = queries.getByLabelText(div, "Password");
  expect(input.innerHTML).toBe("");
});
