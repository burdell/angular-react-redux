import { initAngular } from './angular-app.js';
import { createstore } from './redux.js';

const store = createstore();

store.subscribe(() => {
    const { form } = store.getState();

    setEl('name-display', form.name);
    setEl('date-display', form.date);
    setEl('guests-display', form.guests);
    setEl('location-display', form.location);
    setEl('status-display', form.status);
    setEl('segment-display', form.segment);
});

function setEl(className, value) {
    const el = document.getElementsByClassName(className);
    if (el) {
        el[0].innerHTML = value;
    }
}

setTimeout(() => {
    initReact(store);
    initAngular(store);

    angular.element(document.getElementById("angular-app")).ready(() => {
        angular.bootstrap(document, ['reduxApp']);
    });
}, 200);
