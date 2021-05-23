import React from 'react'
import App from "../../App";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import db from "../../database.json"

afterAll(cleanup)

beforeEach(() => {
    render(<App />)
})


describe("Test authenication functionality", () => {
    test("App should be logged out by default", () => {
        let loginBtn = screen.getByText("Login 🔓")

        expect(loginBtn).toBeInTheDocument()
    })


    test("Grid App should not show by default", () => {
        let filterText = screen.queryByText("Filters")

        expect(filterText).not.toBeInTheDocument()
    })


    test("Clicking the login btn should open the grid app", () => {
        let loginBtn = screen.getByText("Login 🔓");
        fireEvent.click(loginBtn);

        let filterText = screen.queryByText("Filters")

        expect(filterText).toBeInTheDocument()
    })

    test("Clicking the login btn should change to logout", () => {
        let loginBtn = screen.getByText("Login 🔓");
        fireEvent.click(loginBtn);

        let logoutBtn = screen.getByText("Logout 🔒")

        expect(logoutBtn).toBeInTheDocument()
    })


    test("Clicking the logout btn should log use out", () => {
        let loginBtn = screen.getByText("Login 🔓");
        fireEvent.click(loginBtn);

        let logoutBtn = screen.getByText("Logout 🔒")
        fireEvent.click(logoutBtn);

        let filterText = screen.queryByText("Filters")

        expect(filterText).not.toBeInTheDocument()
    })
})
