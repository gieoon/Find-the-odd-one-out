import React from 'react';
import '../../Shape/shape.css';
import stockphoto from '../../assets/zigario.jpg';

const SIZE = "32px" // 10 // 20
export default class Shape extends React.Component {
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
            x: Number(props.left.replace(/[a-zA-Z]/g,'')),
            y: Number(props.top.replace(/[a-zA-Z]/g,'')),
            v_x: Math.random() / 2.0,
            v_y: Math.random() / 2.0,
            polarity_x: getRandomInt(2) === 1 ? -1 : 1,
            polarity_y: getRandomInt(2) === 1 ? -1 : 1,
            b_odd: props.b_odd,
            oddColor: props.oddColor
        }
    }

    componentDidMount(){
        // Get one random CSS filter
        
    }

    getRandomFilter(str){
        var r = getRandomInt(6) + 1;
        var str = str || '';
        switch(r){
            //case 0: return {filter: `brightness(${getRandomInt(100)}%)`};
            case 1: str += ` contrast(${getRandomInt(200)+100}%)`;
            case 2: str +=` grayscale(${getRandomInt(200)}%)`;
            case 3: str += ` hue-rotate(${getRandomInt(360)}deg)`;
            case 4: str += ` invert(${getRandomInt(20)}%)`;
            case 5: str += ` sepia(${getRandomInt(300)}%)`;
            case 6: str += ` saturate(${getRandomInt(300)}%)`;
        }
        if(getRandomInt(2) === 0)
            return {filter: str};
        else {
            return this.getRandomFilter(str);
        }
    }

    render(){
        return(
            <div 
                onClick={()=>{
                    if(this.state.b_odd)
                        this.props.f_nextLevel();
                    // else 
                    //     this.props.f_wrong();
                }}
            //this.state.b_odd
                className="shape-square" 
                style={{
                    width: "fit-content",
                    height: "fit-content",
                    top: `${this.state.top}`,
                    left: `${this.state.left}`,
                    // margin: "6px"
                }}
            >
                <img style={
                    this.state.b_odd ? {} : this.getRandomFilter()
                }
                    src={stockphoto} className="lvl3img" id={this.props.id} />
            </div>
        );
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
