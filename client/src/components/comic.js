import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from './search.js';
import Cards from './cards';
import CardsViewer from './cardsViewer';
import Editing from './editing';
import {getComic} from '../actions/protected-data';
import {
  searchGiphs,
  selectGiph,
  save,
  edit,
  selectCard,
  handleChange,
  saveComic
} from '../reducers/counter';

class Comic extends React.Component
{
  componentDidMount()
  {
    console.log(this);
    this.props.getComic(this.props.match.params.id);
      //this.props.dispatch(getComic());
  }
  render()
  {
    const props = this.props;
    return ( <div>
      <h1>My Giphy Comic</h1>

        <Search searchGiphs={props.searchGiphs} />
  {props.editingCard}
        <Editing {...props} butName={ (props.editingCard === null) ? 'New Cell' : 'edit' }/>

        <Cards {...props}/>

        <CardsViewer {...props}/>


        <button className="text skew" onClick={()=>saveComic(props, this)}>Save Comic</button>



    </div> );
  }
}
//const Comic = props => (

const mapStateToProps = state => (
  {
  giphs: state.counter.giphs,
  giph: state.counter.giph,
  editing: state.counter.editing,
  cards: state.counter.cards,
  id: state.counter.id,
  editingCard: state.counter.editingCard,
  textBox: state.counter.textBox,
  slider: state.counter.slider,
  textSelect: state.counter.textSelect,
  auth: state.auth,
  protectedData: state.protectedData.cards
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchGiphs,
      selectGiph,
      save,
      edit,
      selectCard,
      handleChange,
      saveComic,
      getComic
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Comic);
