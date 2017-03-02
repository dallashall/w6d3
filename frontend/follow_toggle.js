class FollowToggle {
  constructor(userId, followState, $el) {
    this.userId = userId;
    this.followState = followState;
    this.$el = $el;
    this.render();
    this.handleClick();
  }

  render() {
    this.$el.prop("disabled", false);
    console.log(this);
    if (this.followState === true) {
      this.$el.text("Unfollow");
    } else {
      this.$el.text("Follow");
    }
  }

  follow(requestMethod) {
    return $.ajax({
      url: `/users/${this.userId}/follow`,
      type: requestMethod,
      params: {
        user_id: this.userId
      },
      dataType: "json"

    });
  }

  handleClick() {
    this.$el.on('click', (e) => {
      e.preventDefault();
      let requestMethod = "";
      if(this.followState === true){
        requestMethod = "DELETE";
        this.followState = false;
      } else {
        requestMethod = "POST";
        this.followState = true;
      }
      this.$el.prop("disabled", true);
      this.follow(requestMethod).then(this.render.bind(this));
      }
    );
  }

  // handleClick() {
  //   this.$el.on('click', () => {
  //     let requestMethod = "";
  //     if(this.followState === 'true') {
  //       requestMethod = "DELETE";
  //       this.followState = "false";
  //     } else {
  //       requestMethod = "POST";
  //       this.followState = "true";
  //     }
  //     this.follow().then(this.render);
  //     // $.ajax(
  //     //   {
  //     //     url: `/users/${this.userId}/follow`,
  //     //     type: requestMethod
  //     //   }
  //     // ).then(
  //     //   this.render
  //     // );
  //   }
  // }
}

module.exports = FollowToggle;
