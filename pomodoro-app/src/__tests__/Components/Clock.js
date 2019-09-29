import React from 'react';
import Clock from "../../Clock/Clock"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
var clockRenderer = null;
var root = null
describe("<Clock/>", () => {
    describe("when gives minutes and seconds (DOM)", () => {
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

    describe("when gives minutes and seconds(react-test-renderer)", () => {
        beforeEach(() => {
            clockRenderer = renderer.create(
                <Clock minutes={20} seconds={10} />
            );
        })
        it("renders properly", () => {
            console.log(clockRenderer.toJSON())
            expect(clockRenderer.toJSON()).toMatchSnapshot()
        })
    })
    it("render h2 element", () => {
        expect(clockRenderer.toJSON().type).toEqual("h2")
    })
    it("set className", () => {
        expect(clockRenderer.toJSON().props).toMatchObject({ "className": expect.stringMatching(/Clock/) })
    })
    it("render time properly", () => {
        expect(clockRenderer.toJSON().children).toEqual(expect.arrayContaining(["20", "10"]))
    })
})