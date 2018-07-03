const angular = window.angular;
const _ = window._;

import { updateForm } from './redux.js';

export const initAngular = (store) => {
    const app = angular.module('reduxApp', [window.ngReact.name]);

    app.controller('FormController', function ($scope) {
        this.form = {
            name: null,
            date: null,
            guests: null,
            location: null,
            status: null,
            segment: null
        };

        this.formChanged = () => {
            store.dispatch(updateForm(this.form));
        };

        store.subscribe(() => {
            const { form } = store.getState();
            if (!_.isEqual(this.form, form)) {
                this.form = form;
                $scope.$apply();
            }
        });
    });

    const { ReactForm } = window.exports;
    app.value('ReactForm', ReactForm);
}
