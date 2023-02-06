import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.data"

export const $: mproject.TProject = {
    'author': "Corno",
    'description': "makes it straightforward to generate properly indented source code files",
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
        'test': {
            'dependencies': d({
                "res-pareto-tostring": {},
            }),
        }
    }],
}