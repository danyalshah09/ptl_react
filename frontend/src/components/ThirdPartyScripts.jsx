import React, { useEffect } from 'react';

const ThirdPartyScripts = () => {
  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    const botpressInject = loadScript('https://cdn.botpress.cloud/webchat/v2/inject.js');
    const botpressContent = loadScript('https://files.bpcontent.cloud/2024/12/02/20/20241202205224-S1IQMZDB.js');
    const elfsightPlatform = loadScript('https://static.elfsight.com/platform/platform.js');

    return () => {
      // Cleanup scripts on component unmount
      document.body.removeChild(botpressInject);
      document.body.removeChild(botpressContent);
      document.body.removeChild(elfsightPlatform);
    };
  }, []);

  return null; // This component does not render anything
};

export default ThirdPartyScripts;