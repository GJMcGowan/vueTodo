import Vue from 'vue';
import List from 'src/components/List';

describe('List.vue', () => {
  const vm = new Vue({
    template: '<div><list></list></div>',
    components: { List },
  }).$mount();

  it('should render a default list item', () => {
    expect(vm.$el.querySelector('.list ul li h2').textContent).to.contain('1st Item');
  });

  xit('should allow a user to add a list item', () => {

  });

  xit('should allow a user to remove a list item', () => {
    const button = vm.$el.querySelector('.list ul li button');
    const event = new Event('click');

    button.dispatchEvent(event);

    expect(vm.$el.querySelector('.list ul li h2').textContent).not.to.contain('1st Item');
  });
});
