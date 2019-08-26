import { throws, deepEqual } from 'assert';

import * as mainModule from './model.js';

const kTesting = {
	StubFormulaObjectValid: function() {
		return {
			LCHDocumentID: 'alfa',
			LCHDocumentBody: '',
			LCHDocumentCreationDate: new Date('2019-02-23T13:56:36Z'),
			LCHDocumentModificationDate: new Date('2019-02-23T13:56:36Z'),
		};
	},
};

describe('LCHDocumentModelErrorsFor', function testLCHDocumentModelErrorsFor() {

	it('throws error if not object', function() {
		throws(function() {
			mainModule.LCHDocumentModelErrorsFor(null);
		}, /LCHErrorInputInvalid/);
	});

	it('returns object if LCHDocumentID not string', function() {
		deepEqual(mainModule.LCHDocumentModelErrorsFor(Object.assign(kTesting.StubFormulaObjectValid(), {
			LCHDocumentID: null,
		})), {
			LCHDocumentID: [
				'LCHErrorNotString',
			],
		});
	});

	it('returns object if LCHDocumentID not filled', function() {
		deepEqual(mainModule.LCHDocumentModelErrorsFor(Object.assign(kTesting.StubFormulaObjectValid(), {
			LCHDocumentID: ' ',
		})), {
			LCHDocumentID: [
				'LCHErrorNotFilled',
			],
		});
	});

	it('returns object if LCHDocumentBody not string', function() {
		deepEqual(mainModule.LCHDocumentModelErrorsFor(Object.assign(kTesting.StubFormulaObjectValid(), {
			LCHDocumentBody: null,
		})), {
			LCHDocumentBody: [
				'LCHErrorNotString',
			],
		});
	});

	it('returns object if LCHDocumentCreationDate not date', function() {
		deepEqual(mainModule.LCHDocumentModelErrorsFor(Object.assign(kTesting.StubFormulaObjectValid(), {
			LCHDocumentCreationDate: new Date('alfa'),
		})), {
			LCHDocumentCreationDate: [
				'LCHErrorNotDate',
			],
		});
	});

	it('returns object if LCHDocumentModificationDate not date', function() {
		deepEqual(mainModule.LCHDocumentModelErrorsFor(Object.assign(kTesting.StubFormulaObjectValid(), {
			LCHDocumentModificationDate: new Date('alfa'),
		})), {
			LCHDocumentModificationDate: [
				'LCHErrorNotDate',
			],
		});
	});

	it('returns null', function() {
		deepEqual(mainModule.LCHDocumentModelErrorsFor(kTesting.StubFormulaObjectValid()), null);
	});

	context('LCHDocumentArgs', function() {

		it('returns object if not string', function() {
			deepEqual(mainModule.LCHDocumentModelErrorsFor(Object.assign(kTesting.StubFormulaObjectValid(), {
				LCHDocumentArgs: null,
			})), {
				LCHDocumentArgs: [
					'LCHErrorNotString',
				],
			});
		});

		it('returns null', function() {
			deepEqual(mainModule.LCHDocumentModelErrorsFor(Object.assign(kTesting.StubFormulaObjectValid(), {
				LCHDocumentArgs: 'alfa',
			})), null);
		});

	});

	context('LCHDocumentOutputTypeCanonicalExampleBody', function() {

		it('returns object if not string', function() {
			deepEqual(mainModule.LCHDocumentModelErrorsFor(Object.assign(kTesting.StubFormulaObjectValid(), {
				LCHDocumentOutputTypeCanonicalExampleBody: null,
			})), {
				LCHDocumentOutputTypeCanonicalExampleBody: [
					'LCHErrorNotString',
				],
			});
		});

		it('returns null', function() {
			deepEqual(mainModule.LCHDocumentModelErrorsFor(Object.assign(kTesting.StubFormulaObjectValid(), {
				LCHDocumentOutputTypeCanonicalExampleBody: '',
			})), null);
		});

	});

});

describe('LCHDocumentModelPreJSONSchemaValidate', function testLCHDocumentModelPreJSONSchemaValidate() {

	it('returns input', function() {
		deepEqual(mainModule.LCHDocumentModelPreJSONSchemaValidate({}), {});
	});

	it('returns input with LCHDocumentCreationDate as string', function() {
		deepEqual(mainModule.LCHDocumentModelPreJSONSchemaValidate({
			LCHDocumentCreationDate: new Date('2018-12-09T19:07:01.902Z'),
		}), {
			LCHDocumentCreationDate: '2018-12-09T19:07:01.902Z',
		});
	});

	it('returns input with LCHDocumentModificationDate as string', function() {
		deepEqual(mainModule.LCHDocumentModelPreJSONSchemaValidate({
			LCHDocumentModificationDate: new Date('2018-12-09T19:07:01.902Z'),
		}), {
			LCHDocumentModificationDate: '2018-12-09T19:07:01.902Z',
		});
	});

});

describe('LCHDocumentModelPostJSONParse', function testLCHDocumentModelPostJSONParse() {

	it('returns input null', function() {
		deepEqual(mainModule.LCHDocumentModelPostJSONParse(null), null);
	});

	it('returns input object', function() {
		deepEqual(mainModule.LCHDocumentModelPostJSONParse({}), {});
	});

	it('returns input with LCHDocumentCreationDate as date', function() {
		deepEqual(mainModule.LCHDocumentModelPostJSONParse({
			LCHDocumentCreationDate: '2018-12-09T19:07:01.902Z',
		}), {
			LCHDocumentCreationDate: new Date('2018-12-09T19:07:01.902Z'),
		});
	});

	it('returns input with LCHDocumentModificationDate as date', function() {
		deepEqual(mainModule.LCHDocumentModelPostJSONParse({
			LCHDocumentModificationDate: '2018-12-09T19:07:01.902Z',
		}), {
			LCHDocumentModificationDate: new Date('2018-12-09T19:07:01.902Z'),
		});
	});

});