class TweetCompose {
  constructor($content, $el) {
    this.$el = $el;
    this.$content = $content;
    clickHandler();
  }

  clickHandler() {
    this.$el.on('click', e => {
      e.preventDefault();

    }
  }

  submit() {
    this.$el.serializeJSON();
  }
}
