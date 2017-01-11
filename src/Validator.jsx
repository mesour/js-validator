import RuleType from './RuleType';
import Matcher from './Matcher';

export default class Validator
{

	type = RuleType;

	validate(type, val, arg)
	{
		arg = arg || null;
		if (type === RuleType.FILLED) {
			return Validator.validateFilled(val);
		} else {
			return Validator.validateField(type, val, arg);
		}
		return true;
	}

	static validateFilled(val)
	{
		return !!val;
	}

	static validateField(type, val, arg)
	{
		if (typeof type === 'undefined') {
			throw new Error('Validator type is required.');
		}
		if (typeof Matcher[type] !== 'function') {
			throw new Error('Matcher with type ' + type + ' not exist.');
		}
		return Matcher[type](val, arg);
	}

}