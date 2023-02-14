import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mh from "glo-astn-handlers"
import * as mschema from "../../../submodules/astnschema"

export type IDictionaryHandler<GPAnnotation> = {
    'onClose': ($: T.DictionaryClose<GPAnnotation>, ) => void
    'onEntry': ($: T.Entry<GPAnnotation>, ) => IValueHandler<GPAnnotation>
}

export type IGroupHandler<GPAnnotation> = {
    'onClose': ($: T.GroupClose<GPAnnotation>, ) => void
    'onProperty': ($: T.Property<GPAnnotation>, ) => IValueHandler<GPAnnotation>
    'onUnexpectedProperty': ($: T.UnexpectedProperty<GPAnnotation>, ) => void
}

export type IListHandler<GPAnnotation> = {
    'onClose': ($: T.ListClose<GPAnnotation>, ) => void
    'onElement': () => IValueHandler<GPAnnotation>
}

export type IRootHandler<GPAnnotation> = {
    'onEnd': () => void
    'root': IValueHandler<GPAnnotation>
}

export type ITaggedUnionHandler<GPAnnotation> = {
    'onEnd': () => void
    'onOption': ($: T.Option<GPAnnotation>, ) => IValueHandler<GPAnnotation>
    'onUnexpectedOption': ($: T.Option<GPAnnotation>, ) => IValueHandler<GPAnnotation>
}

export type IValueHandler<GPAnnotation> = {
    'onDictionary': ($: T.Dictionary<GPAnnotation>, ) => IDictionaryHandler<GPAnnotation>
    'onGroup': ($: T.Group<GPAnnotation>, ) => IGroupHandler<GPAnnotation>
    'onList': ($: T.List<GPAnnotation>, ) => IListHandler<GPAnnotation>
    'onMultilineString': ($: T.MultilineString<GPAnnotation>, ) => void
    'onSimpleString': ($: T.SimpleString<GPAnnotation>, ) => void
    'onTaggedUnion': ($: T.TaggedUnion<GPAnnotation>, ) => ITaggedUnionHandler<GPAnnotation>
    'onTypeReference': ($: T.TypeReference<GPAnnotation>, ) => IValueHandler<GPAnnotation>
}