import React from "react";
import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("Button", () => {
    test("Test render", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText(testButtonText))
            .toBeInTheDocument();
    });

    test("Test clear theme", () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText(testButtonText))
            .toHaveClass("clear");
        screen.debug();
    });
});
