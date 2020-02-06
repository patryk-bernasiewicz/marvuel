import { shallowMount } from '@vue/test-utils';
import HeroesListItem from '@/components/HeroesListItem.vue';
import { heroes } from '../../mock-data';

describe('`HeroItem` component', () => {
  let wrapper;
  let props;

  const mount = () => {
    if (!wrapper) {
      wrapper = shallowMount(HeroesListItem, {
        propsData: { ...props }
      });
    }
    return wrapper;
  };

  beforeEach(() => {
    wrapper = null;
    props = { hero: heroes[0] };
  });

  it('renders without exploding', () => {
    expect(mount().exists()).toBe(true);
  });

  it('always renders hero name in `.hero-name` as h3', () => {
    const name = mount().find('h3.hero-name');
    expect(name.exists()).toBe(true);
    expect(name.text()).toEqual(props.hero.name);
  });

  it('always renders hero image as a `.hero-image` img with hero name as `alt`', () => {
    const expectedSrc = `${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`;
    const img = mount().find('img.hero-image');
    expect(img.exists()).toBe(true);
    expect(img.attributes().src).toEqual(expectedSrc);
    expect(img.attributes().alt).toEqual(props.hero.name);
  });
});
