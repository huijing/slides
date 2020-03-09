# 🧵 What is this? Why must bind?

At &lt;RK⚡️ issue={8}&gt;, god knows when.

- Where did concept of `this` come from?
    - Important concept of OOP
    - Where did OOP come from?
        - Roots in other languages but first one was SIMULA
        - Term coined by Alan Kay, creator of Smalltalk
        - Idea for encapsulated mini-computers in software communicating via message passing than direct data sharing
        - Fun fact: Smalltalk was a functional language inspired by Lisp and Simula
        - Key essence (as thought of by Alan Kay) was to:
           - Avoid shared mutable state by encapsulating and isolating objects from other local state changes
           - Decoupling objects from one another
           - Being adaptable and resilient to changes at runtime via late binding

- What is dynamic binding?
    - Binding is the association of a symbol within a program with an address in memory
    - Can be done at compile-time or link-time (AKA static binding) or run-time (AKA dynamic binding)
    - Also depends on scope rules, e.g. local variables usually bound at run-time, global variables usually at compile-time
    - In OOP, an object can respond to the same message with a different implementation and dynamic binding is used to determine which method to invoke at run-time

- Is Javascript an object-oriented language?
    - Javascript:
        - can and does support encapsulation, message-passing, behaviour sharing and subclass polymorphism
        - allows you to assign any function to any property
        - lets you build object behaviours dynamically and change the meaning of an object at runtime
        - supports encapsulation using closures for privacy
    - Multi-paradigm language that supports object-oriented programming and dynamic binding
    - Objects in Javascript are simply composite data types, without any of the class-based programming or Alan Kay's message-passing
    - Programming with Javascript objects does not make your code “object-oriented” any more than programming with functions makes your code “functional”

- `this` in Javascript
    - uses the prototype chain
    - the meaning of `this` inside a method is determined at runtime, and rules change depending on how that method was defined
    - allows you to decide which object should be focal when invoking a function or a method

- Why `var that = this`?
    - Even though the `Animal()` constructor defines `this` as an instance of itself, in non-strict mode, the `growUp()` function defines `this` as the global object because that is where it is executed
    - They are using different `this`
    - Assigning `this` to a variable called `that` which can be closed over
    - Smuggles the outer value of `this` into the inner `growUp()` function via the `that` variable

- How to tell what `this` is?
    - Implicit binding
        - when the dot notation is used
        - look at whatever is to the left of the dot, usually that ends up being the context
        - probably works 80% of the time
    - Explicit binding
        - when you use `call()`, `apply()` or `bind()` on a function
        - if your function stands alone, i.e. not the method of an object, can still invoke the function
    - `new` binding
        - when using the `new` keyword, Javascript will create a new object called `this`
        - `this` will delegate to the Animal's prototype on failed lookups
        - Javascript does prototypal inheritance
        - a delegate prototype is an object that serves as a base for another object
        - when you inherit from a delegate prototype, the new object gets a reference to the prototype
        - if you try to access a property on a new object, the object's own properties are checked first, then it goes up the prototype chain until `Object.prototype`
    - Lexical binding
        - arrow functions do not have their own `this`
        - Javascript will look to the enclosing AKA parent scope to determine what `this` is referencing
    - `window` binding
        - `undefined` if you're using strict mode and the value of `this` is not set when entering an execution context, you will get `undefined`
        - In non-strict mode, Javascript will default `this` to the global object, which is `window` in the browser and `global` in Node.js
    - Using `bind()`
        - `bind()` is exactly the same as `call()` but instead of immediately invoking the function, it returns a new function you can invoke at a later time
        - the new function's `this` keyword is set to the provided value

- Event handling in React
    - HTML passes onevent attributes as a string (because all HTML attributes are strings)
        - value of the attribute are copied to the DOM object that represents the element
        - accessing the attributes' values via Javascript will get the value set in HTML
        - when code is called from inline onevent handler, `this` is set to the DOM element where the listener was placed
    - JSX passes event handlers as a function
        - class methods are not bound by default in Javascript
        - when handleClick function is passed to onClick, we are passing a reference to the function
        - when React calls the function, the context of `this` gets lost, will be undefined

- Updating state in React
    - Very common use-case for event handlers is for the updating of state of your React component
    - To make sure `this` works correctly:
        - can use `bind()` in the constructor, be explicit
        - use arrow functions, because lexical scoping
        - use Hooks and embrace functions, no need to think about `this` because you're not using it

## Notes from all the research

- First object-oriented programming language was Simula 67 which introduced the idea of data structures with associated operators (and with or without own actions) called objects.
- A class may be used as a “prefix” to another class declaration, thereby building the properties defined by the prefix into objects defined by the new class declaration.
- Central concept in SIMULA 67 is the “object”, which is a self-contained program, having its own local data and actions defined by a class declaration
- The concept was for an object to start its life like an instance of a function procedure, involved by the evaluation of a generating expression
- SIMULA 67 introduced a top down oriented mechanism through a concept of “virtual procedures”
- Identifiers may be redeclared in subclasses, the identity of an attribute is determined by the prefix level of the accessing occurrence. The ambiguity of identifier binding is resolved at compile time, i.e. static binding
- If a procedure P is specified as virtual in a class C, the binding scheme is semi-dynamic, any call for P occurring in C or any subclass of C will bind to that declaration of P
- Considered dynamic binding because it depends on the class membership of the actual object
- Incremental modification facilitates reusing a conceptual or physical entity in constructing an incrementally similar one.
- Inheritance is a composition mechanism that internalises inherited attributes by late (execution-time) binding of self-reference to the inheriting object.
- Dynamic binding of self-reference at execution time captures the essential difference between inheritance and invocation
- Delayed binding allows attributes of a parent to be internalised by the objects that use them in the sense that self-references in the parent refer to the identity of the currently invoking object
- In a world without self-reference, inheritance reduces to invocation and inheritance hierarchies are simply tree-structured resource-sharing hierarchies