import RootNavigator from "@/navigator/RootNavigator";
import { ProvideAuth } from "@/hooks/useAuth";

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <RootNavigator />
      </ProvideAuth>
    </div>
  );
}

export default App;
