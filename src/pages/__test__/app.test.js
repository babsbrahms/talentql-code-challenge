import React from 'react'
import AppPage from "../AppPage";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import db from "../../database.json"

afterAll(cleanup)

beforeEach(() => {
    render(<AppPage />)
})


describe("Test default app state", () => {
    test("Page should have 5 shape buttons", () => {
        let buttons = screen.getByTestId("shapes");
    
        expect(buttons).toBeInTheDocument()
    
        expect(buttons.children.length).toBe(5)
    })
    
    
    test("Shape buttons should be active by default", () => {
       let ovalButton = screen.getByTestId("oval");
       expect(ovalButton).toHaveStyle("border-color: blue")
    
       let roundButton = screen.getByTestId("round");
       expect(roundButton).toHaveStyle("border-color: blue")
    
       let triangleButton = screen.getByTestId("triangle");
       expect(triangleButton).toHaveStyle("border-color: blue")
    
       let squareButton = screen.getByTestId("square");
       expect(squareButton).toHaveStyle("border-color: blue")
    
       let rectangleButton = screen.getByTestId("rectangle");
       expect(rectangleButton).toHaveStyle("border-color: blue")
    })
    
    
    test("Page should have 6 color buttons", () => {
        let buttons = screen.getByTestId("colors");
    
        expect(buttons).toBeInTheDocument()
    
        expect(buttons.children.length).toBe(6)
    })
    
    
    test("Color buttons should be active by default", () => {
       let redButton = screen.getByTestId("red");
       expect(redButton).toHaveStyle("border-color: blue")
    
       let royalblueButton = screen.getByTestId("royalblue");
       expect(royalblueButton).toHaveStyle("border-color: blue")
    
       let greenButton = screen.getByTestId("green");
       expect(greenButton).toHaveStyle("border-color: blue")
    
       let yellowButton = screen.getByTestId("yellow");
       expect(yellowButton).toHaveStyle("border-color: blue")
    
       let lightblueButton = screen.getByTestId("lightblue");
       expect(lightblueButton).toHaveStyle("border-color: blue")
    
       let darkgrayButton = screen.getByTestId("darkgray");
       expect(darkgrayButton).toHaveStyle("border-color: blue")
    })


    test("Color buttons shoulld have different backround color", () => {
        let redButton = screen.getByTestId("red");
        expect(redButton).toHaveStyle("background-color: red")
     
        let royalblueButton = screen.getByTestId("royalblue");
        expect(royalblueButton).toHaveStyle("background-color: royalblue")
     
        let greenButton = screen.getByTestId("green");
        expect(greenButton).toHaveStyle("background-color: green")
     
        let yellowButton = screen.getByTestId("yellow");
        expect(yellowButton).toHaveStyle("background-color: yellow")
     
        let lightblueButton = screen.getByTestId("lightblue");
        expect(lightblueButton).toHaveStyle("background-color: lightblue")
     
        let darkgrayButton = screen.getByTestId("darkgray");
        expect(darkgrayButton).toHaveStyle("background-color: darkgray")
     })
    
    
    test("There should be a color header text", () => {
        let header = screen.getByText("Colors")
    
        expect(header).toBeInTheDocument()
    })
    
    test("There should be a shape header text", () => {
        let header = screen.getByText("Shapes")
    
        expect(header).toBeInTheDocument()
    })
    
    
    test("There should be filter header text", () => {
        let header = screen.getByText("Filters")
    
        expect(header).toBeInTheDocument()
    })

    test("The number of items should be equal to the content of the database file", () => {
        let items = screen.getByTestId("items");

        expect(items.children.length).toBe(db.length)
    })
})
