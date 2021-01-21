import { useState, useEffect } from 'react';
import * as Facebook from "expo-facebook";

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);

    async function handleLogin() {

        try {
            await Facebook.initializeAsync({
                appId: '259512262260070',
            });

            const { type, token } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ["public_profile", "email"],
            });

            if (type === "success") {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(
                    `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
                );
                props.navigate('Main')
                console.log((await response.json()));
                const data = await response.json();
                setUser(data);
                setAuthenticated(true);
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            // props.navigate('Main')
        }

        

    }

    function handleLogout() {
        setAuthenticated(false);

    }

    return { authenticated, handleLogin, handleLogout };
}