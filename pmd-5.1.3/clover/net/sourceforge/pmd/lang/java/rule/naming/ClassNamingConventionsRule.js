var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":17,"id":18512,"methods":[{"el":16,"sc":5,"sl":11}],"name":"ClassNamingConventionsRule","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_338":{"methods":[{"sl":11}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":12},{"sl":15}]},"test_445":{"methods":[{"sl":11}],"name":"testPmdOptions","pass":true,"statements":[{"sl":12},{"sl":15}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [338, 445], [338, 445], [], [], [338, 445], [], []]
