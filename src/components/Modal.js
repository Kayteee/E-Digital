import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal'


const ModalBox = props => {
    
    //console.log('props',props);
    //console.log('props.data', props.data);
    
  if(props.data){
      return ReactDOM.createPortal(
        <Modal.Dialog >
        <Modal.Header>
          <Modal.Title>{props.data.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The Family name is {props.data.Family}</p><br/>
          <img style={{width:'450px'}}src={props.data.ImageURLs.FullSize} alt={props.data.Title}/>
        </Modal.Body> 
        <Modal.Footer>
          <button onClick={() => props.history.push('/')}>Back to Hompage</button>
      </Modal.Footer>
      </Modal.Dialog>,document.querySelector('#modal')
  )
  }else{
    //console.log('else condition')
    props.history.push('/');
    return  null;
  }
}



const mapStateToProps = (state, ownProps) => {
    const detail = state.apiData.find((data) => {

        if(parseInt(data.Id) === parseInt(ownProps.match.params.Id)){
            return data;
        }
    })
    return { data : detail};
}

export default connect(mapStateToProps)(ModalBox);
