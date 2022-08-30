import * as inf from "../interface"
import { createASTNSchemaDeserializer } from "./createASTNSchemaDeserializer.generated"
import { createDummyTypedHandler } from "./createDummyTypedHandler"
import { serializeSchema } from "./serializeSchema.generated"

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