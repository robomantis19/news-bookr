import React, {useEffect} from 'react';
import { connect } from 'react-redux'; 
import { setPocket } from '../Redux/Actions';
import {useHistory} from 'react-router-dom'; 
function Home(props) { 

    // console.log(props.isFetchingPocketDeveloper);
    const history = useHistory();
    useEffect(() => { 
        console.log('useEffect token', props.pocket_token)
    },[props.pocket_token])
    return (
        <div>
            Welcome Home.
            <button onClick={() => props.setPocket({consumer_key: '89776-ae09204f9d4913e465d8642b', redirect_uri: 'https://xenodochial-bardeen-1bef0f.netlify.com/profile'})}>submit for token</button>
            {/* {props.pocket_token && !props.isFetchingPocketDeveloper == true? console.log('hi there, here is the token:', props.pocket_token) : console.log('...waiting for token')} */}
            {props.pocket_token && !props.isFetchingPocketDeveloper ? window.location.replace(`https://getpocket.com/auth/authorize?request_token=${props.pocket_token}&redirect_uri=https://xenodochial-bardeen-1bef0f.netlify.com/profile`) : '...waiting for token'}
            
            
        </div>
    )
}
const mapStateToProps = ({dsReducer}) => { 
    return {
        pocket_token: dsReducer.pocket_token, 
        isFetchingPocketDeveloper: dsReducer.isFetchingPocketDeveloper,  
        isFetchingPocketDeveloperError: dsReducer.isFetchingPocketDeveloperError
    }
}

export default connect(mapStateToProps, 
    {setPocket}
)(Home); 