import React from 'react';
import Card from 'react-bootstrap/Card'

class EditNote extends React.Component {

    static getDerivedStateFromProps(props, state) {
        if (props.note !== state.note) {
            return { note: props.note, edit: false };
        }
        return null;
    }

    constructor({ note }) {
        super()
        this.state = {
            edit: false,
            note: note
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (!this.state.edit) {
            this.setState({
                edit: true
            })
        }
        else {
            this.props.updateNote(this.state.note)
            this.setState({
                edit: false
            })
        }
    }

    setFormData = (event) => {

        let note = this.state.note
        note.detail = event.target.value
        this.setState({
            note: note
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>View Note</Card.Header>
                    <Card.Body>
                        <form onSubmit={this.handleSubmit}>
                            <fieldset>
                                <label>
                                    <textarea name="detail" disabled={!this.state.edit} onChange={this.setFormData} required value={this.state.note.detail} />
                                </label>
                            </fieldset>
                            <button type="submit">{this.state.edit ? 'Save Changes' : 'Edit'}</button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}


export default EditNote;