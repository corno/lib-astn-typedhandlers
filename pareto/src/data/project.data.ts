import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.data"

export const $: mproject.TProject = {
    'author': "Corno",
    'description': "handlers for tokens that are annotated with type information",
    'license': "ISC",

    'pubdependencies': d({
        "glo-pareto-common": {},
        "lib-pareto-filesystem": {},
        //"res-pareto-filesystem": {},
        "res-pareto-tostring": {},
    }),
    'type': ['library', {
        'main': {
            'definition': api,
        },
        'submodules': d({
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
                "res-pareto-tostring": {},
            }),
        }
    }],
}