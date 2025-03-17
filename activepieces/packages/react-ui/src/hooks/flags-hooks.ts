// import { useSuspenseQuery } from '@tanstack/react-query';

// import { ApFlagId } from '@activepieces/shared';

// import { flagsApi, FlagsMap } from '../lib/flags-api';

// type WebsiteBrand = {
//   websiteName: string;
//   logos: {
//     fullLogoUrl: string;
//     favIconUrl: string;
//     logoIconUrl: string;
//   };
//   colors: {
//     primary: {
//       default: string;
//       dark: string;
//       light: string;
//     };
//   };
// };

// export const flagsHooks = {
//   useFlags: () => {
//     return useSuspenseQuery<FlagsMap, Error>({
//       queryKey: ['flags'],
//       queryFn: flagsApi.getAll,
//       staleTime: Infinity,
//     });
//   },
//   useWebsiteBranding: () => {
//     const { data: theme } = flagsHooks.useFlag<WebsiteBrand>(ApFlagId.THEME);
//     return theme!;
//   },
//   useFlag: <T>(flagId: ApFlagId) => {
//     const data = useSuspenseQuery<FlagsMap, Error>({
//       queryKey: ['flags'],
//       queryFn: flagsApi.getAll,
//       staleTime: Infinity,
//     }).data?.[flagId] as T | null;
//     return {
//       data,
//     };
//   },
// };





import { useSuspenseQuery } from '@tanstack/react-query';
import { ApFlagId } from '@activepieces/shared';
import { flagsApi, FlagsMap } from '../lib/flags-api';

export type WebsiteBrand = {
  websiteName: string;
  logos: {
    fullLogoUrl: string;
    favIconUrl: string;
    logoIconUrl: string;
  };
  colors: {
    primary: {
      default: string;
      dark: string;
      light: string;
    };
  };
};

export const flagsHooks = {
  useFlags: () => {
    return useSuspenseQuery<FlagsMap, Error>({
      queryKey: ['flags'],
      queryFn: flagsApi.getAll,
      staleTime: Infinity,
    });
  },
  useFlag: <T>(flagId: ApFlagId) => {
    const queryResult = useSuspenseQuery<FlagsMap, Error>({
      queryKey: ['flags'],
      queryFn: flagsApi.getAll,
      staleTime: Infinity,
    });
    const data = queryResult.data?.[flagId] as T | null;
    return { data };
  },
  useWebsiteBranding: () => {
    const { data: theme } = flagsHooks.useFlag<WebsiteBrand>(ApFlagId.THEME);
    // Return a default branding object if the theme is undefined
    return theme || {
      websiteName: 'Activepieces',
      logos: {
        fullLogoUrl: '/activepieces/assets/default-full-logo.png',
        favIconUrl: '/activepieces/assets/default-favicon.png',
        logoIconUrl: '/activepieces/assets/default-logo-icon.png',
      },
      colors: {
        primary: {
          default: '#000000',
          dark: '#333333',
          light: '#CCCCCC',
        },
      },
    };
  },
};
