import React from 'react'

class Rank extends React.Component{
    render() {
        return(
            <div>
                <div className=' tc white f3'>
                    {`${this.props.name} your current Rank is: `}
                </div>
                <div className=' tc white f2'>
                    {this.props.entries}
                </div>
            </div>
        )
    }
}

export default Rank