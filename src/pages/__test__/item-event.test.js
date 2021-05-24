import React from 'react'
import AppPage from "../AppPage";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterAll(cleanup)


describe("Item change based on click events",  () => {
    test("Clicking color red button should remove items with the color red", () => {
        render(<AppPage />)

        let redButton = screen.getByTestId("red");
        fireEvent.click(redButton)

        let itemSection = screen.getByTestId("items")

        let result = Array.from(itemSection.children).every(el => el.firstElementChild.style.fill !== "red")

        expect(result).toBeTruthy()
    })


    test("Clicking color yellow button should remove items with the color yellow", () => {
        render(<AppPage />)

        let redButton = screen.getByTestId("yellow");
        fireEvent.click(redButton)

        let itemSection = screen.getByTestId("items")

        let result = Array.from(itemSection.children).every(el => el.firstElementChild.style.fill !== "yellow")

        expect(result).toBeTruthy()
    })

    test("Clicking round button should remove items with the round svg", () => {
        const { container } = render(<AppPage />)

        let roundButton = screen.getByTestId("round");
        fireEvent.click(roundButton)

        let circleSvg = container.querySelector(".round")

        expect(circleSvg).not.toBeInTheDocument()
    })

    test("Clicking triangle button should remove items with the triangle svg", () => {
        const { container } = render(<AppPage />)

        let button = screen.getByTestId("triangle");
        fireEvent.click(button)

        let svg = container.querySelector(".triangle")

        expect(svg).not.toBeInTheDocument()
    })
    



    test("Clicking all shape buttons except rectangle should keep only rectangle items in the DOM", () => {
        const { container } = render(<AppPage />)
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("square"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("rectangle") )
    })
    

    test("Clicking all shape button except square should keep only square items in the DOM", () => {
        const { container } = render(<AppPage />)
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("square") )
    })

    test("Clicking all shape button except oval should keep only oval items in the DOM", () => {
        const { container } = render(<AppPage />)
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("oval") )

    })


    test("Clicking all color button except darkgray should keep darkgray color items in the DOM", () => {
        const { container } = render(<AppPage />)
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("yellow"))
     
        fireEvent.click(screen.getByTestId("lightblue"))
        
        container.querySelectorAll("[data-testid=items] > svg").forEach(el => expect(el.firstElementChild).toHaveStyle("fill: darkgray") )
    })


    test("Clicking all color button except red should only red items in the DOM", () => {
        const { container } = render(<AppPage />)
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("yellow"))
     
        fireEvent.click(screen.getByTestId("lightblue"))
        
        let itemSection = screen.getByTestId("items")

        container.querySelectorAll("[data-testid=items] > svg").forEach(el => expect(el.firstElementChild).toHaveStyle("fill: red") )

    })


    test("Clicking all color button except yellow should keep only yellow items in the DOM", () => {
        const { container } = render(<AppPage />)
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("lightblue"))
        
        container.querySelectorAll("[data-testid=items] > svg").forEach(el => expect(el.firstElementChild).toHaveStyle("fill: yellow") )

    })


    test("Clicking all color button except lightblue should keep only lightblue items in the DOM", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("yellow"))

        container.querySelectorAll("[data-testid=items] > svg").forEach(el => expect(el.firstElementChild).toHaveStyle("fill: ligthblue") )

    })


    test("Clicking all shape button except oval and clicking any color button should keep only oval items of ", () => {
        const { container } = render(<AppPage />)
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        fireEvent.click( screen.getByTestId("red"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("oval") )
    })


    test("Clicking all shape button except round and clicking any color button(s) should only keep Multiple round items", () => {
        const { container } = render(<AppPage />)
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        fireEvent.click( screen.getByTestId("red"))

        fireEvent.click( screen.getByTestId("green"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("circle") )
    })

    test("Clicking all shape button except triangle and clicking any color button(s) should only keep Multiple triangle items", () => {
        const { container } = render(<AppPage />)
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        fireEvent.click( screen.getByTestId("red"))

        fireEvent.click( screen.getByTestId("green"))

        fireEvent.click( screen.getByTestId("darkgray"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("rectange") )    
    })


    test("Clicking all color button except darkgray and any color(s) should only keep Multiple darkgray items", () => {
        const { container } = render(<AppPage />)
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("yellow"))
     
        fireEvent.click(screen.getByTestId("lightblue"))

        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        container.querySelectorAll("item").forEach(el => expect(el).toHaveStyle("fill: darkgray") )
    })


    test("Clicking all color button except yellow and any color(s) should only keep Multiple yellow items", () => {
        const { container } = render(<AppPage />)
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("lightblue"))

        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        let itemSection = screen.getByTestId("items")

        container.querySelectorAll("item").forEach(el => expect(el).toHaveStyle("fill: yellow") )

    })


    test("Clicking all color button except lightblue and any color(s) should only keep Multiple lightblue items", () => {
        const { container } = render(<AppPage />)
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("yellow"))

        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        container.querySelectorAll("item").forEach(el => expect(el).toHaveStyle("fill: lightblue") )

    })



    test("Clicking all color button and shape except lightblue and oval should ony keep Oval items with lightblue color", () => {
        const { container } = render(<AppPage />)
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

        container.querySelectorAll("item").forEach(el => expect(el).toHaveClass("circle") )
        container.querySelectorAll("item").forEach(el => expect(el).toHaveStyle("fill: darkgray") )
    })


    test("Clicking all color button and shape except red and triangle should change only keep Triangle items with red color", () => {
        const { container } = render(<AppPage />)
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

        container.querySelectorAll("item").forEach(el => expect(el).toHaveClass("triangle") )
        container.querySelectorAll("item").forEach(el => expect(el).toHaveStyle("fill: yellow") )

    })


    test("Clicking all color button and shape except yellow and square should only keep square items with yellow color", () => {
        const { container } = render(<AppPage />)
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

        container.querySelectorAll("item").forEach(el => expect(el).toHaveClass("rectangle") )
        container.querySelectorAll("item").forEach(el => expect(el).toHaveStyle("fill: yellow") )
    })
})