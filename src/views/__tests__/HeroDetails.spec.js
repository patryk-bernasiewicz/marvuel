import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import HeroDetails from '@/views/HeroDetails.vue';
import { heroes } from '@/test-helpers/mock-data';

// Child components
import HeroComics from '@/components/HeroComics.vue';
import Loader from '@/components/Loader.vue';

const $route = {
  path: '/1234',
  params: {}
};

const localVue = createLocalVue();
localVue.use(Vuex);

const defaultState = {
  details: heroes[0],
  isLoading: false,
  error: null
};

describe('`HeroDetails` view', () => {
  let wrapper;
  let store;
  let state;

  const mount = () => {
    if (!state) {
      state = { ...defaultState };
    }

    store = new Vuex.Store({
      modules: {
        hero: {
          state,
          actions: {
            FETCH_DETAILS: jest.fn(),
            FETCH_COMICS: jest.fn()
          }
        }
      }
    });

    if (!wrapper) {
      wrapper = shallowMount(HeroDetails, {
        stubs: ['router-link'],
        mocks: { $route },
        store,
        localVue
      });
    }

    return wrapper;
  };

  beforeEach(() => {
    wrapper = null;
  });

  afterEach(() => {
    state = null;
  });

  it('renders without exploding', () => {
    expect(mount().exists()).toBe(true);
  });

  describe('When Hero data is still loading', () => {
    beforeEach(() => {
      state = {
        details: null,
        isLoading: true,
        error: null
      };
    });

    it('renders `Loader` component and info "Loading details for Hero..."', () => {
      const loading = mount().find('.hero-loading');
      expect(loading.find(Loader).exists()).toBe(true);
      expect(loading.find('p').exists()).toBe(true);
      expect(loading.find('p').text()).toEqual('Loading details for Hero...');
    });
  });

  describe('When Error has occured', () => {
    it('renders `.hero-error` div and info "Couldn\'t load the Hero data."', () => {
      state = {
        ...defaultState,
        details: null,
        isLoading: false,
        error: 'lorem ipsum'
      };

      const error = mount().find('.hero-error');
      expect(error.find('p:first-child').text()).toEqual(
        "Couldn't load the Hero data."
      );
      expect(error.find('p:last-child').text()).toEqual(state.error);
    });
  });

  describe('When Hero data is loaded', () => {
    it('renders `.hero-image` div with `img` element inside', () => {
      const imageWrapper = mount().find('.hero-image');
      expect(imageWrapper.exists()).toBe(true);

      const image = imageWrapper.find('img');
      expect(image.exists()).toBe(true);
    });

    describe('description related', () => {
      it('renders "Description is not available" if description is empty', () => {
        state = {
          ...defaultState,
          details: { ...defaultState.details, description: '' }
        };

        const p = mount().find('p.hero-desc-unavailable');
        expect(p.exists()).toBe(true);
        expect(p.text()).toEqual('Description not available.');
      });

      it('renders description properly if it is present', () => {
        const p = mount().find('p.hero-desc');
        expect(p.exists()).toBe(true);
        expect(p.text()).toEqual(defaultState.details.description);
      });
    });

    it('always renders `HeroComics` component', () => {
      expect(
        mount()
          .find(HeroComics)
          .exists()
      ).toBe(true);
    });
  });
});
