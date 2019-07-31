import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | coin-slot', function(hooks) {
  setupRenderingTest(hooks);
  let processCoinInsertionCalls;

  hooks.beforeEach(async function () {
    processCoinInsertionCalls = [];
    this.set('processCoinInsertion', (insertedCoin) => {
      processCoinInsertionCalls.push(insertedCoin);
    });
  });

  test('it renders', async function(assert) {
    await render(hbs`<CoinSlot @onCoinInsertion={{action this.processCoinInsertion}}/>`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('it notifies when a Penny is inserted', async function(assert) {
    await render(hbs`<CoinSlot @onCoinInsertion={{action this.processCoinInsertion}}/>`);
    await click('.penny');

    assert.equal(processCoinInsertionCalls.length, 1);
    assert.equal(processCoinInsertionCalls[0], 'penny');
  });

  test('it notifies when a Nickel is inserted', async function(assert) {
    await render(hbs`<CoinSlot @onCoinInsertion={{action this.processCoinInsertion}}/>`);
    await click('.nickel');

    assert.equal(processCoinInsertionCalls.length, 1);
    assert.equal(processCoinInsertionCalls[0], 'nickel');
  });

  test('it notifies when a Nickel is inserted', async function(assert) {
    await render(hbs`<CoinSlot @onCoinInsertion={{action this.processCoinInsertion}}/>`);
    await click('.dime');

    assert.equal(processCoinInsertionCalls.length, 1);
    assert.equal(processCoinInsertionCalls[0], 'dime');
  });

  test('it notifies when a Nickel is inserted', async function(assert) {
    await render(hbs`<CoinSlot @onCoinInsertion={{action this.processCoinInsertion}}/>`);
    await click('.quarter');

    assert.equal(processCoinInsertionCalls.length, 1);
    assert.equal(processCoinInsertionCalls[0], 'quarter');
  });
});
