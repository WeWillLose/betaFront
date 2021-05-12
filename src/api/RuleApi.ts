const numberRegexp = new RegExp('^[+-]?\\d+(\\.\\d+)?$');
const withoutSpacesRegexp = new RegExp(/^\S+$/);
const alphaWithRusExp = new RegExp(/^[a-zA-Zа-яА-Я]+$/);
const alphaExp = new RegExp(/^[a-zA-Z]+$/);
const alphaExpWith_ = new RegExp(/^[a-zA-Z_]+$/);
const min_username_length = 4
const min_password_length = 6
export interface RuleApiInterface {
  alpha(): (val: string) => (boolean | string);

  alphaWithRus(): (val: string) => (boolean | string);

  withoutSpaces(): (val: string) => (boolean | string);

  required(): (val: string) => (boolean | string);

  requiredWithZero(): (val: string) => (boolean | string);

  lengthLess(len: number): (val: string) => (boolean | string);

  lengthGreater(len: number): (val: string) => (boolean | string);

  lengthEquals(len: number): (val: string) => (boolean | string);

  passwordLength(len: number): (val: string) => (boolean | string);
}

export class RuleApi implements RuleApiInterface {
  alpha(): (val: string) => (boolean | string) {
    return (val: string): boolean | string => alphaExp.test(val) || 'Поле может содержать только латинские буквы';
  };
  username(): (val: string) => (boolean | string) {
    return (val: string): boolean | string => (alphaExpWith_.test(val) && this.lengthGreater(min_username_length-1)(val)) || 'Логин невалиден';
  };

  password(): (val: string) => (boolean | string) {
    return (val: string): boolean | string => (withoutSpacesRegexp.test(val) && this.lengthGreater(min_password_length-1)(val)) || 'Пароль невалиден';
  };

  alphaWithRus(): (val: string) => (boolean | string) {
    return (val: string) => alphaWithRusExp.test(val) || 'Поле может содержать только буквы';
  };

  withoutSpaces(): (val: string) => (boolean | string) {
    return (val: string) => withoutSpacesRegexp.test(val) || 'Поле не должно содержать пробелы';
  };

  required(): (val: string) => (boolean | string) {
    return (val: string) => (!!val) || 'Поле обязательное';
  };

  requiredWithZero(): (val: string) => (boolean | string) {
    return (val: string) => (!!val || val == '0') || 'Поле обязательное';
  };

  lengthLess(len: number): (val: string) => (boolean | string) {
    if (len == null) {
      console.warn('len in lengthLess is null');
    }
    return (val: string) => val.length < len || `Поле должно быть меньше ${len} символов`;
  };

  lengthGreater(len: number): (val: string) => (boolean | string) {
    if (len == null) {
      console.warn('len in lengthGreater is null');
    }
    return (val: string) => val.length > len || `Поле должно быть больше ${len} символов`;
  };

  lengthEquals(len: number): (val: string) => (boolean | string) {
    if (len == null) {
      console.warn('len in lengthEquals is null');
    }
    return (val: string) => val.length === len || `Поле должно состоять из ${len} символов`;
  };

  passwordLength(): (val: string) => (boolean | string) {
    return (val: string) => val.length >= 6 || 'Пароль должен быть больше 6 символов';
  };

  number(): (val: string) => (boolean | string) {
    return (val: string) => numberRegexp.test(val) || 'Поле должно быть числом';
  };

  numberLess(max: number): (val: number) => (boolean | string) {
    if (max == null) {
      console.warn('max in numberLess is null');
    }
    return (val: number) => val < max || `Поле должно быть меньше чем ${max}`;
  };

  numberBetweenNotStrictScore(min: number, max: number): (val: number) => (boolean | string) {
    if (min == null) {
      console.warn('min in numberBetweenNotStrict is null}');
    }
    if (max  == null) {
      console.warn('max in numberBetweenNotStrict is null');
    }
    return (val: number) => (val >= min && val <= max || val == 0) || `Min ${min}, Max ${max}`;
  };
}

const ruleApi = new RuleApi();
export default ruleApi;
