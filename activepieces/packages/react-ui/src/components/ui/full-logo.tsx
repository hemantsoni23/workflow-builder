import { t } from 'i18next';

import { flagsHooks } from '@/hooks/flags-hooks';

const FullLogo = () => {
  const branding = flagsHooks.useWebsiteBranding();

  return (
    <div className="h-[60px]">
      {/* <img
        className="h-full"
        // src={branding.logos.fullLogoUrl}
        alt={t('logo')}
      /> */}
     <h1 className="text-5xl font-italic text-gray-900 tracking-tight">Noyco</h1>
     
    </div>
  );
};
FullLogo.displayName = 'FullLogo';
export { FullLogo };
