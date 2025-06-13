; Order matters! Place lower precedence first.

; Variables

(identifier) @variable

(_
  object: (identifier) @variable.other.object)

; Literals

(this) @variable.language.this
(super) @variable.language.super

(comment) @comment

; TODO: This doesn't seem to be working
(escape_sequence) @constant.character.escape

((string) @string.quoted.single
  (#match? @string.quoted.single "^'.*'$"))

((string) @string.quoted.double
  (#match? @string.quoted.double "^\".*\"$"))

([
  (template_string)
  (template_literal_type)
] @string.template)

(template_substitution) @meta.template.expression

(string .
  ([
    "\""
    "'"
  ]) @punctuation.definition.string.begin)

(string
  ([
    "\""
    "'"
  ]) @punctuation.definition.string.end .)

(template_string . ("`") @punctuation.definition.string.template.begin)

(template_string ("`") @punctuation.definition.string.template.end .)

; NOTE: the typescript grammar doesn't break regex into nice parts so as to capture parts of it separately
(regex) @string.regexp
(number) @constant.numeric

; Properties

(member_expression
  object: (this)
  property: (property_identifier) @variable)

(member_expression
  property: (property_identifier) @variable.other.constant
  (#match? @variable.other.constant "^[A-Z][A-Z_]+$"))

[
  (property_identifier)
  (shorthand_property_identifier)
  (shorthand_property_identifier_pattern)] @variable

; Function and method definitions

(function_expression
  name: (identifier) @entity.name.function)
(function_signature
  name: (identifier) @entity.name.function)
(function_declaration
  name: (identifier) @entity.name.function)
(method_definition
  name: (property_identifier) @meta.definition.method @entity.name.function
  (#not-eq? @entity.name.function "constructor"))
(method_definition
  name: (property_identifier) @meta.definition.method @storage.type
  (#eq? @storage.type "constructor"))
(method_signature
  name: (property_identifier) @meta.definition.method @entity.name.function)
(generator_function_declaration
  "*" @keyword.generator.asterisk)
(generator_function_declaration
  name: (identifier) @meta.definition.function @entity.name.function)

(pair
  key: (property_identifier) @entity.name.function
  value: [(function_expression) (arrow_function)])

(assignment_expression
  left: (member_expression
    property: (property_identifier) @entity.name.function)
  right: [(function_expression) (arrow_function)])

(variable_declarator
  name: (identifier) @entity.name.function
  value: [(function_expression) (arrow_function)])

(assignment_expression
  left: (identifier) @entity.name.function
  right: [(function_expression) (arrow_function)])

(required_parameter
  (identifier) @variable.parameter)

(required_parameter
  (_
    ([
      (identifier)
      (shorthand_property_identifier_pattern)
    ]) @variable.parameter))

(optional_parameter
  (identifier) @variable.parameter)

(optional_parameter
  (_
    ([
      (identifier)
      (shorthand_property_identifier_pattern)
    ]) @variable.parameter))

(catch_clause
  parameter: (identifier) @variable.parameter)

(index_signature
  name: (identifier) @variable.parameter)

(arrow_function
  parameter: (identifier) @variable.parameter)

(type_predicate
  name: (identifier) @variable.parameter)

; Function and method calls

(call_expression
  function: (identifier) @entity.name.function)

(call_expression
  function: (member_expression
  	object: (identifier) @support.class.promise)
    (#eq? @support.class.promise "Promise"))

(call_expression
  function: (member_expression
    property: (property_identifier) @entity.name.function))

(new_expression) @new.expr

(new_expression
  constructor: (identifier) @entity.name.function)


; Special identifiers

(predefined_type) @support.type
(predefined_type (["string" "boolean" "number" "any" "unknown" "never" "void"])) @support.type.primitive

(_
  (type_identifier) @entity.name.type)

(type_annotation
  ([
    (type_identifier)
    (nested_type_identifier)
   ]) @meta.type.annotation @entity.name.type)

(class_declaration
  (type_identifier) @entity.name.type.class)

(type_alias_declaration
  (type_identifier) @entity.name.type.alias)
(type_alias_declaration
  value: (_
    (type_identifier) @entity.name.type))

(interface_declaration
  (type_identifier) @entity.name.type.interface)

(internal_module
  name: (identifier) @entity.name.type)

(enum_declaration
  name: (identifier) @entity.name.type.enum)

(
  [
    (_ name: (identifier))
    (shorthand_property_identifier)
    (shorthand_property_identifier_pattern)
  ] @variable.other.constant
  (#match? @variable.other.constant "^[A-Z][A-Z_]+$"))

(extends_clause
  value: (identifier) @entity.other.inherited-class)

(extends_type_clause
  type: (type_identifier) @entity.other.inherited-class)

(implements_clause
  (type_identifier) @entity.other.inherited-class)

; Tokens

[
  ";"
  "?."
  "."
  ","
  ":"
  "?"
] @punctuation.delimiter

[
  "!"
  "~"
  "==="
  "!=="
  "&&"
  "||"
  "??"
] @keyword.operator.logical

(binary_expression ([
  "-"
  "+"
  "*"
  "/"
  "%"
  "^"
]) @keyword.operator.arithmetic)

(binary_expression ([
  "<"
  "<="
  ">"
  ">="
]) @keyword.operator.relational)

(unary_expression ([
  "-"
  "+"
]) @keyword.operator.arithmetic)

[
  "="
] @keyword.operator.assignment

(augmented_assignment_expression ([
  "-="
  "+="
  "*="
  "/="
  "%="
  "^="
  "&="
  "|="
  "&&="
  "||="
  "??="
]) @keyword.operator.assignment.compound)

[
  "++"
] @keyword.operator.increment

[
  "--"
] @keyword.operator.decrement

[
  "**"
  "**="
  "<<"
  "<<="
  "=="
  "!="
  ">>"
  ">>="
  ">>>"
  ">>>="
  "~"
  "&"
  "|"
] @keyword.operator

(union_type
  ("|") @keyword.operator.type)

(intersection_type
  ("&") @keyword.operator.type)

(type_annotation
  (":") @keyword.operator.type.annotation)

(index_signature
  (":") @keyword.operator.type.annotation)

(type_predicate_annotation
  (":") @keyword.operator.type.annotation)

(conditional_type
  ([
    "?"
    ":"
  ]) @keyword.operator.ternary)

[
  "{"
  "}"
  "("
  ")"
  "["
  "]"
] @punctuation

(template_substitution
  "${" @punctuation.definition.template-expression.begin
  "}" @punctuation.definition.template-expression.end)

(template_type
  "${" @punctuation.definition.template-expression.begin
  "}" @punctuation.definition.template-expression.end)

(type_arguments
  "<" @punctuation.definition.typeparameters.begin
  ">" @punctuation.definition.typeparameters.end)

(type_parameters
  "<" @punctuation.definition.typeparameters.begin
  ">" @punctuation.definition.typeparameters.end)

; Keywords

("typeof") @keyword.operator.expression.typeof

(binary_expression "instanceof" @keyword.operator.expression.instanceof)

("of") @keyword.operator.expression.of

("is") @keyword.operator.expression.is

[
  "delete"
  "in"
  "infer"
  "keyof"
] @keyword.operator.expression

[
  "as"
  "await"
  "break"
  "case"
  "catch"
  "continue"
  "default"
  "do"
  "else"
  "export"
  "finally"
  "for"
  "from"
  "if"
  "import"
  "require"
  "return"
  "satisfies"
  "switch"
  "throw"
  "try"
  "while"
  "yield"
] @keyword.control

[
  "abstract"
  "async"
  "declare"
  "extends"
  "implements"
  "override"
  "private"
  "protected"
  "public"
  "readonly"
  "static"
] @storage.modifier

[
  "=>"
  "class"
  "const"
  "enum"
  "function"
  "get"
  "interface"
  "let"
  "namespace"
  "set"
  "var"
] @storage.type

("type") @storage.type.type

[
  "module"
] @storage.type.namespace

[
  "debugger"
  "target"
  "with"
] @keyword

(regex_flags) @keyword

(unary_expression
  "void" @keyword.operator.expression.void)

[
  "new"
] @keyword.operator.new

(public_field_definition
  ("?") @keyword.operator.optional)

(property_signature
  ("?") @keyword.operator.optional)

(method_signature
  ("?") @keyword.operator.optional)

(optional_parameter
  ([
    "?"
    ":"
  ]) @keyword.operator.optional)

(ternary_expression
  ([
    "?"
    ":"
  ]) @keyword.operator.ternary)

(optional_chain
  ("?.") @punctuation.accessor.optional)

(rest_pattern
  ("...") @keyword.operator.rest)
(rest_type
  ("...") @keyword.operator.rest)

(spread_element
  ("...") @keyword.operator.spread)

; Language constants

[
  (null)
] @constant.language.null

[
  (undefined)
] @constant.language.undefined

((identifier) @constant.language.nan
  (#eq? @constant.language.nan "NaN"))

((identifier) @constant.language.infinity
  (#eq? @constant.language.infinity "Infinity"))

[
  (true)
] @constant.language.boolean.true

[
  (false)
] @constant.language.boolean.false

(literal_type
  [
    (null)
    (undefined)
    (true)
    (false)
  ] @support.type.builtin)

(namespace_import
  "*" @constant.language)
