import React from 'react';

const withAnimal = WrappedComponent => {

    class WithAnimal extends React.Component {
        state = {
            name: 'cat',
            count: 0
        }

        addCount = () => {
            this.setState({
                count: this.state.count + 1
            })
        }

        render() {
            return (
                <div>
                    <WrappedComponent name={this.state.name} addCount={this.addCount} count={this.state.count} />
                </div>
            )
        }
    }

    return WithAnimal;

}



export default withAnimal;