'use strict';

module.exports = app => {
    class PostController extends app.Controller {
        * create() {
            const { ctx, service } = this;
            const createRule = {
                content: { type: 'string' },
                schoolId: { type: 'id' },
                is_anonymous: { type: 'boolean' },
            };
            // 校验参数
            ctx.validate(createRule);
            // 组装参数
            const userInfo = yield ctx.service.user.checkWeappUser();
            const user = yield ctx.service.user.getOauthUser(userInfo);
            // 调用 Service 进行业务处理
            const req = Object.assign(ctx.request.body, { user });
            const res = yield service.post.create(req);
            // 设置响应内容和响应状态码
            ctx.body = { id: res.id };
            ctx.status = 201;
        }