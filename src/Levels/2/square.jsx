import React from 'react';
import '../../Shape/shape.css';

const SIZE = "32px" // 10 // 20
var count = 0;
export default class Square extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // Change these values to turn into hues
            color: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
            //color: 'white',
            opacity: `${Math.random()}`,
            width: SIZE,
            height: SIZE,
            left: props.left,
            top: props.top,
            b_odd: props.b_odd,
            oddColor: props.oddColor,
            currentNumber: 0,
            id: props.id,
            index: props.index,
            column: props.column
        }
    }

    componentDidMount(){
        // setTimeout(()=>{
        //     var count=0;
        //     setInterval(()=>{
        //         count++;
        //         if(count === 2)
        //             count = 0;
        //         // else if(count === 2)                
        //         //     count = -1;
        //         document.getElementById(this.props.id).innerHTML = this.getString(count);
        //     }, this.getAnimationSpeed());
        // }, 2000);
    }

    getString(count){
        switch(count){
            case 0: return '❤️';
            case 1: return '💔';
        }
    }

    getAnimationSpeed(){
        return 5000;
    }

    render(){
        return(
            <div 
                id={this.props.id}
                onClick={()=>{
                    if(this.state.b_odd)
                        this.props.f_nextLevel();
                    // else 
                    //     this.props.f_wrong();
                }}
                className="shape-square shape2" 
                style={{
                    color: 'white',
                    width: `${this.state.width}`,
                    height: `${this.state.height}`,
                    top: `${this.state.top}`,
                    left: `${this.state.left}`,
                    animationDuration: `${this.getAnimationSpeed() + 'ms'}`,
                    animationName: `${this.state.b_odd ? "updateOdd" : "update"}`
                }}
            >|
                {/* {this.props.count % 2 == 0 ? 1 : 0} */}
            </div>
        );
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

  //width: "32px",
  //height: "32px",