import * as inf from "../interface"
import { createASTNSchemaDeserializer } from "./public/createASTNSchemaDeserializer.generated.p"
import { createDummyTypedHandler } from "./public/createDummyTypedHandler.p"
import { serializeSchema } from "./public/serializeSchema.generated.p"

// type API = {
//     createDummyTypedHandler: inf.createDummyTypedHandler
//     serializeSchema: inf.SerializeSchema
//     createDeserializer: inf.CreateDeserializer
// }

export const $: API = {
    createDummyTypedHandler: createDummyTypedHandler,
    createDeserializer: createASTNSchemaDeserializer,
    serializeSchema: serializeSchema,

}