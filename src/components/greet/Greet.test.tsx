/**
 * Greet should render "Hello".
 * If a name is passed, "Hello" should be followed by the name.
 */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
	test("renders correctly", () => {
		render(<Greet />);
		const textElement = screen.getByText(/hello/i);
		expect(textElement).toBeInTheDocument();
	});
});

describe("nested", () => {
	it("renders the passed name", () => {
		render(<Greet name={"John"} />);
		const textElement = screen.getByText(/hello john/i);
		expect(textElement).toBeInTheDocument();
	});
});
