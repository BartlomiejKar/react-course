import { render, cleanup } from "@testing-library/react"
import React from 'react';
import EditorTimeable from "../../EditorTimeable/EditorTimeable"



describe("EditorTimeable", () => {
    afterEach(cleanup)
    it("test", () => {
        const { debug, getByText } = render(<EditorTimeable />)
        debug()
        getByText("Zacznij")
    })
})
