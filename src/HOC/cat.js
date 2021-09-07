import React, { PureComponent } from 'react';
import withAnimal from './index.js';

class Cat extends PureComponent {
    render() {
        return (
            <div>
                {this.props.name}
                <button onClick={this.props.addCount}>add</button>
                {this.props.count}
            </div>
        )
    }
}


export default withAnimal(Cat);