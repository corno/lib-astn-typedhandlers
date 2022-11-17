import * as th from "api-astn-typedhandlers"
import * as h from "api-astn-handlers"
import * as tc from "api-astn-tokenconsumer"
import * as prl from "pareto-core-resolve"

export type FCreateDummyTypedHandler = <PAnnotation>(
) => th.ITypedValueHandler<PAnnotation>

export type FSerializeSchema = (
    $: th.TSchema,
    $i: ($: tc.TToken) => void,
) => void

export type FCreateDeserializer = <PAnnotation>(
    $i: {
        readonly "raiseValidationError": ($: {
            readonly "message": string,
            readonly "annotation": PAnnotation
        }) => void,
        readonly "callback": ($: th.T__root | null) => void,
    },
    $d: {
        rr: prl.ResolveRegistry<PAnnotation>,

    }
) => h.IRequiredValueHandler<PAnnotation>