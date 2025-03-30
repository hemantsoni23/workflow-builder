import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from '@/routes';

// defaultTheme
import themes from '@/themes';

// project imports
import NavigationScroll from '@/layout/NavigationScroll';

const App = () => {
    const customization = useSelector((state) => state.customization);
    const dispatch = useDispatch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const res = await axios.post(`${window.location.origin}/api/auth/verifyToken`, {}, { withCredentials: true });

                if (res.status === 200 && res.data.userId) {
                    console.log("Token verified:", res.data);
                    dispatch({ type: 'SET_USER_ID', payload: res.data.userId });
                } else {
                    dispatch({ type: 'LOGOUT' });
                }
            } catch (error) {
                console.error("Token verification failed:", error);
                dispatch({ type: 'LOGOUT' });
            }
            setIsAuthenticated(true);
        };

        verifyAuth();
    }, [dispatch]);

    if (!isAuthenticated) {
        return (
            <div>Loading .....</div>
        )
    }

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
