const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js')
function generateFollowButtons() {
  const followT = $('button.follow-toggle');
  followT.each( (idx, el) => {
    const $el = $(el);
    let follows = $el.data('follows');
    let id = $el.data('userid');
    const buttonMgr = new FollowToggle(id, follows, $el);
});}



function usersSearchMgr() {
  $('nav.users-search').each( (idx, el) => {
    const $el = $(el);
    const $ul = $('ul.users');
    const $input = $('input.search-id');
    const searchMgr = new UsersSearch($el, $ul, $input);
  })
}
$(usersSearchMgr);
$(generateFollowButtons);
