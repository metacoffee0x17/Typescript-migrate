import { mockPluginParams } from '../test-utils';
import eslintFixPlugin from '../../src/plugins/eslint-fix';

describe('eslint-fix plugin', () => {
  it.only('handles eslint comma', async () => {
    const text = `const hello = 'world'`;
    const result = await eslintFixPlugin.run(mockPluginParams({ text, fileName: 'Foo.tsx' }));

    const expected = `const hello = 'world';\n`;
    expect(result).toBe(expected);
  });
});

