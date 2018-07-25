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
            // У�����
            ctx.validate(createRule);
            // ��װ����
            const userInfo = yield ctx.service.user.checkWeappUser();
            const user = yield ctx.service.user.getOauthUser(userInfo);
            // ���� Service ����ҵ����
            const req = Object.assign(ctx.request.body, { user });
            const res = yield service.post.create(req);
            // ������Ӧ���ݺ���Ӧ״̬��
            ctx.body = { id: res.id };
            ctx.status = 201;
        }