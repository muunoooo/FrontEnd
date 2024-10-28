// import EffectComp from "./components/effect";
// import ComponentUseMemo from "./components/memo";
// import RefComp from "./components/ref";
// import StateComp from "./components/state";
// import ContextComp from "./components/context";
// import ReducerComp from "./components/reducer";
import { createContext, useState } from "react";
import CallbackComp from "./components/callback";

export const UserContext = createContext<string>("");

function App() {
  const [user] = useState<string>("Budi");
  return (
    <div>
      <UserContext.Provider value={user}>
        {/* <StateComp/> */}
        {/* <EffectComp/> */}
        {/* <RefComp/> */}
        {/* <ComponentUseMemo/> */}
        {/* <ContextComp /> */}
        {/* <ReducerComp/> */}
        <CallbackComp/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
