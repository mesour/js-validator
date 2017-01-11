export default class Matcher
{

	static email(val)
	{
		return (/^("([ !#-[\]-~]|\\[ -~])+"|[-a-z0-9!#$%&'*+\/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+\/=?^_`{|}~]+)*)@([0-9a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)+[a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF])?$/i).test(val);
	}

	static equal(val, arg)
	{
		if (arg === undefined) {
			return null;
		}

		function toString(val) {
			if (typeof val === 'number' || typeof val === 'string') {
				return '' + val;
			} else {
				return val === true ? '1' : '';
			}
		}

		val = Matcher.isArray(val) ? val : [val];
		arg = Matcher.isArray(arg) ? arg : [arg];
		loop:
			for (let i1 = 0, len1 = val.length; i1 < len1; i1++) {
				for (let i2 = 0, len2 = arg.length; i2 < len2; i2++) {
					if (toString(val[i1]) === toString(arg[i2])) {
						continue loop;
					}
				}
				return false;
			}
		return true;
	}

	static numeric(val, arg)
	{
		let whitespace =
			" \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
		return (typeof mixed_var === 'number' || (typeof mixed_var === 'string' && whitespace.indexOf(mixed_var.slice(-1)) === -
				1)) && mixed_var !== '' && !isNaN(mixed_var);
	}

	static notEqual(val, arg)
	{
		return arg === undefined ? null : !Nette.validators.equal(elem, arg, val);
	}

	static minLength(val, arg)
	{
		return val.length >= arg;
	}

	static maxLength(val, arg)
	{
		return val.length <= arg;
	}

	static length(val, arg)
	{
		arg = Matcher.isArray(arg) ? arg : [arg, arg];
		return (arg[0] === null || val.length >= arg[0]) && (arg[1] === null || val.length <= arg[1]);
	}

	static url(val)
	{
		if (!(/^[a-z\d+.-]+:/).test(val)) {
			val = 'http://' + val;
		}
		if ((/^https?:\/\/((([-_0-9a-z\u00C0-\u02FF\u0370-\u1EFF]+\.)*[0-9a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)?[a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF])?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[[0-9a-f:]{3,39}\])(:\d{1,5})?(\/\S*)?$/i).test(val)) {
			return true;
		}
		return false;
	}

	static pattern(val, arg)
	{
		try {
			return typeof arg === 'string' ? (new RegExp('^(?:' + arg + ')$')).test(val) : null;
		} catch (e) {}
	}

	static integer(val)
	{
		return (/^-?[0-9]+$/).test(val);
	}

	static float(val)
	{
		val = val.replace(' ', '').replace(',', '.');
		if ((/^-?[0-9]*[.,]?[0-9]+$/).test(val)) {
			return true;
		}
		return false;
	}

	static min(val, arg)
	{
		return arg === null || parseFloat(val) >= arg;
	}

	static max(val, arg)
	{
		return arg === null || parseFloat(val) <= arg;
	}

	static range(val, arg)
	{
		return Matcher.isArray(arg) ?
			((arg[0] === null || parseFloat(val) >= arg[0]) && (arg[1] === null || parseFloat(val) <= arg[1])) : null;
	}

	static isArray(arg)
	{
		return Object.prototype.toString.call(arg) === '[object Array]';
	}

}