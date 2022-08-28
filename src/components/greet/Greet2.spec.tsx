import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet 2", () => {
	test("renders correctly", () => {
		render(<Greet />);
		const textElement = screen.getByText(/hello/i);
		expect(textElement).toBeInTheDocument();
	});
});