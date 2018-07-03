const { applyMiddleware, combineReducers, compose, createStore } = window.Redux;

export const formActions = {
    UPDATE_FORM: "Form/UPDATE_FORM"
};

const initialFormState = {
    name: null,
    date: null,
    guests: null,
    location: null,
    status: null,
    segment: null
};

const form = (state = initialFormState, { type, payload }) => {
    switch (type) {
        case formActions.UPDATE_FORM:
            return { ...state, ...payload };
        default:
            return state;
    }
};

export const updateForm = (payload) => (
    { type: formActions.UPDATE_FORM, payload }
);
window.actionCreators = { updateForm };

const reducers = combineReducers({ form })
const middleware = applyMiddleware();

export const createstore = () => {
    return middleware(createStore)(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
