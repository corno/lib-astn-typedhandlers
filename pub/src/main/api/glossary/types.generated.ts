import * as pt from 'pareto-core-types'

import * as mh from "glo-astn-handlers"
import * as mschema from "../../../submodules/astnschema"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace Dictionary {
        
        export type definition<GPAnnotation> = mschema.T.dictionary
        
        export namespace token {
            
            export type O<GPAnnotation> = mh.T.OpenObjectToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, mh.T.OpenObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export type Dictionary<GPAnnotation> = {
        readonly 'definition': mschema.T.dictionary
        readonly 'token': [ false ] | [ true, mh.T.OpenObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace DictionaryClose {
        
        export namespace token {
            
            export type O<GPAnnotation> = mh.T.CloseObjectToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, mh.T.CloseObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export type DictionaryClose<GPAnnotation> = {
        readonly 'token': [ false ] | [ true, mh.T.CloseObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace Entry {
        
        export namespace token {
            
            export type O<GPAnnotation> = mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export type Entry<GPAnnotation> = {
        readonly 'token': [ false ] | [ true, mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace Group {
        
        export type definition<GPAnnotation> = mschema.T.group
        
        export namespace _ltype {
            
            export namespace mixin {}
            
            export type mixin<GPAnnotation> = {}
            
            export namespace omitted {}
            
            export type omitted<GPAnnotation> = {}
            
            export type shorthand<GPAnnotation> = mh.T.OpenArrayToken<T.Annotation<GPAnnotation>>
            
            export type verbose<GPAnnotation> = mh.T.OpenObjectToken<T.Annotation<GPAnnotation>>
        }
        
        export type _ltype<GPAnnotation> = 
            | ['mixin', {}]
            | ['omitted', {}]
            | ['shorthand', mh.T.OpenArrayToken<T.Annotation<GPAnnotation>>]
            | ['verbose', mh.T.OpenObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export type Group<GPAnnotation> = {
        readonly 'definition': mschema.T.group
        readonly 'type': 
            | ['mixin', {}]
            | ['omitted', {}]
            | ['shorthand', mh.T.OpenArrayToken<T.Annotation<GPAnnotation>>]
            | ['verbose', mh.T.OpenObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace GroupClose {
        
        export namespace token {
            
            export type O<GPAnnotation> = mh.T.CloseObjectToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, mh.T.CloseObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export type GroupClose<GPAnnotation> = {
        readonly 'token': [ false ] | [ true, mh.T.CloseObjectToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace List {
        
        export type definition<GPAnnotation> = mschema.T.list
        
        export namespace token {
            
            export type O<GPAnnotation> = mh.T.OpenArrayToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, mh.T.OpenArrayToken<T.Annotation<GPAnnotation>>]
    }
    
    export type List<GPAnnotation> = {
        readonly 'definition': mschema.T.list
        readonly 'token': [ false ] | [ true, mh.T.OpenArrayToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace ListClose {
        
        export namespace token {
            
            export type O<GPAnnotation> = mh.T.CloseArrayToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, mh.T.CloseArrayToken<T.Annotation<GPAnnotation>>]
    }
    
    export type ListClose<GPAnnotation> = {
        readonly 'token': [ false ] | [ true, mh.T.CloseArrayToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace MultilineString {
        
        export type definition<GPAnnotation> = mschema.T.multiline__string
        
        export namespace token {
            
            export type O<GPAnnotation> = mh.T.MultilineStringToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, mh.T.MultilineStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export type MultilineString<GPAnnotation> = {
        readonly 'definition': mschema.T.multiline__string
        readonly 'token': [ false ] | [ true, mh.T.MultilineStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace Option {
        
        export type definition<GPAnnotation> = mschema.T.options
        
        export type name<GPAnnotation> = string
        
        export namespace token {
            
            export type O<GPAnnotation> = mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export type Option<GPAnnotation> = {
        readonly 'definition': mschema.T.options
        readonly 'name': string
        readonly 'token': [ false ] | [ true, mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace Property {
        
        export type definition<GPAnnotation> = mschema.T.value
        
        export type key<GPAnnotation> = string
        
        export type token<GPAnnotation> = mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
    }
    
    export type Property<GPAnnotation> = {
        readonly 'definition': mschema.T.value
        readonly 'key': string
        readonly 'token': mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
    }
    
    export namespace SimpleString {
        
        export type definition<GPAnnotation> = mschema.T.simple__string
        
        export namespace token {
            
            export type O<GPAnnotation> = mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
        
        export type value<GPAnnotation> = string
    }
    
    export type SimpleString<GPAnnotation> = {
        readonly 'definition': mschema.T.simple__string
        readonly 'token': [ false ] | [ true, mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>]
        readonly 'value': string
    }
    
    export namespace TaggedUnion {
        
        export type definition<GPAnnotation> = mschema.T.tagged__union
        
        export namespace token {
            
            export type O<GPAnnotation> = mh.T.TaggedUnionToken<T.Annotation<GPAnnotation>>
        }
        
        export type token<GPAnnotation> = [ false ] | [ true, mh.T.TaggedUnionToken<T.Annotation<GPAnnotation>>]
    }
    
    export type TaggedUnion<GPAnnotation> = {
        readonly 'definition': mschema.T.tagged__union
        readonly 'token': [ false ] | [ true, mh.T.TaggedUnionToken<T.Annotation<GPAnnotation>>]
    }
    
    export namespace TypeReference {
        
        export type definition<GPAnnotation> = mschema.T.type__reference
    }
    
    export type TypeReference<GPAnnotation> = {
        readonly 'definition': mschema.T.type__reference
    }
    
    export namespace UnexpectedOption {
        
        export type defaultOption<GPAnnotation> = string
        
        export namespace expectedOptions {
            
            export type D<GPAnnotation> = null
        }
        
        export type expectedOptions<GPAnnotation> = pt.Dictionary<null>
        
        export type token<GPAnnotation> = mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
    }
    
    export type UnexpectedOption<GPAnnotation> = {
        readonly 'defaultOption': string
        readonly 'expectedOptions': pt.Dictionary<null>
        readonly 'token': mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
    }
    
    export namespace UnexpectedProperty {
        
        export namespace expectedProperties {
            
            export type D<GPAnnotation> = null
        }
        
        export type expectedProperties<GPAnnotation> = pt.Dictionary<null>
        
        export type groupDefinition<GPAnnotation> = mschema.T.group
        
        export type token<GPAnnotation> = mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
    }
    
    export type UnexpectedProperty<GPAnnotation> = {
        readonly 'expectedProperties': pt.Dictionary<null>
        readonly 'groupDefinition': mschema.T.group
        readonly 'token': mh.T.SimpleStringToken<T.Annotation<GPAnnotation>>
    }
}