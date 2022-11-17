
import * as th from "api-astn-typedhandlers"

export function createDummyTypedHandler<PAnnotation>(
): th.ITypedValueHandler<PAnnotation> {
    function createDummyTypedValueHandler(): th.ITypedValueHandler<PAnnotation> {
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
    function createDummyTypedDictionaryHandler(): th.IDictionaryHandler<PAnnotation> {
        return {
            onEntry: () => {
                return createDummyTypedValueHandler()
            },
            onClose: () => {
            },
        }
    }
    function createDummyTypedGroupHandler(): th.IGroupHandler<PAnnotation> {
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
    function createDummyTypedListHandler(): th.IListHandler<PAnnotation> {
        return {
            onElement: () => {
                return createDummyTypedValueHandler()
            },
            onClose: () => {
            }
        }
    }
    function createDummyTypedTaggedUnionHandler(): th.ITypedTaggedUnionHandler<PAnnotation> {
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
