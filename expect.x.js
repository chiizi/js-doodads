var expect = v => ({
  equals(e) {
    if (v != e) {
      throw `Uncaught ExpectationError: ${v} is expected to equal ${e}`;
    }
  },
  fits(f) {
    if (!f(v)) {
      throw `Uncaught ExpectationError: ${v} is expected to fit ${f}`;
    }
  },
  type(c) {
    if (#v != c) {
      throw `Uncaught ExpectationError: ${v} is not an instance of ${c}`;
    }
  }
});
