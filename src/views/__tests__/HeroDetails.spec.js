import { shallowMount } from '@vue/test-utils';
import HeroDetails from '@/views/HeroDetails.vue';

describe('`HeroDetails` view', () => {
  let wrapper;

  const mount = () => {
    if (!wrapper) {
      wrapper = shallowMount(HeroDetails);
    }
    return wrapper;
  };

  beforeEach(() => {
    wrapper = null;
  });

  it('renders without exploding', () => {
    expect(mount().exists()).toBe(true);
  });
});
