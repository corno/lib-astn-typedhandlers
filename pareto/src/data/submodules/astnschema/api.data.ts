import * as pr from 'pareto-core-raw'
import {
    reference,
    string,
    typeReference,
    interfaceReference,
    method, dictionary, group, member, taggedUnion, types, func, data, type, computed, typeParameter, parametrizedType, parametrizedReference, boolean
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { algorithm, constructor, definitionReference, } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            //"common": "glo-pareto-common"
        }),
        'parameters': d({}),
        'types': d({
            "_Reference": parametrizedType({
                "ReferencedType": {},
            }, group({
                "name": member(string()),
                "referencee": member(computed(typeParameter("ReferencedType")))
            })),

            "types": type(group({
                "value": member(reference("value")),
            })),
            "root": type(group({
                "root type": member(parametrizedReference("_Reference", { "ReferencedType": typeReference("types")})),
                "types": member(dictionary(reference("types"))),
            })),
            "simple string": type(group({
                "default value": member(string()),
                "quoted": member(boolean()),
            })),
            "dictionary": type(group({
                "key": member(string()),
                "value": member(reference("value"))
            })),
            "properties": type(group({
                "value": member(reference("value"))
            })),
            "group": type(group({
                "properties": member(dictionary(reference("properties")))
            })),
            "list": type(group({
                "value": member(reference("value"))
            })),
            "multiline string": type(group({
            })),
            "simple string type": type(group({
                "default value": member(string()),
                "quoted": member(boolean()),
            })),
            "options": type(group({
                "value": member(reference("value"))
            })),
            "tagged union": type(group({
                "default option": member(parametrizedReference("_Reference", { "ReferencedType": typeReference("options")})),
                "options": member(dictionary(reference("options"))),
            })),
            "type reference": type(group({
                "type": member(parametrizedReference("_Reference", { "ReferencedType": typeReference("types")})),
            })),
            "type": type(taggedUnion({
                "dictionary": reference("dictionary"),
                "group": reference("group"),
                "list": reference("list"),
                "multiline string": reference("multiline string"),
                "simple string": reference("simple string type"),
                "tagged union": reference("tagged union"),
                "type reference": reference("type reference"),
            })),
            "value": type(group({
                "type": member(reference("type"))
            })),

        }),
        'interfaces': d({

        }),
        'functions': d({


            // export type FCreateDummyTypedHandler = <PAnnotation>(
            //     ) => th.ITypedValueHandler<PAnnotation>
                
            //     export type FSerializeSchema = (
            //         $: th.TSchema,
            //         $i: ($: tc.TToken) => void,
            //     ) => void
                
            //     export type FCreateDeserializer = <PAnnotation>(
            //         $i: {
            //             readonly "raiseValidationError": ($: {
            //                 readonly "message": string,
            //                 readonly "annotation": PAnnotation
            //             }) => void,
            //             readonly "callback": ($: th.T__root | null) => void,
            //         },
            //         $d: {
            //             //rr: prl.ResolveRegistry<PAnnotation>,
                
            //         }
            //     ) => h.IRequiredValueHandler<PAnnotation>

        }),
    },
    'api': {
        'imports': d({
            //"common": "glo-pareto-common",
        }),
        'algorithms': d({})
    },
}