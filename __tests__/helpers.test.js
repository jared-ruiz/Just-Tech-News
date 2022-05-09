const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
})

test('pluralize words "point" and "comment" when there is more than 1', () => {
    const plural = 'tiger';
    const amount = 2;
    const single = 'lion';
    const singleAmount = 1;

    expect(format_plural(plural, amount)).toBe('tigers');
    expect(format_plural(single, singleAmount)).toBe('lion');
})

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/pages/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?1=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
})