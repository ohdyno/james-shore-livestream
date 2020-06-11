// Copyright Titanium I.T. LLC.
'use strict';

const assert = require('../assert');
const rot13 = require('./rot13');

describe('ROT-13', function () {

	it('does nothing when input is empty', function () {
		assert.equal(rot13.transform(''), '');
	});

	it('transforms lowercase letters', function () {
		assert.equal(rot13.transform('abcdefghijklmnopqrstuvwxyz'), 'nopqrstuvwxyzabcdefghijklm');
	});

	it('transforms uppercase letters', function () {
		assert.equal(rot13.transform('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'NOPQRSTUVWXYZABCDEFGHIJKLM');
	});

	it('does not transform emojis', function () {
		assert.equal(rot13.transform('😁😃😱😰'), '😁😃😱😰');
	});
	
	it('does not transform symbols', function () {
		assert.equal(rot13.transform('`{@'), '`{@');
	});

	it('does not transform numbers', function () {
		assert.equal(rot13.transform('1234567890'), '1234567890');
	});

	it('does not transform non-English letters', function () {
		assert.equal(rot13.transform('åç¡™£åß∂ƒ'), 'åç¡™£åß∂ƒ');
	});

	it('fails fast when input is not a string', function () {
		assert.throws(
			() => rot13.transform(),
			"Expect input to be a string"
		);
	});

});
