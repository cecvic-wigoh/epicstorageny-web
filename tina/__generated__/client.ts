import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '2eb53754d62977f97a529ca83cdb0ea62aa62ab7', queries,  });
export default client;
  