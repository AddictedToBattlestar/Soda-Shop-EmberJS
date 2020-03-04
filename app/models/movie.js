import DS from 'ember-data';
const { Model, attr } = DS;

export default class Movie extends Model {
    @attr('string') name;
    @attr() image;
}