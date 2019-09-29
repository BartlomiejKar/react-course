import React from 'react';
import Clock from "../../Clock/Clock"
import ReactDOM from "react-dom"

var root = null
describe("<Clock/>", () => {
    describe("when gives minutes and seconds", () => {
        beforeEach(() => {
            root = document.createElement("div");
            ReactDOM.render(
                <Clock minutes={20} seconds={10} />, root
            )
        })
        it("renders properly", () => {
            expect(root.childNodes[0].nodeName).toEqual("H2")
            expect(root.childNodes[0].className).toMatch(/Clock/)
            expect(root.childNodes[0].textContent).toMatch(/20:10/)
        })
    })
    it("render h2 element", () => {
        expect(root.childNodes[0].nodeName).toEqual("H2")
    })
    it("set className", () => {
        expect(root.childNodes[0].className).toMatch(/Clock/)
    })
    it("render time properly", () => {
        expect(root.childNodes[0].textContent).toMatch(/20:10/)
    })
})