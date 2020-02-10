import React from 'react';
import { connect } from 'react-redux'; 
import { setPocket } from '../Redux/Actions';
import {useHistory} from 'react-router-dom'; 
function Home(props) { 

    // console.log(props.isFetchingPocketDeveloper);
    const history = useHistory();
    
    return (
        <div>
            Welcome Home.
            <button onClick={() => props.setPocket({consumer_key: '89776-ae09204f9d4913e465d8642b', redirect_uri: 'https://xenodochial-bardeen-1bef0f.netlify.com/profile'})}>submit for token</button>
            {props.pocket_token !== false && !props.isFetchingPocketDeveloper   ? window.location.replace(`https://getpocket.com/auth/authorize?request_token=${props.pocket_token}&redirect_uri=https://xenodochial-bardeen-1bef0f.netlify.com/profile`): console.log(props.pocket_token)}
            {console.log(props.pocket_token)}
            
        </div>
    )
}
const mapStateToProps = state => { 
    return {
        pocket_token: state.pocket_token, 
        isFetchingPocketDeveloper: state.isFetchingPocketDeveloper,  
        isFetchingPocketDeveloperError: state.isFetchingPocketDeveloperError
    }
}

export default connect(mapStateToProps, 
    {setPocket}
)(Home); 