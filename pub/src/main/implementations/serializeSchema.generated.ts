import { T } from "../../submodules/astnschema"
import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'
import * as tc from "glo-astn-tokenconsumer"

export function serializeSchema(
    schema: T.root,
    sendEvent: (event: tc.T.Token<null>) => void,
): void {
    function serializeDictionary<T>(
        dict: pt.Dictionary<T>,
        entryCallback: (t: T) => void,
    ) {
        sendEvent(["structural", {
            "type": ["open dictionary", {}],
        }])
        dict.forEach(() => false, (entry, key) => {
            sendEvent(["simple string", {
                value: key,
                wrapping: ["quote", {}],
            }])
            entryCallback(entry)
        })
        sendEvent(["structural", {
            "type": ["close dictionary", {}],
        }])
    }

    function serializeVerboseType(
        properties: { [key: string]: () => void }
    ) {
        sendEvent(["structural", {
            "type": ["open verbose group", {}],
        }])
        pl.createDictionary(properties).forEach(() => false, ($, key) => {
            sendEvent(["simple string", {
                value: key,
                wrapping: ["apostrophe", {}],
            }])
            properties[key]()
        })
        sendEvent(["structural", {
            "type": ["close verbose group", {}],
        }])
    }
    function serializeTaggedUnion(option: string, callback: () => void) {
        sendEvent(["structural", {
            "type": ["tagged union start", {}],
        }])
        sendEvent(["simple string", {
            value: option,
            wrapping: ["apostrophe", {}],
        }])
        callback()
    }
    function serializeQuotedString(value: string) {
        sendEvent(["simple string", {
            value: value,
            wrapping: ["quote", {}],
        }])
    }
    function serializeReference<T>(reference: pt.Reference<T>) {
        sendEvent(["simple string", {
            value: reference.name,
            wrapping: ["quote", {}],
        }])
    }

    function serializeNonWrappedString(value: string) {
        sendEvent(["simple string", {
            value: value,
            wrapping: ["none", {}],
        }])
    }


    function serializeValueDefinition(valueDefinition: T.value) {
        serializeVerboseType({
            type: () => {
                serializeTaggedUnion(valueDefinition.type[0], () => {
                    switch (valueDefinition.type[0]) {
                        case "dictionary": {
                            const $$ = valueDefinition.type[1]
                            serializeVerboseType({
                                "key": () => {
                                    serializeVerboseType({
                                        "default value": () => {
                                            serializeQuotedString($$.key["default value"])
                                        },
                                        "quoted": () => {
                                            serializeNonWrappedString($$.key.quoted ? "true" : "false")
                                        },
                                    })
                                },
                                "value": () => {
                                    serializeValueDefinition($$.value)
                                },
                            })
                            break
                        }
                        case "list": {
                            const $$ = valueDefinition.type[1]
                            serializeVerboseType({
                                "value": () => {
                                    serializeValueDefinition($$.value)
                                },
                            })
                            break
                        }
                        case "type reference": {
                            const $ = valueDefinition.type[1]
                            serializeVerboseType({
                                type: () => {
                                    serializeReference($.type)
                                },
                            })
                            break
                        }
                        case "tagged union": {
                            const $ = valueDefinition.type[1]
                            serializeVerboseType({
                                "default option": () => {
                                    serializeReference($["default option"])
                                },
                                "options": () => {
                                    serializeDictionary(
                                        $.options,
                                        (state) => {
                                            serializeVerboseType({
                                                node: () => serializeValueDefinition(state.value),
                                            })
                                        },
                                    )
                                },

                            })
                            break
                        }
                        case "simple string": {
                            const $ = valueDefinition.type[1]
                            serializeVerboseType({
                                "default value": () => {
                                    serializeQuotedString($["default value"])
                                },
                                "quoted": () => {
                                    serializeNonWrappedString($.quoted ? "true" : "false")
                                },
                            })
                            break
                        }
                        case "multiline string": {
                            //const $ = propDef.type[1]
                            serializeVerboseType({})
                            break
                        }
                        case "group": {
                            const $ = valueDefinition.type[1]
                            serializeVerboseType({
                                properties: () => {
                                    serializeDictionary(
                                        $.properties,
                                        ($) => {
                                            serializeValueDefinition($.value)
                                        },
                                    )
                                },
                            })
                            break
                        }
                        default:
                            pl.au(valueDefinition.type[0])
                    }
                })
            },
        })
    }
    serializeVerboseType({
        "component types": () => {
            serializeDictionary(
                schema.types,
                (entry) => {
                    serializeVerboseType({
                        node: () => serializeValueDefinition(entry.value),
                    })
                },
            )
        },
        "root type": () => {
            serializeReference(schema["root type"])
        },
    })
}