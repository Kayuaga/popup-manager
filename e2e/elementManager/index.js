export const click = async (selector) => {
    return $(selector).click()
}

export const isVisible = async (selector) => {
    const element = $(selector)
    return expect(element).toBeDisplayed()
}

export const isNotExist = async (selector) => {
    const element = $(selector)
    const isExist =  element.isDisplayed();
    expect(isExist).toBe(false)
}


export const  openPage = (url) => {
    const urlMap = {
        "main page": '/'
    }
    return browser.url(url)
}