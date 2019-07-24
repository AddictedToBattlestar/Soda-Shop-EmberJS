import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | vending-machine-display', function(hooks) {
  setupRenderingTest(hooks);

  test('no text passed to display', async function(assert) {
    await render(hbs`<VendingMachineDisplay />`);
    assert.equal(this.element.textContent.trim(), '');
  });

  test('no text passed to display', async function(assert) {
    await render(hbs`<VendingMachineDisplay @displayText="foo" />`);
    assert.equal(this.element.textContent.trim(), 'foo');
  });
});
