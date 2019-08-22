import React from 'react';
import {connect} from 'react-redux';
import history from './history';
import './sytlecss/style.css';
import logo from'./image/logo.png';
import {fetchAnimals, fetchVeggies} from '../actions'

class PostList extends React.Component{


    renderList=()=> {
        //console.log(this.props.apiData);
        return this.props.apiData.map(detail => {
            //console.log('detail', detail);
          return (
            <div className="container"  key={detail.Title}>
              <div >{detail.Title}</div>
              <div >{detail.Description}</div>
              <div onClick={()=>history.push(`/modalbox/${detail.Id}`)} ><img src={detail.ImageURLs.Thumb} alt={detail.Title}/></div>
            </div>
          );
        });
    }
    
    render() {
        return (
            <div>
                <img src={logo} alt="logo"/>
                <button  onClick={() => this.props.fetchAnimals()}>
                    Animals
                </button>
                <button onClick = {() => this.props.fetchVeggies()} >Veggies</button>
                {this.renderList()}
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {apiData:state.apiData};  
};

export default connect(
    mapStateToProps,
    {fetchAnimals,fetchVeggies }
  )(PostList);
