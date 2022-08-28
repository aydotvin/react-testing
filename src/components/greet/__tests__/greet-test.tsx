import { render, screen } from "@testing-library/react";
import Greet from "../Greet";

describe("Greet 3 test folder", () => {
	test("renders correctly", () => {
		render(<Greet />);
		const textElement = screen.getByText(/hello/i);
		expect(textElement).toBeInTheDocument();
	});
});
