class APIUtils {
}

APIUtils.searchUsers =   (queryVal, success) => {
  $.ajax ({

    url: '/users/search',
    method: 'GET',

    dataType: "json",
    data: {
      query: queryVal
    },

    success
  });
}
module.exports = APIUtils;
