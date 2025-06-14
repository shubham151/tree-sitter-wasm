; inherits: ecma

"require" @keyword.import

(import_require_clause
  source: (string) @string.special.url)

[
  "declare"
  "implements"
  "type"
  "override"
  "module"
  "asserts"
  "infer"
  "is"
  "using"
] @keyword

[
  "namespace"
  "interface"
  "enum"
] @keyword.type

[
  "keyof"
  "satisfies"
] @keyword.operator

(as_expression
  "as" @keyword.operator)

(mapped_type_clause
  "as" @keyword.operator)

[
  "abstract"
  "private"
  "protected"
  "public"
  "readonly"
] @keyword.modifier

; types
(type_identifier) @type

(predefined_type) @type.builtin

(import_statement
  "type"
  (import_clause
    (named_imports
      (import_specifier
        name: (identifier) @type))))
        

(template_literal_type) @string

(non_null_expression
  "!" @operator)

; punctuation
(type_arguments
  [
    "<"
    ">"
  ] @punctuation.bracket)

(type_parameters
  [
    "<"
    ">"
  ] @punctuation.bracket)

(object_type
  [
    "{|"
    "|}"
  ] @punctuation.bracket)

(union_type
  "|" @punctuation.delimiter)

(intersection_type
  "&" @punctuation.delimiter)

(type_annotation
  ":" @punctuation.delimiter)

(type_predicate_annotation
  ":" @punctuation.delimiter)

(index_signature
  ":" @punctuation.delimiter)

(omitting_type_annotation
  "-?:" @punctuation.delimiter)

(adding_type_annotation
  "+?:" @punctuation.delimiter)

(opting_type_annotation
  "?:" @punctuation.delimiter)

"?." @punctuation.delimiter

(abstract_method_signature
  "?" @punctuation.special)

(method_signature
  "?" @punctuation.special)

(method_definition
  "?" @punctuation.special)

(property_signature
  "?" @punctuation.special)

(optional_parameter
  "?" @punctuation.special)

(optional_type
  "?" @punctuation.special)

(public_field_definition
  [
    "?"
    "!"
  ] @punctuation.special)

(flow_maybe_type
  "?" @punctuation.special)

(template_type
  [
    "${"
    "}"
  ] @punctuation.special)

(conditional_type
  [
    "?"
    ":"
  ] @keyword.conditional.ternary)

; Parameters
(required_parameter
  (identifier) @variable.parameter)

(optional_parameter
  (identifier) @variable.parameter)

(required_parameter
  (rest_pattern
    (identifier) @variable.parameter))

; ({ a }) => null
(required_parameter
  (object_pattern
    (shorthand_property_identifier_pattern) @variable.parameter))

; ({ a = b }) => null
(required_parameter
  (object_pattern
    (object_assignment_pattern
      (shorthand_property_identifier_pattern) @variable.parameter)))

; ({ a: b }) => null
(required_parameter
  (object_pattern
    (pair_pattern
      value: (identifier) @variable.parameter)))

; ([ a ]) => null
(required_parameter
  (array_pattern
    (identifier) @variable.parameter))

; a => null
(arrow_function
  parameter: (identifier) @variable.parameter)

; global declaration
(ambient_declaration
  "global" @module)

; function signatures
(ambient_declaration
  (function_signature
    name: (identifier) @function))

; method signatures
(method_signature
  name: (_) @function.method)

; property signatures
(property_signature
  name: (property_identifier) @function.method
  type: (type_annotation
    [
      (union_type
        (parenthesized_type
          (function_type)))
      (function_type)
    ]))