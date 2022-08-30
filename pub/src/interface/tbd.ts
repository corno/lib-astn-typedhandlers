import * as th from "astn-typedhandlers-api"
import * as h from "astn-handlers-api"
import * as tc from "astn-tokenconsumer-api"
import * as prl from "pareto-resolve-lib"

export type createDummyTypedHandler = <Annotation>(
) => th.ITypedValueHandler<Annotation>

export type SerializeSchema = (
    schema: th.Schema,
    sendEvent: (event: tc.Token) => void,
) => void

export type CreateDeserializer = <Annotation>(
    $i: {
        raiseValidationError: (message: string, annotation: Annotation) => void,
        callback: (result: th.__root_T | null) => void,
        rr: prl.ResolveRegistry<Annotation>,
    }
) => h.IRequiredValueHandler<Annotation>