import React from 'react';
import Shape from './shape.jsx';
import './level.css';

//36 * 18
const COLUMNS = 20; 
const ROWS = 8;
export default class Level2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            circles: [],
            yy: [],
            odd_x: COLUMNS - 4,
            odd_y: ROWS - 2
        }
    }

    componentDidMount(){
        const c = [], yy = [];
        for(var i=0;i<ROWS;i++){
            c.push(i);
        }
        for(var y=0;y<COLUMNS;y++){
            yy.push(y)
        }
        this.setState({
            circles: c,
            yy: yy
        }, ()=>{
            this.forceUpdate();
        })
    }

    render(){
        //console.log('this.state: ', this.state.circles);
        return(
            <div>
                {this.state.circles.map((circle, index) => (
                    this.state.yy.map((y, index2) => (
                        <div key={"circle-xx-"+index+"-yy-"+index2}>
                                <Shape 
                                    id={"lvl3img" + index + "-" + index2}
                                    f_nextLevel={this.props.f_nextLevel}
                                    f_wrong={this.props.f_wrong}
                                    b_odd={index === this.state.odd_y && index2 === this.state.odd_x}
                                    oddColor={'yellow'}
                                    top={index * (100 / ROWS) + 'vh'} 
                                    left={index2 * (100 / COLUMNS) + 'vw'} />
                        </div>
                    ))
                ))}
            </div>
        );
    }
}
