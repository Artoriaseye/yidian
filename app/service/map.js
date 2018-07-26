"use strict"
 module.exports = app => {
    class SchoolController extends app.Controller {
        * list() {
            const { ctx, app } = this;
            let sortedList = yield app.redis.get('api_schools');
            sortedList = JSON.parse(sortedList);
            if (!sortedList) {
                const schools = yield ctx.model.School.findAll({
                    attributes: { exclude: ['title', 'updatedAt'] },
                    order: [['name', 'DESC']],
                });

                schools.map(item => {
                    item.pinyin = pinyin.getCamelChars(item.name);
                    return item;
                });
                sortedList = grouped(schools, 'pinyin');
                // »º´æ24Ð¡Ê±
                app.redis.set('api_schools', JSON.stringify(sortedList), 'PX', 1000 * 60 * 60 * 24);
            }
            ctx.body = {
                code: 0,
                msg: 'ok',
                data: { schools: sortedList },
            };
        }
    }
    return SchoolController;
};