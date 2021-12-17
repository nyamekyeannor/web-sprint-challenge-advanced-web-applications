import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Article from "./Article";

const testArticle = {
  id: 1,
  headline: "Headline",
  createdOn: "1-2-3",
  author: "Who knows",
  image: "Image",
  summary: "Summary",
  body: "Body",
};
const testArticle2 = {
  id: 1,
  headline: "Headline",
  createdOn: "1-2-3",
  author: "",
  image: "Image",
  summary: "Summary",
  body: "Body",
};

test("renders component without errors", () => {
  render(<Article article={testArticle} />);
});

test("renders headline, author from the article when passed in through props", () => {
  render(<Article article={testArticle} />);

  const headline = screen.queryByTestId(/headline/i);
  const author = screen.queryByTestId(/author/i);
  const summary = screen.queryByTestId(/summary/i);
  const body = screen.queryByTestId(/body/i);

  expect(headline).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
  render(<Article article={testArticle2} />);

  const assoPress = screen.queryByText(/Associated Press/i);

  expect(assoPress).toBeInTheDocument();
});

test("executes handleDelete when the delete button is pressed", () => {
  const mockDeleteFunc = jest.fn();
  render(<Article article={testArticle} handleDelete={mockDeleteFunc} />);

  const delButt = screen.queryByTestId(/deleteButton/i);
  userEvent.click(delButt);

  expect(mockDeleteFunc).toBeCalled();
});

// test('renders headline, author from the article when passed in through props', ()=> {
// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.
