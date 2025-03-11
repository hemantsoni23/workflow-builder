import { useSelector } from 'react-redux'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'

// routing
import Routes from '@/routes'

// defaultTheme
import themes from '@/themes'

// project imports
import NavigationScroll from '@/layout/NavigationScroll'

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <StyledEngineProvider >
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default App








// import React from 'react'
// import { useSelector } from 'react-redux';
// const App = () => {
//   const customization = useSelector((state) => state.customization);
//   console.log("Customization state:", customization);
//   return (
//     <div style={{ padding: '2rem', fontSize: '2rem', color: 'black' }}>
//       Hello, Flowise UI is working!
//     </div>
//   );
// };

// export default App;









// import { ThemeProvider } from '@mui/material/styles';
// import { CssBaseline } from '@mui/material';
// import NavigationScroll from '@/layout/NavigationScroll';
// import themes from '@/themes';
// import { useSelector } from 'react-redux';

// const App = () => {
//   const customization = useSelector((state) => state.customization);
//   console.log("Customization state:", customization);

//   return (
//     <ThemeProvider theme={themes(customization)}>
//       <CssBaseline />
//       <NavigationScroll>
//         <div style={{ padding: '2rem', fontSize: '2rem', color: 'black' }}>
//           Hello, Flowise UI is working!
//         </div>
//       </NavigationScroll>
//     </ThemeProvider>
//   );
// };

// export default App;







