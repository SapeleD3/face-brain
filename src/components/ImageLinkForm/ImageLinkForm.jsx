import React from 'react'
import './linkform.css'



class ImageLinkForm extends React.Component{
    render() {
        return (
            <div>
                <p className='f3 tc'>{'This Magic Brain wil detect face in yor Picture.'}</p>

                <div className='center'>
                    <div className='form center pa3 br3 shadow-5'>
                        <input className='f4 pa2 w-70 center' type="text" onChange={this.props.onInputChange}/>
                        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
                        onClick={this.props.onSubmit}
                        >Detect</button>
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default ImageLinkForm