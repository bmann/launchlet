import { throws, deepEqual } from 'assert';

import * as mainModule from './storage.js';

describe('LCHSettingStoragePath', function testLCHSettingStoragePath() {

	it('returns string', function() {
		deepEqual(mainModule.LCHSettingStoragePath('alfa'), 'lch_settings/alfa');
	});

	it('returns string if blank', function() {
		deepEqual(mainModule.LCHSettingStoragePath(''), 'lch_settings/');
	});

	it('returns string if undefined', function() {
		deepEqual(mainModule.LCHSettingStoragePath(), 'lch_settings/');
	});

});
