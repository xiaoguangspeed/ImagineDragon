import React, {Component} from 'react';


class Rect extends Component{

    componentDidMount(){
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle  = 'green';
        ctx.fillRect(10,10,100,100)
    }
    render(){
        return(
            <canvas id="canvas">

            </canvas>
        )
    }
}

export default Rect;