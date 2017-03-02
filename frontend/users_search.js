const APIUtils = require('./api_utils.js');
const FollowToggle = require('./follow_toggle.js');
class UsersSearch {
  constructor($el, $ul, $input) {
      this.$el = $el;
      this.$ul = $ul;
      this.$input = $input;
      // console.log($el);
      // console.log($ul);
      // console.log($input);
        this.handleInput();
  }

  handleInput() {
    this.$input.on('input', e => {
      e.preventDefault();
      APIUtils.searchUsers(this.$input.val(), this.renderResults.bind(this));

    })


  }

  renderResults(result) {

    this.$ul.empty();
    result.forEach( user => {
      let $li = $("<li></li>");
      let $a = $(`<a href="/users/${user.id}/">${user.username}</a>`);
      let $followBtn = $(
        `<button class="follow-toggle" ` +
        `data-follows="${user.followed}" ` +
        `data-userid="${user.id}"></button>`
      )
      console.log(user);
      $li.append($a);
      $li.append($followBtn);
      this.$ul.append($li);
      const followMgr = new FollowToggle(user.id, user.followed, $followBtn);

    })

  }
}

module.exports = UsersSearch;
