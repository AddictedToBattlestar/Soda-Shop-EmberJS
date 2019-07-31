import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CoinSlotComponent extends Component {
  @action
  submit(coinInserted) {
    this.args.onCoinInsertion(coinInserted);
  }
}
