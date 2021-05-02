import React from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

class AddNote extends React.Component {

    constructor() {
        super()
        this.state = {
            title: '',
            detail: ''
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNoteHandler(this.state)
    }

    setFormData = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>Add Note</Card.Header>
                    <Card.Body>
                        <form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Title" name='title' onChange={this.setFormData} required value={this.state.title}  />
                                </Form.Group>
                                <Form.Group controlId="formDetail">
                                    <Form.Label>Detail</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter Details" name="detail" onChange={this.setFormData} required value={this.state.detail} />
                                </Form.Group>
                            <button type="submit">Submit</button>
                        </form>
                    </Card.Body>
                </Card>
            </div>




        );
    }
}


export default AddNote;