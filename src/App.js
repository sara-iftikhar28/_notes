import './App.css';
import React from 'react'
import AddNote from './components/AddNote/AddNote'
import ListNote from './components/ListNote/ListNote'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EditNote from './components/EditNote/EditNote';
import Header from './components/Navbar/Navbar'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      notes: [
        {title:'title1',detail:'detail1'},
        {title:'title2',detail:'detail2'},
        {title:'title3',detail:'detail3'},
        {title:'title4',detail:'detail4'},
      ],
      selectedIndex:null
    }
  }

  addNote = (newNote)=>{
    this.setState(prevState => ({
      notes: [...prevState.notes, newNote],
    }));
  }

  selectNote = (index)=>{
    this.setState({
      selectedIndex:index
    })
  }

  updateNote = (note)=>{
    let notes = this.state.notes
    notes[this.state.selectedIndex] = note
    this.setState({
      notes:notes
    })
  }

  deleteNote =(index) =>  {
    let notes = [...this.state.notes];
    notes.splice(index, 1);
    this.setState({notes: notes});
  }

  getSeletectedNote= () => {
    if(this.state.selectedIndex != null){
      return this.state.notes[this.state.selectedIndex]
    }
    return null
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row md={12}>
            <Col ><AddNote addNoteHandler={this.addNote} /></Col>
            <Col ><ListNote notes={this.state.notes} selectNote={this.selectNote} selectedIndex={this.state.selectedIndex} deleteNote={this.deleteNote}/></Col>
              {this.state.selectedIndex != null && <Col ><EditNote  note={this.getSeletectedNote()} updateNote={this.updateNote} /></Col>}
          </Row>
        </Container>
      </div>

    );
  }
}

export default App;
