import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
	test("renders", () => {
		render(<Application />);
		const nameElement = screen.getByRole("textbox", {
			name: "Name",
		});
		expect(nameElement).toBeInTheDocument();
		
		const bioElement = screen.getByRole("textbox", {
			name: "Bio",
		});
		expect(bioElement).toBeInTheDocument();

		const pageHeading = screen.getByRole("heading", {
			level: 1
			// name: "Job application form"
		});
		expect(pageHeading).toBeInTheDocument();
		
		const sectionHeading = screen.getByRole("heading", {
			name: "Section 1"
		});
		expect(sectionHeading).toBeInTheDocument();

		const nameElement2 = screen.getByLabelText("Name", {
			selector: "input"
		});
		expect(nameElement2).toBeInTheDocument();

		const nameElement3 = screen.getByPlaceholderText("Fullname");
		expect(nameElement3).toBeInTheDocument();

		const tncElement = screen.getByLabelText("I agree to the terms and conditions");
		expect(tncElement).toBeInTheDocument();

		const paragraphElement = screen.getByText("All fields are mandatory");
		expect(paragraphElement).toBeInTheDocument();

		const locationElement = screen.getByRole("combobox");
		expect(locationElement).toBeInTheDocument();
	});
});
