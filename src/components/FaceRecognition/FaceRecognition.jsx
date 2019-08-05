import React from 'react'
import './faceRoc.css'

class FaceRecognition extends React.Component{
    render() {
        const {box} = this.props

       return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img id='inputImage' src={this.props.imageUrl} alt="" width='500px' height='auto'/>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
            
        </div>)
    }
}

export default FaceRecognition;