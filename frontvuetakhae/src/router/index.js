import Vue from "vue";
import Router from "vue-router";

import constants from "../lib/constants";

// 유저
import MyPage from "../page/user/MyPage.vue";

// 포스트
import List from "../page/post/List.vue";
import CreatePost from "../page/post/CreatePost.vue";
import DetailPost from "../page/post/DetailPost.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/user/mypage",
      name: "mypage",
      component: MyPage,
    },
    // 포스트
    {
      path: "/",
      name: constants.URL_TYPE.POST.MAIN,
      component: List,
    },
    {
      path: "/create",
      name: constants.URL_TYPE.POST.CREATEPOST,
      component: CreatePost,
    },
    {
      path: "/detail/:no",
      name: constants.URL_TYPE.POST.DETAILPOST,
      component: DetailPost,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
