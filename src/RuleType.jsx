export default class RuleType
{

	static get EMAIL()
	{
		return 'email';
	}

	static get FILLED()
	{
		return 'filled';
	}

	static get NUMERIC()
	{
		return 'numeric';
	}

	static get RANGE()
	{
		return 'range';
	}

	static get MIN()
	{
		return 'min';
	}

	static get MAX()
	{
		return 'max';
	}

	static get FLOAT()
	{
		return 'float';
	}

	static get MIN_LENGTH()
	{
		return 'minLength';
	}

	static get MAX_LENGTH()
	{
		return 'maxLength';
	}

	static get LENGTH()
	{
		return 'length';
	}

	static get EQUAL()
	{
		return 'equal';
	}

	static get NOT_EQUAL()
	{
		return 'notEqual';
	}

	static get INTEGER()
	{
		return 'integer';
	}

	static get PATTERN()
	{
		return 'pattern';
	}

	static get URL()
	{
		return 'url';
	}
}