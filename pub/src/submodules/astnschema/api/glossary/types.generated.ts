import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace _$Reference {
        
        export type name<AReferencedType> = string
        
        export namespace referencee {
            
            export type C<AReferencedType> = AReferencedType
        }
        
        export type referencee<AReferencedType> = () => AReferencedType
    }
    
    export type _$Reference<AReferencedType> = {
        readonly 'name': string
        readonly 'referencee': () => AReferencedType
    }
    
    export namespace dictionary {
        
        export type key = string
        
        export type value = T.value
    }
    
    export type dictionary = {
        readonly 'key': string
        readonly 'value': T.value
    }
    
    export namespace group {
        
        export namespace properties {
            
            export type D = T.properties
        }
        
        export type properties = pt.Dictionary<T.properties>
    }
    
    export type group = {
        readonly 'properties': pt.Dictionary<T.properties>
    }
    
    export namespace list {
        
        export type value = T.value
    }
    
    export type list = {
        readonly 'value': T.value
    }
    
    export namespace multiline__string {}
    
    export type multiline__string = {}
    
    export namespace options {
        
        export type value = T.value
    }
    
    export type options = {
        readonly 'value': T.value
    }
    
    export namespace properties {
        
        export type value = T.value
    }
    
    export type properties = {
        readonly 'value': T.value
    }
    
    export namespace root {
        
        export type root__type = T._$Reference<T.types>
        
        export namespace types {
            
            export type D = T.types
        }
        
        export type types = pt.Dictionary<T.types>
    }
    
    export type root = {
        readonly 'root type': T._$Reference<T.types>
        readonly 'types': pt.Dictionary<T.types>
    }
    
    export namespace simple__string {
        
        export type default__value = string
        
        export type quoted = boolean
    }
    
    export type simple__string = {
        readonly 'default value': string
        readonly 'quoted': boolean
    }
    
    export namespace simple__string__type {
        
        export type default__value = string
        
        export type quoted = boolean
    }
    
    export type simple__string__type = {
        readonly 'default value': string
        readonly 'quoted': boolean
    }
    
    export namespace tagged__union {
        
        export type default__option = T._$Reference<T.options>
        
        export namespace options {
            
            export type D = T.options
        }
        
        export type options = pt.Dictionary<T.options>
    }
    
    export type tagged__union = {
        readonly 'default option': T._$Reference<T.options>
        readonly 'options': pt.Dictionary<T.options>
    }
    
    export namespace _ltype {
        
        export type dictionary = T.dictionary
        
        export type group = T.group
        
        export type list = T.list
        
        export type multiline__string = T.multiline__string
        
        export type simple__string = T.simple__string__type
        
        export type tagged__union = T.tagged__union
        
        export type type__reference = T.type__reference
    }
    
    export type _ltype = 
        | ['dictionary', T.dictionary]
        | ['group', T.group]
        | ['list', T.list]
        | ['multiline string', T.multiline__string]
        | ['simple string', T.simple__string__type]
        | ['tagged union', T.tagged__union]
        | ['type reference', T.type__reference]
    
    export namespace type__reference {
        
        export type _ltype = T._$Reference<T.types>
    }
    
    export type type__reference = {
        readonly 'type': T._$Reference<T.types>
    }
    
    export namespace types {
        
        export type value = T.value
    }
    
    export type types = {
        readonly 'value': T.value
    }
    
    export namespace value {
        
        export type _ltype = T._ltype
    }
    
    export type value = {
        readonly 'type': T._ltype
    }
}