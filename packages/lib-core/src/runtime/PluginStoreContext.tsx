import * as React from 'react';
import type { PluginStoreInterface } from '../types/store';

const PluginStoreContext = React.createContext<PluginStoreInterface | undefined>(undefined);

/**
 * React Context provider for passing the {@link PluginStore} down the component tree.
 */
export const PluginStoreProvider: React.FC<PluginStoreProviderProps> = ({ store, children }) => (
  <PluginStoreContext.Provider value={store}>{children}</PluginStoreContext.Provider>
);

export type PluginStoreProviderProps = React.PropsWithChildren<{
  store: PluginStoreInterface;
}>;

/**
 * React hook that provides access to the {@link PluginStore} functionality.
 */
export const usePluginStore = () => {
  const store = React.useContext(PluginStoreContext);

  if (store === undefined) {
    throw new Error('usePluginStore hook called outside a PluginStoreProvider');
  }

  return store;
};
