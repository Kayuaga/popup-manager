import { Given, When, Then } from '@wdio/cucumber-framework';

import MainPage from '../pageobjects/main.page';
import {click, isVisible, openPage} from "../../elementManager";

const pages = {
    'main page': MainPage
}

let currentPage = {}

const setPage = (pageName)=> {
    currentPage = pages[pageName]
}

Given("I am opening {string}", async (pageName)=> {
    await openPage(pageName.toLowerCase())
})

Given("I am on the {string}", async (pageName) => {
    setPage(pageName.toLowerCase())
});

When('I click {string}', async (elementName) => {
    const selector = currentPage.elements[elementName.toLowerCase()]
    await click(selector)
});

Then('{string} is displayed', async (elementName)=> {
    const selector = currentPage.elements[elementName.toLowerCase()]
    await isVisible(selector)
    await browser.pause(3000)
})

