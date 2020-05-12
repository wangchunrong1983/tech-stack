import React, {Component} from 'react';
import {CardSection} from './common';
import {LayoutAnimation, Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';


class ListItem extends Component{
  componentWillUpdate(){
    LayoutAnimation.spring();
  }
  renderDescription() {
    const {library, selectLibraryId} = this.props;
    if (library.id === selectedLibraryId) {
      return(
        <Text>{library.description}</Text>
      );
    }
  }


  render() {
    const {id, title} = this.props.library;
    

    return(
     <TouchableWithoutFeedback onPress={()=> this.props.selectLibrary(id)}>
       <View>
         <CardSection>
           <Text style={styles.titleStyle}>{title}</Text>
         </CardSection>
         {this.renderDescription}
       </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {selectedLibraryId: state.selectedLibraryId};
};

export default connect(mapStateToProps, actions)(ListItem);