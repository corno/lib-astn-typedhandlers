import * as pr from 'pareto-core-raw'
import {
    reference,
    string,
    typeReference,
    interfaceReference,
    method, dictionary, group, member, taggedUnion, types, func, data
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { algorithm, constructor, definitionReference, } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common"
        }),
        'parameters': d({}),
        'types': d({
        }),
        'interfaces': d({
        }),
        'functions': d({ }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'algorithms': d({ })
    },
}