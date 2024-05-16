"use strict";


class Home {
    constructor () {
        const element = document.createElement('div');
        element.classList.add('home');
        
        const linkSettings = document.createElement('a');
        linkSettings.classList.add('link')
        linkSettings.setAttribute('href', '/sfera.json');
        linkSettings.append('Sfera options')
        element.append(linkSettings);

        this.element = element
    }

    setStatusName(name) {
        this.status.setName(name)
    }
}

const home = new Home();
document
    .getElementById('root')
    .append(home.element)

