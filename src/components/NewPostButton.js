import {connect} from 'react-redux';
import React from "react";

const NewPostButton = props => <button style={{color: props.theme.color}}>Create New Post</button>;

export const mapStateToProps = state => ({
  theme: state.themeState.theme
});

export default connect(mapStateToProps)(NewPostButton);
