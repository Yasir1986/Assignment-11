import React, { Component } from 'react';




class Cards extends Component {
   
    render(){ 
        
        return(
               <div className="Main1" key={this.props.myCoin.id}>
               <p>Name:   {this.props.myCoin.name}</p>
               <hr /> 
               <p>Id:       {this.props.myCoin.id}</p>
               <hr /> 
               <p>Symbol:   {this.props.myCoin.symbol}</p>
               <hr /> 
               <p>Rank:     {this.props.myCoin.rank}</p>
               <hr /> 
               <p>Price:    {this.props.myCoin.price_usd}</p>
             </div>
   
        );
    } 
}


export default Cards;
