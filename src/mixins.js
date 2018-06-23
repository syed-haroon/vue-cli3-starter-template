const setBodyClassMb0 = {
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
  mounted() {
    this.toggleBodyClass('addClass', 'mb-0');
  },
  destroyed() {
    this.toggleBodyClass('removeClass', 'mb-0');
  },
};

export default setBodyClassMb0;
