import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import PreLoginNav from './Navigation/PreLoginNav.jsx';
import SummerMix from "./Mixes/SummerMix";

const client = generateClient<Schema>();
function Login() {
    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
    const [showSummerMix, setShowSummerMix] = useState(false);
    useEffect(() => {
        client.models.Todo.observeQuery().subscribe({
            next: (data) => setTodos([...data.items]),
        });
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