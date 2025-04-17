searchState.loadedDescShard("egglog", 0, "egglog\nA dummy node used to represent omitted nodes.\nA report of the results of an extract action.\nA user defined function call.\nA primitive value.\nRunning a schedule produces a report of the results. This …\nA node in the serialized egraph.\nA node that was split into multiple e-classes.\nLike <code>Expr</code>s but with sharing and deduplication.\nA hashconsing arena for <code>Term</code>s.\nStores resolved typechecking information. TODO make these …\nAdd a user-defined sort\nAdds a sort constructor to the typechecker’s known set …\nAdd a user-defined primitive\nMake and return a <code>Term::App</code> with the given head symbol and …\nGets the value for a serialized class ID.\nDisable saving messages to be printed to the user and …\nEnable saving messages to be printed to the user.\nRecursively converts the given expression to a term.\nThis example uses <code>EGraph::extract</code> to extract a term. The …\nExtract a value to a <code>TermDag</code> and <code>Term</code> in the <code>TermDag</code>. Note …\nExtract a value to a string for printing. See also …\nfind the leader value for a particular eclass\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets the serialized node for the node ID.\nConvert the given id to the corresponding term.\nGets the last extract report and returns it, if the last …\nGets the overall run report and returns it.\nGets the last run report and returns it, if the last …\nReturns a sort based on the type\nReturns the first sort that satisfies the type and …\nConstructs a type constraint for the primitive that uses …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the node is a primitive value.\nMake and return a <code>Term::Lit</code> with the given literal, and …\nConvert the given term to its id.\nWhether messages are enabled.\nTakes a source program <code>input</code>, parses it, runs it, and …\nPop the current egraph off the stack, replacing it with …\nRun a program, represented as an AST. Return a list of …\nThe time it took to run the query, for each rule.\nSerialize the egraph into a format that can be read by the …\nReturns the number of nodes in this DAG.\nRecursively converts the given term to an expression.\nGets the serialized node ID for the primitive, omitted, or …\nConverts the given term to a string.\nIf any changes were made to the database, this is true.\nGets the serialized class ID for a value.\nMake and return a <code>Term::Var</code> with the given symbol, and …\nThe name of the function.\nThe offset of the index in the table. This can be resolved …\nPerform an <code>Action</code> on the global database (see …\nPerform an <code>Action</code> on the global database (see …\nUsing the <code>ruleset</code> command, defines a new ruleset that can …\nUsing the <code>ruleset</code> command, defines a new ruleset that can …\nSimilar to <code>Command::Rewrite</code>, but generates two rules, one …\nSimilar to <code>Command::Rewrite</code>, but generates two rules, one …\nChange a function entry.\nDelete or subsume (mark as hidden from future rewrites …\nDelete or subsume (mark as hidden from future rewrites …\nThe <code>check</code> command checks that the given facts match at …\nThe <code>check</code> command checks that the given facts match at …\nThe <code>constructor</code> command defines a new constructor for a …\nThe <code>constructor</code> command defines a new constructor for a …\nEgglog supports three types of functions\nEgglog supports three types of functions\n<code>delete</code> this entry from a function. Be wary! Only delete …\n<code>extract</code> a datatype from the egraph, choosing the smallest …\n<code>extract</code> a datatype from the egraph, choosing the smallest …\nAssert that a command fails with an error.\nAssert that a command fails with an error.\nThe <code>function</code> command declare an egglog custom function, …\nThe <code>function</code> command declare an egglog custom function, …\nA <code>Command</code> is the top-level construct in egglog. It …\nFacts are the left-hand side of a <code>Command::Rule</code>. They …\nRepresents the declaration of a function directly parsed …\nA <code>NCommand</code> is a desugared <code>Command</code>, where syntactic sugars …\nInclude another egglog file directly as text and run it.\nInclude another egglog file directly as text and run it.\nInput a CSV file directly into a function.\nInput a CSV file directly into a function.\nBind a variable to a particular datatype or primitive. At …\nBind a variable to a particular datatype or primitive. At …\nExtract and output a set of expressions to a file.\nExtract and output a set of expressions to a file.\n<code>pop</code> the current egraph, restoring the previous one. The …\n<code>pop</code> the current egraph, restoring the previous one. The …\nPrint out rows a given function, extracting each of the …\nPrint out rows a given function, extracting each of the …\nPrint runtime statistics about rules and rulesets so far.\nPrint runtime statistics about rules and rulesets so far.\nPrint out the number of rows in a function or all …\nPrint out the number of rows in a function or all …\n<code>push</code> the current egraph <code>n</code> times so that it is saved. …\n<code>push</code> the current egraph <code>n</code> times so that it is saved. …\nThe <code>query-extract</code> command runs a query, extracting the …\nThe <code>query-extract</code> command runs a query, extracting the …\nThe <code>relation</code> command declares a named relation Example:\nThe <code>relation</code> command declares a named relation Example:\n<code>rewrite</code> is syntactic sugar for a specific form of <code>rule</code> …\n<code>rewrite</code> is syntactic sugar for a specific form of <code>rule</code> …\nRuns a <code>Schedule</code>, which specifies rulesets and the number …\nRuns a <code>Schedule</code>, which specifies rulesets and the number …\n<code>set</code> a function to a particular result. <code>set</code> should not be …\n<code>set</code> a function to a particular result. <code>set</code> should not be …\nEgglog supports several <em>experimental</em> options that can be …\nEgglog supports several <em>experimental</em> options that can be …\nCreate a new user-defined sort, which can then be used in …\nCreate a new user-defined sort, which can then be used in …\n<code>subsume</code> this entry so that it cannot be queried or …\nA interned string in the global symbol table.\n<code>union</code> two datatypes, making them equal in the implicit, …\n<code>union</code> two datatypes, making them equal in the implicit, …\nUsing the <code>combined-ruleset</code> command, construct another …\nUsing the <code>combined-ruleset</code> command, construct another …\nConvert this symbol into the string in the static, global …\nConverts the rewrite into an s-expression.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGlobals are desugared to functions, with this flag set to …\nGlobals are desugared to functions, with this flag set to …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIs this a reference to a global variable? After the …\nIntern a string into the global symbol table.\nParse a string into egglog.\n<code>subst</code> replaces occurrences of variables and head symbols …\nApplys <code>f</code> to all sub-expressions (including <code>self</code>) …\nApplys <code>f</code> to all sub-expressions (including <code>self</code>) …\nA span from a <code>.egg</code> file. Constructed by <code>parse_program</code> and …\nPanics if a span is needed. Prefer <code>Span::Rust</code> (see <code>span!</code>) …\nA span from a <code>.rs</code> file. Constructed by the <code>span!</code> macro.\nA <code>Span</code> contains the file name and a pair of offsets …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThis constraint requires all types to be equivalent to …\nConstruct a set of <code>Assign</code> constraints that fully constrain …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRequires all arguments to have the given sort. If …\nRequires the length of arguments to be <code>exact_length</code>. Note …\nRequires the output argument to have the given sort.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRational numbers supporting these primitives:\n64-bit floating point numbers supporting these primitives:\nSigned 64-bit integers supporting these primitives:\nA map from a key type to a value type supporting these …\nApply the function to the values\nExtracting a term (with smallest cost) out of a primitive …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn the inner values and sorts. Only eq_container_sort …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn the serialized name of the sort\nThis trait lets us statically dispatch between <code>fresh</code> …\nGenerates fresh symbols for internal use during …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.")