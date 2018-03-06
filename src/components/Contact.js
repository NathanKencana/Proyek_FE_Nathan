import React, { Component } from 'react';

class Contact extends Component{
    render(){
        return(
            <div>
                <form>
                    <p/><textarea placeholder="Input your Inquiries here" />
                    <p/><button type="submit"> Send </button>
                </form>
            </div>
        );
    }
}

export default Contact