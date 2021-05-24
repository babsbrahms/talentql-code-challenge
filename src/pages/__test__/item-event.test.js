import React from 'react'
import AppPage from "../AppPage";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup)


describe("Item change based on click events",  () => {
    test("Clicking the red color button should remove items with the red color", () => {
        render(<AppPage />)

        let redButton = screen.getByTestId("red");
        fireEvent.click(redButton)

        let itemSection = screen.getByTestId("items")

        let result = Array.from(itemSection.children).every(el => el.firstElementChild.style.fill !== "red")

        expect(result).toBeTruthy()
    })


    test("Clicking the yellow color button should remove items with the yellow color ", () => {
        render(<AppPage />)

        let redButton = screen.getByTestId("yellow");
        fireEvent.click(redButton)

        let itemSection = screen.getByTestId("items")

        let result = Array.from(itemSection.children).every(el => el.firstElementChild.style.fill !== "yellow")

        expect(result).toBeTruthy()
    })

    test("Clicking the round shape button should remove round svg items", () => {
        const { container } = render(<AppPage />)

        let roundButton = screen.getByTestId("round");
        fireEvent.click(roundButton)

        let svg = container.querySelector(".round")

        expect(svg).not.toBeInTheDocument()
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

        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("square"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("rectangle") )
    })
    

    test("Clicking all shape buttons except square should keep only square items in the DOM", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("square") )
    })

    test("Clicking all shape buttons except oval should keep only oval items in the DOM", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("oval") )

    })


    test("Clicking all color buttons except darkgray should keep darkgray colored items in the DOM", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("yellow"))
     
        fireEvent.click(screen.getByTestId("lightblue"))
        
        let items = Array.from(container.querySelectorAll(".item"));

        if (items.length > 0) {
            items.forEach(el => expect(el).toHaveClass("darkgray") )
        }
       
    })


    test("Clicking all color buttons except red should only keep red colored items in the DOM", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("yellow"))
     
        fireEvent.click(screen.getByTestId("lightblue"))

        let items = Array.from(container.querySelectorAll(".item"));

        if (items.length > 0) {
            items.forEach(el => expect(el).toHaveClass("red") )
        } else {
            expect(container.querySelector("red")).not.toBeInTheDocument()
        }

    })




    test("Clicking all color button except lightblue should keep only lightblue items in the DOM", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("yellow"))

        let items = Array.from(container.querySelectorAll(".item"));

        if (items.length > 0) {
            items.forEach(el => expect(el).toHaveClass("lightblue") )
        }

    })


    test("Clicking all shape button except oval and clicking any color button should keep only oval items of ", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        fireEvent.click( screen.getByTestId("red"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("oval") )
        
    })


    test("Clicking all shape button except round and clicking any color button(s) should only keep Multiple round items", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        fireEvent.click( screen.getByTestId("red"))

        fireEvent.click( screen.getByTestId("green"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("round") )
    })

    test("Clicking all shape buttons except triangle and clicking any color button(s) should only keep Multiple triangle items", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        fireEvent.click( screen.getByTestId("red"))

        fireEvent.click( screen.getByTestId("green"))

        fireEvent.click( screen.getByTestId("darkgray"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("triangle") )    
    })


    test("Clicking all color button except darkgray and any color(s) should only keep Multiple darkgray items", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("yellow"))
     
        fireEvent.click(screen.getByTestId("lightblue"))

        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("darkgray") )
    })


    test("Clicking all color button except yellow and any color(s) should only keep Multiple yellow items", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("lightblue"))

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("yellow") )

    })


    test("Clicking all color button except lightblue and any color(s) should only keep Multiple lightblue items", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("yellow"))

        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        let items = Array.from(container.querySelectorAll(".item"));

        if (items.length > 0) {
            items.forEach(el => expect(el).toHaveClass("lightblue") )

        }
        
    })



    test("Clicking all color button and shape except lightblue and oval should ony keep Oval items with lightblue color", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("yellow"))

        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("oval") )
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("lightblue") )
    })


    test("Clicking all color button and shape except red and triangle should change only keep Triangle items with red color", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        fireEvent.click(screen.getByTestId("lightblue"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("yellow"))

        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("triangle") )
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("red") )

    })


    test("Clicking all color button and shape except yellow and square should only keep square items with yellow color", () => {
        const { container } = render(<AppPage />)

        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click( screen.getByTestId("rectangle"))


        fireEvent.click(screen.getByTestId("lightblue"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("red"))

        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("square") )
        container.querySelectorAll(".item").forEach(el => expect(el).toHaveClass("yellow") )
    })
})