import role from "./role.js"

let roleList = role.data()
// console.log(roleList)
export default {
  data () {
    return {
      story1:[//故事背景第一屏
        "自太祖橘震天建立大橘帝国以来，",
        "诸皇子对帝位皆垂涎三尺",
        "虽平日里一团和气，兄友弟恭",
        "背地里却是刀光剑影，凶险异常",
        "大皇子橘子纰以长子自诩，与宰相洪富士联手",
        "二皇子橘子绊因颇有军功，与将军车厘子联手",
        "三皇子橘子织文治武功皆为稀松平常",
        "却因是幼子而颇得橘震天喜爱",
        "偏爱幼子，人之常情",
        "但在皇家，这便是先成为众矢之的的理由"
      ],
      story2:[//故事背景第二屏
        "你是大橘帝国的三皇子橘子织",
        "橘震天登基当天亦是你兄弟三人封王之日",
        "大皇子橘子纰善治封文王",
        "二皇子橘子绊好武封武王",
        "你未满十六岁且身无尺寸之功封成王",
        "你的两个兄长上扬的嘴角是给橘震天看的",
        "眼中的凶光是给你看的",
        "六个月后是你年满十六周岁离开皇宫的日子了",
        "当下最要紧的便是在成人礼到来之前武装好自己",
        "大势所趋，你毅然决然的选择了"
      ],
      story3:{
        bid:roleList.role04,
        lid:roleList.role04,
        rid:roleList.role03,
        txt:"哥你真帅，但是跟我比还差点！"
      },
      story4:{
        bid:roleList.role04,
        lid:roleList.role04,
        rid:roleList.role03,
        txt:"哈哈哈哈啊哈哈"
      },
      story5:{
        bid:roleList.role04,
        lid:roleList.role04,
        rid:roleList.role03,
        txt:"皇位是我的，你再怎么抢也没用"
      },
      story6:{
        bid:roleList.role04,
        lid:roleList.role04,
        rid:roleList.role03,
        txt:"哥你放弃吧，免得赔了夫人又折兵"
      },
      story7:{
        bid:roleList.role03,
        lid:roleList.role04,
        rid:roleList.role03,
        txt:"滚犊子！"
      },
    }
  }
}
