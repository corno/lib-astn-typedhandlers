import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.data"
import { $ as astnschema } from "./submodules/astnschema/api.data"

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "handlers for tokens that are annotated with type information",
    'license': "ISC",

    'pubdependencies': d({
        "glo-pareto-common": {},
        "glo-astn-handlers": {},
        "glo-astn-tokenconsumer": {},
    }),
    'type': ['library', {
        'main': {
            'definition': api,
        },
        'submodules': d({
            "astnschema": {
                'definition': astnschema,
            }
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
                "res-pareto-tostring": {},
            }),
        }
    }],
}