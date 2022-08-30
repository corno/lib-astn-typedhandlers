
import * as th from "astn-typedhandlers-api"

export function createDummyTypedHandler<Annotation>(
): th.ITypedValueHandler<Annotation> {
    function createDummyTypedValueHandler(): th.ITypedValueHandler<Annotation> {
        return {
            onDictionary: ($) => {
                return createDummyTypedDictionaryHandler()
            },
            onGroup: ($) => {
                return createDummyTypedGroupHandler()
            },
            onList: ($) => {
                return createDummyTypedListHandler()
            },
            onMultilineString: ($) => {
                return createDummyTypedDictionaryHandler()
            },
            onSimpleString: ($) => {
                return createDummyTypedDictionaryHandler()
            },
            onTaggedUnion: ($) => {
                return createDummyTypedTaggedUnionHandler()
            },
            onTypeReference: ($) => {
                return createDummyTypedValueHandler()
            },

        }
    }
    function createDummyTypedDictionaryHandler(): th.IDictionaryHandler<Annotation> {
        return {
            onEntry: () => {
                return createDummyTypedValueHandler()
            },
            onClose: () => {
            },
        }
    }
    function createDummyTypedGroupHandler(): th.IGroupHandler<Annotation> {
        return {
            onProperty: () => {
                return createDummyTypedValueHandler()
            },
            onUnexpectedProperty: () => {
            },
            onClose: () => {
            }
        }
    }
    function createDummyTypedListHandler(): th.IListHandler<Annotation> {
        return {
            onElement: () => {
                return createDummyTypedValueHandler()
            },
            onClose: () => {
            }
        }
    }
    function createDummyTypedTaggedUnionHandler(): th.ITypedTaggedUnionHandler<Annotation> {
        return {
            onOption: () => {
                return createDummyTypedValueHandler()
            },
            onUnexpectedOption: () => {
                return createDummyTypedValueHandler()
            },
            onEnd: () => {
            }
        }
    }

    return createDummyTypedValueHandler()
}
