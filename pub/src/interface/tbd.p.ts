import * as th from "astn-typedhandlers-api"
import * as h from "astn-handlers-api"
import * as tc from "astn-tokenconsumer-api"
import * as prl from "pareto-resolve-lib"

export type createDummyTypedHandler = <PAnnotation>(
) => th.ITypedValueHandler<PAnnotation>

export type SerializeSchema = (
    schema: th.Schema,
    sendEvent: (event: tc.Token) => void,
) => void

export type CreateDeserializer = <PAnnotation>(
    $i: {
        raiseValidationError: (message: string, annotation: Annotation) => void,
        callback: (result: th.__root_T | null) => void,
        rr: prl.ResolveRegistry<PAnnotation>,
    }
) => h.IRequiredValueHandler<PAnnotation>