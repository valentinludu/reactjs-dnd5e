import { useReducer } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import AppContext from "./contexts/AppContext";
import { reducer, initialState } from "./contexts/reducer";

import CharacterPreview from "./screens/CharacterPreview";
import CharacterConfig from "./screens/CharacterConfig";
import Header from "./components/Header";
import styles from "./App.module.css";

const App = () => {
  const queryClient = new QueryClient();
  const [state, dispatch] = useReducer(reducer, initialState);
  const configScreen = state.screen === "config";
  const screenTitle = configScreen? "Welcome to Dungeons and Dragons character builder" : "Preview Dungeons and Dragons character";

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className={styles.app} data-testid="app">
          <Header screenTitle={screenTitle} />
          <main>
            {configScreen ? <CharacterConfig /> : <CharacterPreview />}
          </main>
        </div>
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
