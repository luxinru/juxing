<template>
  <div class="page_root">
    <section class="header">
      <div class="tip1">
        新闻
        <br />
        资讯
      </div>

      <div class="tip2">你需要什么帮助？</div>

      <div class="btns">
        <el-button
          class="btn"
          type="primary"
          color="rgba(0, 37, 232, 1)"
          @click="onTyeChange(1)"
        >
          聚星风采
        </el-button>
        <el-button
          class="btn"
          type="primary"
          color="rgba(0, 37, 232, 1)"
          @click="onTyeChange(2)"
        >
          历史成果
        </el-button>
        <el-button
          class="btn"
          type="primary"
          color="rgba(0, 37, 232, 1)"
          @click="onTyeChange(3)"
        >
          避坑指南
        </el-button>
      </div>
    </section>

    <section class="container">
      <template v-if="type === 1">
        <span class="title"> 聚星风采 </span>
        <el-collapse v-model="articleId" accordion>
          <el-collapse-item
            v-for="(item, index) in list"
            :key="index"
            :title="item.title"
            :name="index"
          >
            <!-- <img class="picture" src="" alt="" /> -->
            <article>
              <p v-for="(element, j) in item.list" :key="j">
                {{ element }}
              </p>
            </article>
          </el-collapse-item>
        </el-collapse>
      </template>

      <template v-if="type === 2">
        <span class="title"> 历史成果 </span>
        <el-collapse v-model="articleId" accordion>
          <el-collapse-item
            v-for="(item, index) in list"
            :key="index"
            :title="item.title"
            :name="index"
          >
            <!-- <video class="picture" src=""></video> -->
            <article>
              <p v-for="(element, j) in item.list" :key="j">
                {{ element }}
              </p>
            </article>
          </el-collapse-item>
        </el-collapse>
      </template>

      <template v-if="type === 3">
        <span class="title"> 避坑指南 </span>
        <el-collapse v-model="articleId" accordion>
          <el-collapse-item
            v-for="(item, index) in list"
            :key="index"
            :title="item.title"
            :name="index"
          >
            <!-- <img class="picture" src="" alt="" /> -->
            <article>
              <p v-for="(element, j) in item.list" :key="j">
                {{ element }}
              </p>
            </article>
          </el-collapse-item>
        </el-collapse>
      </template>
    </section>
  </div>
</template>

<script>
export default {
  name: "ArticlePage",

  data() {
    return {
      type: 1,
      articleId: "",
      list: [
        {
          title: "聚星团队探索碳中和特点及演变",
          list: [
            "近期，我们聚⭐星团队对接的由台湾森崴能源股份有限公司开发发行的森崴创新供应链金融平台项目，在线上发行以后获得完美的收获，聚⭐星就近期团队取得的成绩提出表扬。并表示：要立足未来，就要加强团队建设，只有不断地加强团队建设，提高自身素质，提高专业知识，才能在这场全球能源转型的浪潮中激流勇进，勇攀高峰。发展绿色新能源是我们未来的大趋势，大方向，只有让每一位加入都再这个平台获利，我们的项目才算真的成功。",
            "聚⭐星的成立，使得国内的金融行业迎来了一支有实力，有专业性的金融投资团队，在整个团队的发展过程中，聚⭐星积极致力于金融投资服务，希望能够通过全球全方位的支持，高端化的服务与全球化的金融视野来帮助大家实现各项资源的整合，协助每一位成员最大化的发展，也期待与国内许多金融投资者一起，共同打造一个良性的金融投资行业。而近年来，碳中和市场的蓝海，越来越多的业内人士，观察到了这个风口。",
            "随着技术的进步和产业的发展，能源资源日趋紧张，能源的可持 续发展是各个国家所面临的不可回避的问题，世界各国都在寻求本国 资源利用的同时从其他途径和地区来获取能源满足日趋膨胀的能源 问题。在资源和能源紧张的现实前提下，建设资源节约型和环境友好 型社会，大力发展新能源是目前社会的共同选择，也是经济社会可持 续发展的战略举措。 ",
            "聚⭐星早早就开始了对碳中和市场的研究，那个时候，碳中和才仅仅只是一个概念的模型，但是聚⭐星依然洞察了这个互联网新兴行业，能够预测到，它在未来将改变人类现有的经济体系以及生活方式。在未来世界可再生能源一定是主流的人类生活的新模式。因此聚⭐星快人一步对绿色新能源领域开启了投资计划，组建了专业的团队对绿色能源平台进行了深度的研发。直到今年2022年，整个市场对于绿色能源依然热情不减投资的数量不减反增，推动经济社会绿色转型与高质量发展的必然要求。",
            "当下我国是全球碳排放量最多的国家，目前传统化石能源使用占比在我国是85%，研究显示，2030年实现“碳达峰”，每年资金需求约为3.1万亿-3.6万亿元，而目前每年资金供给规模仅为5256亿元，缺口超过2.5万亿元/年以上。2060年前实现“碳中和”，需要在可再生能源发电、先进储能、绿色零碳建筑等领域新增投资将超过139万亿元，资金需求量相当巨大。据目前我国财政资金投入数据报告来看，向绿色能源领域直接投入资金几乎为零，因此，需大力推广发展绿色金融不断完善与碳减排相关的投融资体制机制，增加资金来源和对地方的财政投入，助推“碳达峰”和“碳中和”。",
            "在未来三十年内，中国实现碳中和所需的绿色低碳投资规模超百万亿元，甚至可达数百万亿元。绿色金融是实现碳中和的关键手段，而绿色能源投资是绿色金融中不可或缺的一环.也是我国绿色转型未来最大的确定性；庞大的市场意味着巨大的财政压力，因此想实现碳中和目标政府需投入相对较少的财政资金，通过贴息 银行金融机构担保方式为社会资本民间投资提供激励机制，放大财政资金杠杆；在实现碳中和的道路上，个人以及市场化民间资本是一股不可或缺的力量，这也将为老百姓带来了无限的商机。这也是我们聚⭐星选择这个平台的原因。",
            "作为互联网的创新供应链金融模式，目前正处大火的趋势，让我们有信心也相信它会走的越来越远，绿色新能源的时代，让我们也更加有理由相信它必将引领一个新时代的到来，我们作为投资者，也作为使用者，有这样一个坚实的平台兴起，无异于有了一个坚固的后盾，通过森崴能源这个平台，去探索互联网行业的致富之路。",
            "当全新的能源变革浪潮来临时，每个人的前途命运取决于对新事物的认知，努力洞明事物的本质比急慌慌地行动更有必要。大家都需要大量的时间和精力进行学习与思考，才能真正的了解到这场能源转型其中价值所在。",
            "　　随着碳中和正从概念阶段逐渐走向产业探索阶段，其业态形式、发展趋势无不显示其潜在的巨大商机，我们相信，在不久的将来，我们的生活将会随着现实生活的技术升级与革新，我们将会以一种全新的生活方式来到碳中和零碳时代，未来，人们的精神世界将变得更加丰富，体验更加健康环保的生活方式，令无数人心向往之。",
            "随着2021年全国两会之后，在国家战略目标政策大力推动与支持下，能源转型已经必然趋势，迎接国家红利政策下的巨大风口。因此森崴能源将提供供应链创新金融产品 针对不同市场，设计独特的投融资模式 实现业务目标，优化现金流管理、提高财务灵活性、实现增长与盈利目标.可持续的投身于这次历史性能源革命中，优先布局上下产业链。无论是设备制造商、供应商，渠道合作商以及投资人，森崴能源的创新投融资方案都能大大提高其竞争力。在销售阶段，我们提供独特的、切实可用的解决方案，帮助设备供应商增加销售机会，适应竞争压力，迅速抢占市场。实现企业可持续发展与可持续收益。",
            "未来的大方向便是碳中和，只有把握好了大方向，才能在时代的发展中顺流而下，取的更大的成功。面对如此汹涌的互联网金融浪潮，聚⭐星如同风中劲草，在如此庞大的冲击面前。我们只有稳步发展，扎实基础，才能在未来时代的进步中平稳的前行。整个世界的金融市场正在悄然发生变化，只有提前把握住了市场的动向，才能积极发展自身，对整个市场应对自如。",
          ],
        },
        {
          title: "聚星团队：投资时应该做的正确选择！",
          list: [
            "在面对整个动荡的金融市场的时候，很多人刚开始是迷茫的。大家刚刚进入金融市场的时候，是不是对整个金融市场并不是很了解，不懂什么是汇率，不懂什么是利率，看不懂K线图。这些很正常，每个人接触金融的时间不同，对于知识的了解掌握程度也不同。有些人选择盲目的投资，换来的是竹篮打水一场空，有些人选对正确的团队投资得到了丰厚的回报。有时候我们的选择大于我们努力，努力并不一定能够成功，这是一个残酷的事实。",
            "聚星团队告诉你，你的选择大于你的努力，至少在某些方面，我们努力并不一定成功，有时候一个正确的选择，把握住机遇，我们就能一举成功。人们总说成功离我们很遥远，我们需要不断努力才能接近成功，这句话固然没错，但有的时候也有一些捷径可以为我们提供更多的选择。就如同航海行船，我们有时候会遇到逆风，如果硬着头皮往前走，确实能够前进一小段距离，但会费很大的劲。但有时候遇到顺风，我们只需要找准航向，向前出发，就可以很快到达目的地。我们选择金融投资的时候，也是这个道理，自己的单打独斗不如选择加入一个优秀的团队，一个团队的智慧难道不比一个人强吗？俗话说得好，三个臭皮匠还顶一个诸葛亮，一个篱笆三个桩，一个好汉三个帮。团队的力量往往是比个人要更强的，大家可以集思广益，提供更多的思路，看待问题的方式也不同，能够从多个角度考虑问题的发展，但有时候我们如果单打独斗，就会被自己的固有思维所限制，我们往往当局者迷，旁观者清。所以我们才说有时候选择大于努力，选择一个正确的金融投资团队，要比我们自己在金融市场上摸爬滚打好得多。",
            "在金融领域方面，有着极强的专业性。能够为我们提供更多的建议和更多的市场情报。方便我们掌握市场的变化，及时地为我们提供合理的投资方案，这才是我们的选择，如果我们自己在金融市场上进行投资，有时候因为信息的不对称，往往错失了投资的机会，甚至是进行了错误的投资。这是我们都不愿意看到的，但又确实发生的。",
            "我们所做的就是要找到正确的选择，找到通关的密码，走捷径并不丢人，在金融市场上，我们不看过程只看结果，收益才是王道。如果太在意过程，反而会受到牵绊，离成功越来越远。聚星团队为我们提供了更多的帮助，这样的选择才是金融投资时应该做的正确选择。",
          ],
        },
      ],
    };
  },

  methods: {
    onTyeChange(type) {
      this.articleId = "";
      this.type = type;
    },

    onArticleClick(index) {
      this.articleId = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.page_root {
  .header {
    width: 100%;
    height: 637px;
    background-color: rgba(241, 242, 243, 1);
    display: flex;
    flex-direction: column;
    align-items: center;

    .tip1 {
      font-size: 88px;
      font-family: Source Han Sans CN;
      font-weight: 200;
      color: #2c2b29;
      line-height: 96px;
      margin-top: 121px;
    }

    .tip2 {
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 200;
      color: #22211f;
      margin-top: 52px;
    }

    .btns {
      display: grid;
      grid-template-columns: repeat(3, 128px);
      grid-column-gap: 16px;
      margin-top: 71px;

      .btn {
        border-radius: 17px;
        overflow: hidden;
      }
    }
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 114px 13.5% 134px;

    .title {
      width: 100%;
      font-size: 28px;
      font-family: Source Han Sans CN;
      font-weight: 200;
      color: #2c2b29;
      padding: 31px 2px;
    }

    .picture {
      width: 815px;
      height: 451px;
    }

    :deep(.el-collapse-item__header) {
      height: 86px;
      padding: 0 2px;

      &:hover {
        background-color: rgba(240, 246, 252, 1);
      }
    }

    :deep(.el-collapse-item__arrow) {
      display: none;
    }

    // :deep(.el-collapse-item .is-active) {
    //   background-color: rgba(240, 246, 252, 1);
    // }

    :deep(.el-collapse-item__content) {
      padding: 40px 37px;
      background-color: rgba(240, 246, 252, 1);
    }

    article {
      p {
        font-size: 26px;
        font-family: Source Han Sans CN;
        font-weight: 200;
        color: #22211f;
        line-height: 70px;
        text-indent: 2em;
      }
    }
  }
}
</style>
