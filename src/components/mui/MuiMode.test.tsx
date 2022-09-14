// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../test-utils";
// import { AppProviders } from "../providers/AppProviders";
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
	test("renders text correctly", () => {
		// render(<MuiMode />, {
		// 	wrapper: AppProviders,
		// });
		render(<MuiMode />);
		const headingElement = screen.getByRole("heading");
		expect(headingElement).toHaveTextContent("dark mode");
	});

	// test("renders text in white color for dark mode", () => {
	// 	render(<MuiMode />);
	// 	const headingElement = screen.getByRole("heading");
	// 	expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" });
	// });
});
