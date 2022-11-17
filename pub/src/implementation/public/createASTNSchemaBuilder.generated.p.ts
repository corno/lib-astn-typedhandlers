// import * as api from "astn-typedtreehandler-api"
// import * as ea from "astn-expect-api"

// import { createASTNSchemaDeserializer } from "./createASTNSchemaDeserializer.generated" //FIXME

// export function createASTNSchemaBuilder<SchemaAnnotation, BodyAnnotation>(
//     createExpectContext: ea.CreateExpectContext<SchemaAnnotation>,
//     createDummyTypedHandler: api.CreateDummyTypedHandler<BodyAnnotation>,
// ): api.SchemaSchemaBuilder<SchemaAnnotation, BodyAnnotation> | null {
//     return (onError2, onSchema) => {
//         let foundErrors = false
//         return createASTNSchemaDeserializer(
//             createExpectContext({
//                 issueHandler: ($) => {
//                     if ($.severity === ["error", null]) {
//                         onError2(["expect", $.issue], $.annotation)
//                     }
//                 },
//                 duplicateEntrySeverity: ["warning", null],
//                 onDuplicateEntry: ["ignore", null],
//             }),
//             (message, annotation) => {
//                 foundErrors = true
//                 onError2(["validation", { message: message }], annotation)
//             },
//             (schema) => {
//                 if (schema === null) {
//                     if (foundErrors === false) {
//                         throw new Error("no schema, no errors")
//                     }
//                 } else {
//                     onSchema({
//                         getSchema: () => schema,
//                         createStreamingValidator: () => {
//                             return createDummyTypedHandler()
//                         },
//                     })
//                 }
//             },
//         )
//     }
// }
