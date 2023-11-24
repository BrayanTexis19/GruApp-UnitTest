/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import AutocompleteInput from "../components/AutocompleteInput";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, address: "Calle A" },
        { id: 2, address: "Calle B" },
      ]),
  })
);

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders AutocompleteInput with suggestions", async () => {
  const { getByRole, getByText } = render(<AutocompleteInput />);

  const input = getByRole("textbox");
  fireEvent.change(input, { target: { value: "Calle" } });

  await waitFor(() => {
    expect(getByText("Calle A")).toBeInTheDocument();
    expect(getByText("Calle B")).toBeInTheDocument();
  });
  screen.debug();
});
