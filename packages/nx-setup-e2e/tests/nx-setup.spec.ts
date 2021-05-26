import {
  ensureNxProject,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('nx-setup e2e', () => {
  it('should create nx-setup', async (done) => {
    const plugin = uniq('nx-setup');

    ensureNxProject(
      '@semantic-release-plus/nx-setup',
      'dist/packages/nx-setup'
    );
    await runNxCommandAsync(
      `generate @nrwl/node:library --name=${plugin} --buildable --publishable --importPath=${plugin}`
    );
    await runNxCommandAsync(
      `generate @semantic-release-plus/nx-setup:configure --project=${plugin}`
    );

    done();
  }, 80000);
});
