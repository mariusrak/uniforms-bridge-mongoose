import { createSchemaBridge, filterDOMProps } from "uniforms";

import MongooseBridge from "./MongooseBridge";

// Register bridge.
createSchemaBridge.register(MongooseBridge);

filterDOMProps.register("auto");
