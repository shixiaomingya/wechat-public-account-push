/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '宝贝，早安！',
    desc: `
      **{{date.DATA}}**
      
      {{earthy_love_words.DATA}}
      
      ---
      
      城市：{{province.DATA}} {{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温：{{min_temperature.DATA}} ~ {{max_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级：{{wind_scale.DATA}}
      
      tips：{{notice.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      今天是我们相识的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{note_ch.DATA}}
      
      {{note_en.DATA}}
    `
  },
  {
    id: '0001',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
