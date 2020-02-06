import { shallowMount } from '@vue/test-utils';
import HeroesList from '@/components/HeroesList.vue';
import { heroes } from '../../mock-data';

describe('`HeroesList` component', () => {
  let wrapper;
  let props;

  const mount = () => {
    if (!wrapper) {
      wrapper = shallowMount(HeroesList, {
        propsData: { ...props }
      });
    }
    return wrapper;
  };

  beforeEach(() => {
    wrapper = null;
    props = { heroes: [...heroes] };
  });

  it('renders without exploding', () => {
    expect(mount().exists()).toBe(true);
  });

  describe('when `heroes` prop is present and NOT empty', () => {
    it('renders a list with list items', () => {
      const list = mount().find('ul.heroes-list');

      expect(list.exists()).toBe(true);
      expect(list.findAll('li').length).toEqual(heroes.length);
    });
  });

  describe('when `heroes` props is present and empty', () => {
    it('renders a `p` element with message "No heroes to display!"', () => {
      props = { heroes: [] };
      const message = mount().find('.heroes-message');
      expect(message.exists()).toBe(true);
      expect(message.find('p').exists()).toBe(true);
      expect(message.find('p').text()).toEqual('No heroes to display!');
    });
  });
});
