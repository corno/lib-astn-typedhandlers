
import * as api from "../api"

export function createDummyTypedHandler<PAnnotation>(
): api.IValueHandler<PAnnotation> {
    function createDummyTypedValueHandler(): api.IValueHandler<PAnnotation> {
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
    function createDummyTypedDictionaryHandler(): api.IDictionaryHandler<PAnnotation> {
        return {
            onEntry: () => {
                return createDummyTypedValueHandler()
            },
            onClose: () => {
            },
        }
    }
    function createDummyTypedGroupHandler(): api.IGroupHandler<PAnnotation> {
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
    function createDummyTypedListHandler(): api.IListHandler<PAnnotation> {
        return {
            onElement: () => {
                return createDummyTypedValueHandler()
            },
            onClose: () => {
            }
        }
    }
    function createDummyTypedTaggedUnionHandler(): api.ITaggedUnionHandler<PAnnotation> {
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
