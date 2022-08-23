import Page from './page';

class MainPage extends Page {
    constructor() {
        super();
        this.elements = {
            "click me button": "[data-test=clickMeBtn]",
            "foo popup": "[data-test=fooPopup]",
            "bar popup": "[data-test=barPopup]",
        }
    }
}

export default new MainPage();
