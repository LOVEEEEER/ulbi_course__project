import React from "react";
import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("Button", () => {
    test("Test render", () => {
        const testButtonText = "TEST";
        render(<Button>{testButtonText}</Button>);
        expect(screen.getByText(testButtonText))
            .toBeInTheDocument();
    });

    test("Test clear theme", () => {
        const testButtonText = "TEST";
        render(<Button theme={ThemeButton.CLEAR}>{testButtonText}</Button>);
        expect(screen.getByText(testButtonText))
            .toHaveClass("clear");
        screen.debug();
    });
});
