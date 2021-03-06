const { throws, rejects, deepEqual } = require('assert');

const mod = require('./main.js').default;

describe('LCHFormulaModelErrorsFor', function test_LCHFormulaModelErrorsFor() {

	it('throws error if not object', function() {
		throws(function() {
			mod.LCHFormulaModelErrorsFor(null);
		}, /LCHErrorInputNotValid/);
	});

	it('returns null', function() {
		deepEqual(mod.LCHFormulaModelErrorsFor({}), null);
	});

	it('returns object if LCHOptionValidateIfNotPresent', function() {
		deepEqual(Array.isArray(Object.keys(mod.LCHFormulaModelErrorsFor({}, {
			LCHOptionValidateIfNotPresent: true,
		}))), true);
	});

	context('LCHFormulaName', function() {

		it('returns object if not string', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaName: null,
			}), {
				LCHFormulaName: [
					'LCHErrorNotString',
				],
			});
		});

		it('returns null', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaName: 'alfa',
			}), null);
		});

	});

	context('LCHFormulaSignature', function() {

		it('returns object if not string', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaSignature: null,
			}), {
				LCHFormulaSignature: [
					'LCHErrorNotString',
				],
			});
		});

		it('returns null', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaSignature: 'alfa',
			}), null);
		});

	});

	context('LCHFormulaInputTypes', function() {

		it('returns object if not string', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaInputTypes: null,
			}), {
				LCHFormulaInputTypes: [
					'LCHErrorNotString',
				],
			});
		});

		it('returns null', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaInputTypes: 'alfa',
			}), null);
		});

		it('allows comma', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaInputTypes: 'alfa,bravo',
			}), null);
		});

	});

	context('LCHFormulaOutputType', function() {

		it('returns object if not string', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaOutputType: null,
			}), {
				LCHFormulaOutputType: [
					'LCHErrorNotString',
				],
			});
		});

		it('returns null', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaOutputType: 'alfa',
			}), null);
		});

	});

	context('LCHFormulaIsHidden', function() {

		it('returns object if not function', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaIsHidden: null,
			}), {
				LCHFormulaIsHidden: [
					'LCHErrorNotFunction',
				],
			});
		});

		it('returns null', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaIsHidden () {},
			}), null);
		});

	});

	context('LCHFormulaURLFilter', function() {

		it('returns object if not string', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaURLFilter: null,
			}), {
				LCHFormulaURLFilter: [
					'LCHErrorNotString',
				],
			});
		});

		it('returns null', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaURLFilter: 'alfa',
			}), null);
		});

	});

	context('LCHFormulaIsAutomatic', function() {

		it('returns object if not boolean', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaIsAutomatic: null,
			}), {
				LCHFormulaIsAutomatic: [
					'LCHErrorNotBoolean',
				],
			});
		});

		it('returns null', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaIsAutomatic: true,
			}), null);
		});

	});

	context('LCHFormulaStyle', function() {

		it('returns object if not string', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaStyle: null,
			}), {
				LCHFormulaStyle: [
					'LCHErrorNotString',
				],
			});
		});

		it('returns null', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaStyle: 'alfa',
			}), null);
		});

	});

	context('LCHFormulaIsFlagged', function() {

		it('returns object if not boolean', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaIsFlagged: null,
			}), {
				LCHFormulaIsFlagged: [
					'LCHErrorNotBoolean',
				],
			});
		});

		it('returns null', function() {
			deepEqual(mod.LCHFormulaModelErrorsFor({
				LCHFormulaIsFlagged: true,
			}), null);
		});

	});

});

describe('LCHFormulaFrom', function test_LCHFormulaFrom() {

	it('throws error if not object', function() {
		throws(function() {
			mod.LCHFormulaFrom(null);
		}, /LCHErrorInputNotValid/);
	});

	it('returns inputData', function() {
		deepEqual(mod.LCHFormulaFrom({}), {});
	});

	it('replaces domain', function() {
		deepEqual(mod.LCHFormulaFrom({
			LCHAlfaBravo: '',
		}), {
			LCHFormulaBravo: '',
		});
	});

});

describe('LCHFormulaTo', function test_LCHFormulaTo() {

	it('throws error if not object', function() {
		throws(function() {
			mod.LCHFormulaTo(null, '');
		}, /LCHErrorInputNotValid/);
	});

	it('throws error if param2 not string', function() {
		throws(function() {
			mod.LCHFormulaTo({}, null);
		}, /LCHErrorInputNotValid/);
	});

	it('returns inputData', function() {
		deepEqual(mod.LCHFormulaTo({}, ''), {});
	});

	it('replaces domain and prefix', function() {
		deepEqual(mod.LCHFormulaTo({
			LCHFormulaAlfa: '',
		}, 'bravo'), {
			bravoAlfa: '',
		});
	});

});

describe('LCHFormulaSafeStringFields', function test_LCHFormulaSafeStringFields() {

	it('prefixes fields with with LCHFormula', function() {
		deepEqual(mod.LCHFormulaSafeStringFields.filter(function (e) {
			if (e === '@context') {
				return false;
			};

			return e.indexOf('LCHFormula') !== 0;
		}), []);
	});

});

describe('LCHFormulaToEvaluate', function test_LCHFormulaToEvaluate() {

	it('throws error if not valid', function() {
		throws(function() {
			mod.LCHFormulaToEvaluate({
				LCHFormulaName: null,
			});
		}, /LCHErrorInputNotValid/);
	});

	it('returns object', function() {
		deepEqual(mod.LCHFormulaToEvaluate({}), {});
	});

	it('removes LCHFormulaSafeStringFields', function() {
		deepEqual(mod.LCHFormulaToEvaluate(mod.LCHFormulaSafeStringFields.reduce(function (coll, item) {
			coll[item] = 'alfa';
			return coll;
		}, {})), {});
	});

	it('adds closure from LCHFormulaCallbackArgs', function() {
		deepEqual(mod.LCHFormulaToEvaluate({
			LCHFormulaCallbackArgs: 'alfa',
		}), {
			LCHFormulaCallbackRaw: '(function (alfa) {  })',
		});
	});

	it('adds closure from LCHFormulaCallbackArgs', function() {
		deepEqual(mod.LCHFormulaToEvaluate({
			LCHFormulaCallbackBody: 'alfa',
		}), {
			LCHFormulaCallbackRaw: '(function () { alfa })',
		});
	});

	it('adds closure from LCHFormulaCanonicalExampleCallbackBody', function() {
		deepEqual(mod.LCHFormulaToEvaluate({
			LCHFormulaCanonicalExampleCallbackBody: 'alfa',
		}), {
			LCHFormulaCanonicalExampleCallbackRaw: '(function () { alfa })',
		});
	});

	it('does not modify input', function() {
		const item = {};
		deepEqual(mod.LCHFormulaToEvaluate(item) !== item, true);
	});

});
