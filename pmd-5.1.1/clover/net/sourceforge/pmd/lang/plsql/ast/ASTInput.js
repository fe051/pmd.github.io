var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":25,"id":23320,"methods":[{"el":14,"sc":3,"sl":12},{"el":18,"sc":3,"sl":16},{"el":24,"sc":3,"sl":22}],"name":"ASTInput","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_153":{"methods":[{"sl":16},{"sl":22}],"name":"testExpressionParentChildLinks","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_194":{"methods":[{"sl":16},{"sl":22}],"name":"testLabelledStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_333":{"methods":[{"sl":16},{"sl":22}],"name":"testWhileStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_365":{"methods":[{"sl":16},{"sl":22}],"name":"testIfStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_442":{"methods":[{"sl":16}],"name":"testBOM","pass":true,"statements":[{"sl":17}]},"test_627":{"methods":[{"sl":16},{"sl":22}],"name":"testSimpleCaseStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_633":{"methods":[{"sl":16},{"sl":22}],"name":"testVariableOrConstantDeclaratorParentChildLinks","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_668":{"methods":[{"sl":16}],"name":"testExceptions","pass":true,"statements":[{"sl":17}]},"test_822":{"methods":[{"sl":16},{"sl":22}],"name":"testForStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [153, 633, 668, 333, 627, 442, 365, 194, 822], [153, 633, 668, 333, 627, 442, 365, 194, 822], [], [], [], [], [153, 633, 333, 627, 365, 194, 822], [153, 633, 333, 627, 365, 194, 822], [], [], []]
