import React from 'react'
import AppPage from "../AppPage";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterAll(cleanup)

beforeEach(() => {
    render(<AppPage />)
})

describe("Grid title change based on click events",  () => {
    test("Clicking a color button should make the button inactive", () => {
        let redButton = screen.getByTestId("red");
        fireEvent.click(redButton)
        expect(redButton).toHaveStyle("border-color: darkgray")
     
        let royalblueButton = screen.getByTestId("royalblue");
        fireEvent.click(royalblueButton)
        expect(royalblueButton).toHaveStyle("border-color: darkgray")
     
        let greenButton = screen.getByTestId("green");
        fireEvent.click(greenButton)
        expect(greenButton).toHaveStyle("border-color: darkgray")
     
        let yellowButton = screen.getByTestId("yellow");
        fireEvent.click(yellowButton)
        expect(yellowButton).toHaveStyle("border-color: darkgray")
     
        let lightblueButton = screen.getByTestId("lightblue");
        fireEvent.click(lightblueButton)
        expect(lightblueButton).toHaveStyle("border-color: darkgray")
     
    })
    
    
    test("Clicking a shape button should make the button inactive", () => {
        let ovalButton = screen.getByTestId("oval");
        fireEvent.click(ovalButton)
        expect(ovalButton).toHaveStyle("border-color: darkgray")
     
        let roundButton = screen.getByTestId("round");
        fireEvent.click(roundButton)
        expect(roundButton).toHaveStyle("border-color: darkgray")
     
        let triangleButton = screen.getByTestId("triangle");
        fireEvent.click(triangleButton)
        expect(triangleButton).toHaveStyle("border-color: darkgray")
     
        let squareButton = screen.getByTestId("square");
        fireEvent.click(squareButton)
        expect(squareButton).toHaveStyle("border-color: darkgray")
    
    })

    test("Clicking all shape buttons should make the buttons inactive and active after the last button click", () => {
        let shapesDiv = screen.getByTestId("shapes");

        Array.from(shapesDiv.children).forEach((el) => {
            fireEvent.click(el)
        })
             
        let roundButton = screen.getByTestId("round");
        expect(roundButton).toHaveStyle("border-color: blue")
    })


    test("Clicking all color buttons should make the buttons inactive and active after the last button click", () => {
        let shapesDiv = screen.getByTestId("colors");

        Array.from(shapesDiv.children).forEach((el) => {
            fireEvent.click(el)
        })
             
        let roundButton = screen.getByTestId("red");
        expect(roundButton).toHaveStyle("border-color: blue")
    })

    test("Clicking a shape button should change the grid title to 'Multiple items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();


        let roundButton = screen.getByTestId("round");
        fireEvent.click(roundButton)
        
        let gridTitle2 = screen.getByText("Multiple items")
        expect(gridTitle2).toBeInTheDocument()
    })


    test("Clicking a color button should change the grid title to 'Multiple items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();


        let roundButton = screen.getByTestId("green");
        fireEvent.click(roundButton)
        
        let gridTitle2 = screen.getByText("Multiple items")
        expect(gridTitle2).toBeInTheDocument()
    })

    test("Clicking all shape button except rectangle should change the grid title to 'All rectangle items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("square"))
        
        expect(screen.getByText("All rectangle items")).toBeInTheDocument()
    })
    

    test("Clicking all shape button except square should change the grid title to  'All square items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("oval"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("All square items")).toBeInTheDocument()
    })

    test("Clicking all shape button except oval should change the grid title to 'All oval items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("All oval items")).toBeInTheDocument()
    })


    test("Clicking all color button except darkgray should change the grid title to 'All darkgray items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("yellow"))
     
        fireEvent.click(screen.getByTestId("lightblue"))
        
        expect(screen.getByText("All darkgray items")).toBeInTheDocument()
    })


    test("Clicking all color button except red should change the grid title to 'All red items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("yellow"))
     
        fireEvent.click(screen.getByTestId("lightblue"))
        
        expect(screen.getByText("All red items")).toBeInTheDocument()
    })


    test("Clicking all color button except yellow should change the grid title to 'All yellow items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("lightblue"))
        
        expect(screen.getByText("All yellow items")).toBeInTheDocument()
    })


    test("Clicking all color button except lightblue should change the grid title to 'All lightblue items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click(screen.getByTestId("yellow"))
        
        expect(screen.getByText("All lightblue items")).toBeInTheDocument()
    })


    test("Clicking some color button should change the grid title to 'Multiple items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("darkgray"))
     
        fireEvent.click(screen.getByTestId("royalblue"))
        
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })


    test("Clicking some color button should change the grid title to 'Multiple items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();
     
        fireEvent.click(screen.getByTestId("yellow"))
        
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })


    test("Clicking some color button should change the grid title to 'Multiple items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

     
        fireEvent.click(screen.getByTestId("royalblue"))
     
        fireEvent.click(screen.getByTestId("green"))
     
        fireEvent.click(screen.getByTestId("red"))
             
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })
    

    test("Clicking some shape button should change the grid title to 'Multiple items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })


    test("Clicking some shape button should change the grid title to 'Multiple items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
    
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })


    test("Clicking some shape button should change the grid title to 'Multiple items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))
        
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })


    test("Clicking some shape button and color button should change the grid title to 'Multiple items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("red"))
     
        fireEvent.click( screen.getByTestId("green"))
        
        expect(screen.getByText("Multiple items")).toBeInTheDocument()
    })


    test("Clicking all shape button except oval and clicking any color button should change the grid title to 'Multiple oval items'", () => {
        let gridTitle = screen.getByText("All items")
        expect(gridTitle).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("square"))
     
        fireEvent.click(screen.getByTestId("round"))
     
        fireEvent.click(screen.getByTestId("triangle"))
     
        fireEvent.click( screen.getByTestId("rectangle"))

        fireEvent.click( screen.getByTestId("red"))
        
        expect(screen.getByText("Multiple oval items")).toBeInTheDocument()
    })


    test("Clicking all shape button except round and clicking any color button(s) should change the grid title to 'Multiple round items'", () => {
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

    test("Clicking all shape buttons except triangle and clicking any color button(s) should change the grid title to 'Multiple triangle items'", () => {
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


    test("Clicking all color button except darkgray and any color(s) should change the grid title to 'Multiple darkgray items'", () => {
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


    test("Clicking all color button except yellow and any color(s) should change the grid title to 'Multiple yellow items'", () => {
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


    test("Clicking all color button except lightblue and any color(s) should change the grid title to 'Multiple lightblue items'", () => {
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



    test("Clicking all color button and shape except lightblue and oval should change the grid title to 'Oval lightblue items'", () => {
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


    test("Clicking all color button and shape except red and triangle should change the grid title to 'Triangle red items'", () => {
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


    test("Clicking all color button and shape except yellow and square should change the grid title to 'Square yellow items'", () => {
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
