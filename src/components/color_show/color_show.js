import React, { Component } from 'react';
import './color_show.css';

class Colors extends Component {
    render () {
        return (
            <div className='parentDiv'>
                <div className='textHolder'>
                    <p className='poweredBy'>POWERED BY</p>
                    <h3 className='companyTitle'>KING SECURITY GROUP</h3>
                </div>
                <div className='colorShower'>
                    <div className='colorOne'>
                        <p className='colorOneName'>#8BD8BD</p>
                    </div>
                    <div className='colorTwo'>
                        <p className='colorTwoName'>#243665</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Colors;