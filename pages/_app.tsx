import * as React from "react";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "@/states/store";
import { AppContextProvider } from "@/app/contexts/AppContext";
import { isClientSide } from "@/app/isClientSide";
import { SEOMetaTags } from "@/app/components/SEOMetaTags";
import { AppInitializer } from "@/app/components/AppInitializer";

import "./globals.css";

const persistor = persistStore(store);

const App = ({ Component, pageProps }: AppProps) => {
  // @ts-ignore
  const content = <Component {...pageProps} />;

  return (
    <AppContextProvider>
      <SEOMetaTags
        title="Initial wallet MVP"
        // canonical={Config.Platform.CanonicalUrl + router.asPath}
        // imgUrl={Config.Platform.CanonicalUrl + "/assets/img/seo.jpg"}
        keywords="Blockchain, Payback, Fidelity, Signum"
        description="Making initial MVP for PWA wallet"
        viewport="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />

      <ReduxProvider store={store}>
        {isClientSide() ? (
          <>
            <AppInitializer />
            {/* @ts-ignore */}
            <PersistGate loading={null} persistor={persistor}>
              {content}
            </PersistGate>
          </>
        ) : (
          content
        )}
      </ReduxProvider>
    </AppContextProvider>
  );
};

export default App;
