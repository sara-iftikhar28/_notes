import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Trash } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card'

class ListNote extends Component {

  getVarient = (index) => {

    let str = ''
    if (this.props.selectedIndex !== null && this.props.selectedIndex == index) {

      str = 'primary'
    }

    return str
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Header>All My Notes</Card.Header>
          <Card.Body>
            <ListGroup>
              {this.props.notes.map((note, index) => {
                return (
                  <ListGroup.Item action variant={this.getVarient(index)} onClick={() => this.props.selectNote(index)} key={index} >
                    {note.title}
                    <Button variant="danger" size='sm' className="float-right remove-item" onClick={() => this.props.deleteNote(index)}>
                      <Trash size={15} />
                    </Button>
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default ListNote