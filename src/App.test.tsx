import { parseData } from './App';

test('standard case', () => {
    const input = 'There is a conflict with your submission and another ASIN “B087TR7T44” in our catalogue. Change the product attribute to “Cranberry” or contact us to change the brand value if you are the brand owner.\nThere is a conflict with your submission and another ASIN “B09XJ1LL5G” in our catalogue. Change the product attribute to “Total Shiny Black” or contact us to change the brand value if you are the brand owner.';

    const output = parseData( input );

    const expectedOutput = 'Cranberry\nTotal Shiny Black';

    expect( output ).toBe( expectedOutput );
});

test('special case A', () => {
    const input = 'There is a conflict with your submission and another ASIN “B09NT94SG7” in our catalogue. Change the product attribute to “["Multicoloured"]” or contact us to change the brand value if you are the brand owner.';

    const output = parseData( input );

    const expectedOutput = '["Multicoloured"]';

    expect( output ).toBe( expectedOutput );
});

test('should not break if only one block is quoted', () => {
    const input = 'This string contain "only one" quoted part';

    const output = parseData( input );

    const expectedOutput = '';

    expect( output ).toBe( expectedOutput );
});

test('no matching input', () => {
    const input = 'There is no quoted text here';

    const output = parseData( input );

    const expectedOutput = '';

    expect( output ).toBe( expectedOutput );
});