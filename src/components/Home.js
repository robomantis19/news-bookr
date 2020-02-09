import React from 'react';
import { connect } from 'react-redux'; 
import { setPocket } from '../Redux/Actions';

function Home() { 



    return (
        <div>
            Welcome Home.
            <button onClick={setPocket({consumer_key: '89776-ae09204f9d4913e465d8642b', redirect_uri: 'https://xenodochial-bardeen-1bef0f.netlify.com/profile'})}>submit for token</button>

        </div>
    )
}
const mapStateToProps = (state) => { 
    return {
        isFetchingPocketDeveloper: state.isFetchingPocketDeveloper,  
        isFetchingPocketDeveloperError: state.isFetchingPocketDeveloperError
    }
}

export default connect(mapStateToProps, 
    {setPocket}
)(Home); 