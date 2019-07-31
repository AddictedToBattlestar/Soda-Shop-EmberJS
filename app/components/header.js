import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HeaderComponent extends Component {
    @tracked insertedCoinToLog = '';

    @action
    processCoinInsertion(insertedCoin) {
        this.insertedCoinToLog = insertedCoin
    }
}
