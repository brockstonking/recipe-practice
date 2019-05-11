import React, { Component } from 'react'

class Display extends Component{
    constructor(props){
        super(props)

        this.state = {
            display: false
        }
        this.toFalse = this.toFalse.bind( this )
        this.toTrue = this.toTrue.bind( this )
    }

    toTrue(){
        this.setState({
            display: true
        })
    }

    toFalse(){
        this.setState({
            display: false
        })
    }

    render(){
        let myDivStyle = {
            margin: '15px'
        }
        let imgStyle = {
            height: '200px',
            width: '200px',
            margin: '10px'
        }
        let image = this.state.display ? <img onMouseOver={ this.toTrue } style={ imgStyle } src={ this.props.image } alt='' /> : <div></div>
        return(
            <div onMouseOver={ this.toTrue } onMouseOut={ this.toFalse } style={ myDivStyle }>
                <div>
                <a href={ this.props.link } >{ this.props.name }</a>
            </div>
            <div>
                { image }
            </div>
            </div>
        )
    }
}
export default Display