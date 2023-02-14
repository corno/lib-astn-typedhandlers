import * as pr from 'pareto-core-raw'
import {
    reference,
    string,
    typeReference,
    interfaceReference,
    method, dictionary, group, member, taggedUnion, types, func, data, type, computed, typeParameter, parametrizedType, parametrizedReference, boolean, glossaryParameter, optional, null_
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            //"common": "glo-pareto-common"
            "schema": "../../../submodules/astnschema",
            "h": "glo-astn-handlers",
        }),
        'parameters': d({
            "Annotation": {},
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
            "Entry": type(group({
                "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken"))),
            })),
            "Group": type(group({
                "type": member(taggedUnion({
                    "verbose": parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "OpenObjectToken"),
                    "shorthand": parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "OpenArrayToken"),
                    "mixin": group({}),
                    "omitted": group({}),
                })),
                "definition": member(reference("schema", "group"))
            })),
            "List": type(group({
                "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "OpenArrayToken"))),
                "definition": member(reference("schema", "list")),
            })),
            "ListClose": type(group({
                "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "CloseArrayToken"))),
            })),
            "Dictionary": type(group({
                "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "OpenObjectToken"))),
                "definition": member(reference("schema", "dictionary")),
            })),
            "DictionaryClose": type(group({
                "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "CloseObjectToken"))),
            })),
            "GroupClose": type(group({
                "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "CloseObjectToken"))),
            })),
            "TypeReference": type(group({
                "definition": member(reference("schema", "type reference")),
            })),
            "TaggedUnion": type(group({
                "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "TaggedUnionToken"))),
                "definition": member(reference("schema", "tagged union")),
            })),
            "SimpleString": type(group({
                "value": member(string()),
                "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken"))),
                "definition": member(reference("schema", "simple string")),
            })),
            "MultilineString": type(group({
                "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "MultilineStringToken"))),
                "definition": member(reference("schema", "multiline string")),
            })),
            "Option": type(group({
                "name": member(string()),
                "token": member(optional(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken"))),
                "definition": member(reference("schema", "options")),
            })),
            "UnexpectedOption": type(group({
                "defaultOption": member(string()),//the unmarshaller will initialize the default option.
                "expectedOptions": member(dictionary(null_())),
                "token": member(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken")),
            })),
            "Property": type(group({
                "key": member(string()),
                "token": member(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken")),//cannot be shorthand, so there must be a token, so not optional
                "definition": member(reference("schema", "value")),
            })),
            "UnexpectedProperty": type(group({
                "expectedProperties": member(dictionary(null_())),
                "token": member(parametrizedReference("h", { "Annotation": typeReference("Annotation") }, "SimpleStringToken")),
                "groupDefinition": member(reference("schema", "group")),
            })),
        }),
        'interfaces': d({
            "GroupHandler": ['group', {
                'members': d({
                    "onUnexpectedProperty": method(typeReference("UnexpectedProperty")),
                    "onProperty": method(typeReference("Property"), ['reference', interfaceReference("ValueHandler")], false),
                    "onClose": method(typeReference("GroupClose")),
                })
            }],
            "DictionaryHandler": ['group', {
                'members': d({
                    "onEntry": method(typeReference("Entry"), ['reference', interfaceReference("ValueHandler")], false),
                    "onClose": method(typeReference("DictionaryClose")),
                })
            }],
            "ListHandler": ['group', {
                'members': d({
                    "onElement": method(null, ['reference', interfaceReference("ValueHandler")], false),
                    "onClose": method(typeReference("ListClose")),
                })
            }],
            "TaggedUnionHandler": ['group', {
                'members': d({
                    "onOption": method(typeReference("Option"), ['reference', interfaceReference("ValueHandler")], false),
                    "onUnexpectedOption": method(typeReference("Option"), ['reference', interfaceReference("ValueHandler")], false),
                    "onEnd": method(null),
                })
            }],
            "ValueHandler": ['group', {
                'members': d({
                    "onGroup": method(typeReference("Group"), ['reference', interfaceReference("GroupHandler")], false),
                    "onList": method(typeReference("List"), ['reference', interfaceReference("ListHandler")], false),
                    "onDictionary": method(typeReference("Dictionary"), ['reference', interfaceReference("DictionaryHandler")], false),
                    "onTypeReference": method(typeReference("TypeReference"), ['reference', interfaceReference("ValueHandler")], false),
                    "onTaggedUnion": method(typeReference("TaggedUnion"), ['reference', interfaceReference("TaggedUnionHandler")], false),
                    "onSimpleString": method(typeReference("SimpleString")),
                    "onMultilineString": method(typeReference("MultilineString")),
                })
            }],
            "RootHandler": ['group', {
                'members': d({
                    "root": ['reference', interfaceReference("ValueHandler")],
                    "onEnd": method(null),
                })
            }],
        }),
        'functions': d({

        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'algorithms': d({})
    },
}