import React from React

class 

componentDidMount(){
    fetch("")
    .then(Response => Response.json())
    .then(res => {
        this.setStart({ name: res.name});
    });
}


render (){
    return <h1>name: (this.state.name)</h1>
}

componentDidMount(){
    this.fetchData(this.props.personId);
}

componetDidUpdate(prevProps){

}