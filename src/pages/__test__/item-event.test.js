import React from 'react'
import AppPage from "../AppPage";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import db from "../../database.json"

afterAll(cleanup)

beforeEach(() => {
    render(<AppPage />)
})

describe("Item change based on click events",  () => {
    test("Clicking color red button should remove items with the color red", () => {
        let redButton = screen.getByTestId("red");
        fireEvent.click(redButton)

        let itemSection = screen.getByTestId("items")

        let result = Array.from(itemSection.children).every(el => el.firstElementChild.style.fill !== "red")

        expect(result).toBeTruthy()
    })


    test("Clicking color yellow button should remove items with the color yellow", () => {
        let redButton = screen.getByTestId("yellow");
        fireEvent.click(redButton)

        let itemSection = screen.getByTestId("items")

        let result = Array.from(itemSection.children).every(el => el.firstElementChild.style.fill !== "yellow")

        expect(result).toBeTruthy()
    })

    test("Clicking circle button should remove items with the circle svg", () => {
        let redButton = screen.getByTestId("red");
        fireEvent.click(redButton)

        let circleSvg = screen.queryByRole("circle")

        expect(circleSvg).not.toBeInTheDocument()
    })

    test("Clicking circle button should remove circle svg, click it again should add it", () => {
        let redButton = screen.getByTestId("red");
        fireEvent.click(redButton)

        expect(queryByRole("circle")).not.toBeInTheDocument()

        fireEvent.click(redButton)

        expect(queryByRole("circle")).toBeInTheDocument()
    })

    test("Clicking triangle button should remove items with the polygon svg", () => {
        let redButton = screen.getByTestId("red");
        fireEvent.click(redButton)

        let polygonSvg = screen.queryByRole("polygon")

        expect(polygonSvg).not.toBeInTheDocument()
    })
    

    test("Clicking a shape button should change grid title to Multiple items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();


        let roundButton = screen.getByTestId("round");
        fireEvent.click(roundButton)
        
        let gridTitle2 = screen.getByText("Multiple items")
        expect(gridTitle2).toBeInTheDocument()
    })


    test("Clicking a color button should change grid title to Multiple items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();


        let roundButton = screen.getByTestId("green");
        fireEvent.click(roundButton)
        
        let gridTitle2 = screen.getByText("Multiple items")
        expect(gridTitle2).toBeInTheDocument()
    })

    test("Clicking all shape button except rectangle should change grid title to All rectangle items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("square"))
        
        expect(screen.getByText("All rectangle items")).toBeInTheDocument()
    })
    

    test("Clicking all shape button except square should change grid title to All square items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("All square items")).toBeInTheDocument()
    })

    test("Clicking all shape button except oval should change grid title to All oval items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("All oval items")).toBeInTheDocument()
    })


    test("Clicking all color button except darkgray should change grid title to All darkgray items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("yellow"))
     
        fireEvent.click(screen.getByTestId("lightblue"))
        
        expect(screen.getByText("All darkgray items")).toBeInTheDocument()
    })


    test("Clicking all color button except red should change grid title to All red items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("yellow"))
     
        fireEvent.click(screen.getByTestId("lightblue"))
        
        expect(screen.getByText("All red items")).toBeInTheDocument()
    })


    test("Clicking all color button except yellow should change grid title to All yellow items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("lightblue"))
        
        expect(screen.getByText("All yellow items")).toBeInTheDocument()
    })


    test("Clicking all color button except lightblue should change grid title to All lightblue items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("yellow"))
        
        expect(screen.getByText("All lightblue items")).toBeInTheDocument()
    })


    test("Clicking some color button should change grid title to Multiple items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
        
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })


    test("Clicking some color button should change grid title to Multiple items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();
     
        fireEvent.click(screen.getByTestId("yellow"))
        
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })


    test("Clicking some color button should change grid title to Multiple items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("red"))
             
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })
    

    test("Clicking some shape button should change grid title to Multiple items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })


    test("Clicking some shape button should change grid title to Multiple items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
    
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })


    test("Clicking some shape button should change grid title to Multiple items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })


    test("Clicking some shape button and color button should change grid title to Multiple items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click( screen.getByTestId("green"))
        
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })


    test("Clicking all shape button except oval and clicking any shape button should change grid title to Multiple oval items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        fireEvent.click( screen.getByTestId("red"))
        
        expect(screen.getByText("Multiple oval items")).toBeInTheDocument()
    })


    test("Clicking all shape button except round and clicking any shape button(s) should change grid title to Multiple round items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        fireEvent.click( screen.getByTestId("red"))

        fireEvent.click( screen.getByTestId("green"))
        
        expect(screen.getByText("Multiple round items")).toBeInTheDocument()
    })

    test("Clicking all shape button except triangle and clicking any shape button(s) should change grid title to Multiple triangle items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        fireEvent.click( screen.getByTestId("red"))

        fireEvent.click( screen.getByTestId("green"))

        fireEvent.click( screen.getByTestId("darkgray"))
        
        expect(screen.getByText("Multiple triangle items")).toBeInTheDocument()
    })


    test("Clicking all color button except darkgray and any color(s) should change grid title to Multiple darkgray items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("yellow"))
     
        fireEvent.click(screen.getByTestId("lightblue"))

        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("Multiple darkgray items")).toBeInTheDocument()
    })


    test("Clicking all color button except yellow and any color(s) should change grid title to Multiple yellow items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("lightblue"))

        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("Multiple yellow items")).toBeInTheDocument()
    })


    test("Clicking all color button except lightblue and any color(s) should change grid title to Multiple lightblue items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("yellow"))

        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("Multiple lightblue items")).toBeInTheDocument()
    })



    test("Clicking all color button and shape except lightblue and oval should change grid title to Oval lightblue items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))


        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("yellow"))
        
        expect(screen.getByText("Oval lightblue items")).toBeInTheDocument()
    })


    test("Clicking all color button and shape except red and triangle should change grid title to Triangle red items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click( screen.getByTestId("rectangle"))


        fireEvent.click(screen.getByTestId("lightblue"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("yellow"))
        
        expect(screen.getByText("Triangle red items")).toBeInTheDocument()
    })


    test("Clicking all color button and shape except yellow and square should change grid title to Square yellow items", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click( screen.getByTestId("rectangle"))


        fireEvent.click(screen.getByTestId("lightblue"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("red"))
        
        expect(screen.getByText("Square yellow items")).toBeInTheDocument()
    })
})