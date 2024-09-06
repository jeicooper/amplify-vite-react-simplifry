import { useEffect, useState } from "react";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import PreLoginNav from './Navigation/PreLoginNav';
import SummerMix from "./Mixes/SummerMix";


function Login() {
    
    const [showSummerMix, setShowSummerMix] = useState(false);
    useEffect(() => {
        
    }, []);   

    
    function summermixes() {
        setShowSummerMix((prev) => !prev)
    }
    

    return (
        <>
        <div>
        <PreLoginNav />
        </div>
            
        <Authenticator>
            {({ signOut, user }) => (
                <main>
                        <h1>{user?.signInDetails?.loginId}'s Console</h1>
                        <h3>Click on the mix you are using</h3>
                        
                        <button onClick={summermixes}>Summer Mix</button>
                        {showSummerMix && <SummerMix />}                    
                    
                    <button onClick={signOut}>Sign out</button>
                </main>

            )}
            </Authenticator>
        </>
    );
}
export default Login;