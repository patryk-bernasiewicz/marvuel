import { shallowMount } from '@vue/test-utils';
import Heroes from '@/views/Heroes.vue';

// Child components
import HomeHeader from '@/components/HomeHeader.vue';

describe('`Heroes` view', () => {
  let wrapper;

  const mount = () => {
    if (!wrapper) {
      wrapper = shallowMount(Heroes);
    }
    return wrapper;
  };

  beforeEach(() => {
    wrapper = null;
  });

  it('renders without exploding', () => {
    expect(mount().exists()).toBe(true);
  });

  it('always renders `HomeHeader` component', () => {
    expect(
      mount()
        .find(HomeHeader)
        .exists()
    ).toBe(true);
  });

  it('always renders exactly one `main` element', () => {
    expect(
      mount()
        .find('main')
        .exists()
    ).toBe(true);
    expect(mount().findAll('main').length).toEqual(1);
  });
});
