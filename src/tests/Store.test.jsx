import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Store from "../components/Store"
import userEvent from "@testing-library/user-event";

describe("should by show data articles", () => {
    const user = userEvent.setup();

    render(<Store />)
    

})