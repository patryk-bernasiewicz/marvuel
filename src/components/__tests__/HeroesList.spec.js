import { shallowMount } from '@vue/test-utils';
import HeroesList from '@/components/HeroesList.vue';
import { heroes } from '../../mock-data';

describe('`HeroesList` component', () => {
  let wrapper;
  let store;

  const stubs = {
    directives: {
      'infinite-scroll': () => null
    },
    computed: {
      store: () => ({ ...store })
    }
  };

  const mount = () => {
    if (!wrapper) {
      wrapper = shallowMount(HeroesList, stubs);
    }
    return wrapper;
  };

  beforeEach(() => {
    wrapper = null;
    store = { heroes: [...heroes] };
  });

  it('renders without exploding', () => {
    expect(mount().exists()).toBe(true);
  });

  describe('when `heroes` is present in state and NOT empty', () => {
    it('renders a list with list items', () => {
      const list = mount().find('ul.heroes-list');

      expect(list.exists()).toBe(true);
      expect(list.findAll('li').length).toEqual(heroes.length);
    });
  });
});
