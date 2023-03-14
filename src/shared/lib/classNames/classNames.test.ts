import { classNames } from './classNames';

describe('classNames', () => {
    test('empty string', () => {
        expect(classNames('', {}, [])).toBe('');
    });
    test('with only first param', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass');
    });
    test('with one additional class', () => {
        expect(classNames('someClass', {}, ['class'])).toBe('someClass class');
    });
    test('with two additional classes', () => {
        expect(
            classNames(
                'someClass',
                {},
                ['class', 'class2'],
            ),
        ).toBe('someClass class class2');
    });
    test('with two additional classes and mods', () => {
        expect(
            classNames(
                'someClass',
                { active: true, hover: true },
                ['class', 'class2'],
            ),
        ).toBe('someClass class class2 active hover');
    });
    test('with two additional classes and mods one mods false', () => {
        expect(
            classNames(
                'someClass',
                { active: true, hover: false },
                ['class', 'class2'],
            ),
        ).toBe('someClass class class2 active');
    });
    test('with two additional classes and mods one mods undefined', () => {
        expect(
            classNames(
                'someClass',
                { active: true, hover: undefined },
                ['class', 'class2'],
            ),
        ).toBe('someClass class class2 active');
    });
});
