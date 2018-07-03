const React = window.React;
const { Provider, connect } = window.ReactRedux;

const { updateForm } = window.actionCreators;

const ReduxProvider = (store, children) => (
    () => (
        <Provider store={store}>
            {children()}
        </Provider>
    )
);

class ReactForm extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <label>Name: </label>
                        <span>{this.props.name}</span>
                    </div>
                    <div>
                        <label>Date: </label>
                        <span>{this.props.date}</span>
                    </div>
                    <div>
                        <label>Guests: </label>
                        <span>{this.props.guests}</span>
                    </div>
                </div>
                <form onChange={this.formChanged}>
                    <div>
                        <label>Location</label>
                        <input
                            name="location"
                            defaultValue={this.props.location}
                        />
                    </div>
                    <div>
                        <label>Status</label>
                        <input
                            name="status"
                            defaultValue={this.props.status}
                        />
                    </div>
                    <div>
                        <label>Segment</label>
                        <input
                            name="segment"
                            defaultValue={this.props.segment}
                        />
                    </div>
                </form>
            </div>
        );
    }

    formChanged = ({ target }) => {
        this.props.updateForm({ [target.name]: target.value });
    }
}

const mapStateToProps = (state) => ({ ...state.form });
const mapDispatchToProps = (dispatch) => (
    {
        updateForm: (payload) => (dispatch(updateForm(payload)))
    }
);
const FormContainer = connect(mapStateToProps, mapDispatchToProps)(ReactForm);

export const initReact = (store) => {
    exports.ReactForm = ReduxProvider(store, () => <FormContainer />);
}
