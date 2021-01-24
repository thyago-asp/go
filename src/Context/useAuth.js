import { useState, useEffect, useContext } from 'react';

import Context from '../Context/AuthProvider'
import * as Facebook from "expo-facebook";

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null)

    async function handleLogin(props) {

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

                // console.log((await response.json()));
                const data = await response.json();
                setUser(data);
                setAuthenticated(true);
                props.navigate('Main')
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            setAuthenticated(true);
            const response = await fetch(
                `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
            );

            console.log((await response.json()));
            const data = await response.json();
            setUser(data);
            props.navigate('Main')
        }



    }

    function handleLogout() {
        // Facebook.logOutAsync();
        // setUser(data);
        // props.navigate('Main')
        console.log("Clicou em sair")
        setAuthenticated(false);

    }

    return { authenticated, handleLogin, handleLogout, user };
}