import { throws, deepEqual } from 'assert';

import * as mainModule from './model.js';

const kTesting = {
	StubSettingObjectValid: function() {
		return {
			LCHSettingKey: 'alfa',
			LCHSettingValue: 'bravo',
		};
	},
};

describe('LCHSettingsModelErrorsFor', function testLCHSettingsModelErrorsFor() {

	it('throws error if not object', function() {
		throws(function() {
			mainModule.LCHSettingsModelErrorsFor(null);
		}, /LCHErrorInputInvalid/);
	});

	it('returns object if LCHSettingKey not string', function() {
		deepEqual(mainModule.LCHSettingsModelErrorsFor(Object.assign(kTesting.StubSettingObjectValid(), {
			LCHSettingKey: null,
		})), {
			LCHSettingKey: [
				'LCHErrorNotString',
			],
		});
	});

	it('returns object if LCHSettingKey not filled', function() {
		deepEqual(mainModule.LCHSettingsModelErrorsFor(Object.assign(kTesting.StubSettingObjectValid(), {
			LCHSettingKey: ' ',
		})), {
			LCHSettingKey: [
				'LCHErrorNotFilled',
			],
		});
	});

	it('returns object if LCHSettingValue not string', function() {
		deepEqual(mainModule.LCHSettingsModelErrorsFor(Object.assign(kTesting.StubSettingObjectValid(), {
			LCHSettingValue: null,
		})), {
			LCHSettingValue: [
				'LCHErrorNotString',
			],
		});
	});

	it('returns null', function() {
		deepEqual(mainModule.LCHSettingsModelErrorsFor(kTesting.StubSettingObjectValid()), null);
	});

});
