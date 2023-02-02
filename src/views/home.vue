<template>
  <div class="page_root">
    <img class="header" src="@/assets/images/1.png" alt="" />

    <span class="tip1">
      绿色投资，把握“零碳”
      <br />
      社会的投资风向标
    </span>

    <section class="tip2">
      <span>
        双碳”目标对当前中国来说，既是机遇也是挑战，在无形之中为实现“零碳中国”指明了方向。在高质量、可持续的经济发展要求下，为绿色金融的具体实施发出了强烈信号，也为零碳技术的场景运用带来了更多的绿色投资机会。
      </span>
      <span>
        在“双碳”战略下，将带来颠覆性的能源和科技革命，同时也会带动金融体系的转型发展，从而带动社会各行业领域的全新的经济增长点。
      </span>
    </section>

    <span class="tip3">
      碳中和目标将“绿色”变成中国长期价值投资的新风向，从而倒逼中国逐渐摆脱传统能源的现状，建立起一个全新的能源、技术和经济体系。其中，电力、建筑和交通作为与人民生活密切相关的板块，也成为未来重要的绿色投资领域。
    </span>

    <section class="carbon_neutral">
      <span class="title">中国碳中和三步走发展策略</span>
      <div class="item">
        <div class="box">
          <span class="label">第一阶段</span>
          <span class="value">2020-2030年</span>
        </div>
        <div class="box">
          <span class="label">实现碳达峰:</span>
          <span class="value">
            提高能源效率,控制煤炭消费,大规模建设可再生能源推进新能源汽车渗透,引导居民向低碳生活方式转型。
          </span>
        </div>
      </div>
      <div class="item">
        <img src="@/assets/images/矩形 31.png" alt="" />
        <div class="box">
          <span class="label">第二阶段</span>
          <span class="value">2030-2045年</span>
        </div>

        <div class="box">
          <span class="label">快速降低碳排放:</span>
          <span class="value">
            大规模应用可再生能源,实现交通全面电力化,推广碳捕获、利用与封存技术,完成第一产业减排改造。
          </span>
        </div>
      </div>
      <div class="item">
        <img class="ml113" src="@/assets/images/矩形 31.png" alt="" />
        <div class="box">
          <span class="label">第三阶段</span>
          <span class="value">2045-2060年</span>
        </div>

        <div class="box">
          <span class="label">深度脱碳,实现碳中和:</span>
          <span class="value">
            工业、发电、交通等领域完成清洁能源改造,可再生能源、储能、氢能等相关技术实现商业化利用。
          </span>
        </div>
      </div>
    </section>

    <span class="tip4"> 140万亿投向碳中和！ </span>
    <span class="tip5"> 深度分析碳中和背后的产业链！ </span>
    <span class="tip6">
      日前，中国投资协会发布的《零碳中国·绿色投资蓝皮书》中测算
      “碳中和”相关的投资规模约70万亿；清华大学气候变化与可持续发展研究院预测投资规模在127.2-174.4万亿之间；国家发改委价格监测中心研究人员预测“碳中和”新增投资将超过139万亿元。
    </span>
    <span class="tip7">
      综合各家结果，《零碳中国·绿色投资蓝皮书》中测算的投资过于保守，而清华大学和发改委价格检测中心的测算结果大致相同。因此，碳中和带来的相关投资总额将在140万亿左右。
    </span>

    <span class="tip8"> 中国碳中和产业发展历程： </span>
    <span class="tip9"> 已正式将“碳中和”理念纳入顶层布局 </span>
    <span class="tip10">
      实现碳达峰、碳中和中长期目标，既是我国积极应对气候变化、推动构建人类命运共同体的责任担当，也是我国贯彻新发展理念、推动高质量发展的必然要求。
    </span>
    <span class="tip11">
      2015年6月，李克强总理在法国访问期间宣布了我国二氧化碳排放将在2030年左右达到峰值，为未来“碳中和”目标跨出了阶段性的步伐。2020年9月，习近平总书记提出力争于2030年前“碳达峰”，2060年前实现“碳中和”，这是我国首次推出“碳中和”。2021年3月，《2021年政府工作报告》提出扎实做好碳达峰、碳中和各项工作，意味着中国已正式将“碳中和”理念纳入顶层布局。
    </span>

    <img class="architecture" src="" alt="" />
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style lang="scss" scoped>
.page_root {
  background-color: rgba(240, 246, 252, 1);
  .header {
    width: 100%;
    margin-top: -82px;
  }

  .tip1 {
    width: 100%;
    padding: 0 13%;
    font-size: 88px;
    font-family: Source Han Sans CN;
    font-weight: 200;
    color: #2c2b29;
    line-height: 96px;
    margin-top: 160px;
  }

  .tip2 {
    width: 100%;
    margin-top: 95px;
    padding: 0 13%;
    font-size: 21px;
    font-family: Source Han Sans CN;
    font-weight: 200;
    color: #22211f;
    line-height: 29px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 278px;
  }

  .tip3 {
    width: 100%;
    margin-top: 45px;
    padding: 0 13%;
    font-size: 21px;
    font-family: Source Han Sans CN;
    font-weight: 200;
    color: #22211f;
    line-height: 29px;
  }

  .carbon_neutral {
    width: calc(100% - 13% * 2);
    margin: 0 13%;
    height: 507px;
    background: #ffffff;
    margin-top: 106px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px 47px;

    .title {
      font-size: 21px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #22211f;
      margin: 0 0 37px;
    }

    .item {
      width: 100%;
      display: flex;
      align-items: flex-end;

      img {
        height: 107px;
        margin: 0 6px 25px 24px;
      }

      .ml113 {
        margin-left: 113px;
      }

      .box {
        background: #0025e8;
        border-radius: 8px;
        padding: 28px 45px;
        display: flex;
        flex-direction: column;
        margin-right: 24px;

        .label {
          font-size: 18px;
          font-family: Source Han Sans CN;
          font-weight: 200;
          color: #ffffff;
        }

        .value {
          font-size: 18px;
          font-family: Source Han Sans CN;
          font-weight: 200;
          color: #ffffff;
          margin-top: 8px;
        }
      }
    }
  }

  .tip4 {
    width: 100%;
    padding: 0 13%;
    font-size: 54px;
    font-family: Source Han Sans CN;
    font-weight: 200;
    color: #2c2b29;
    margin-top: 111px;
  }

  .tip5 {
    width: 100%;
    padding: 0 13%;
    font-size: 54px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(0, 37, 232, 1);
    margin-top: 24px;
  }

  .tip6 {
    width: 100%;
    padding: 0 13%;
    font-size: 21px;
    font-family: Source Han Sans CN;
    font-weight: 200;
    color: #22211f;
    line-height: 29px;
    margin-top: 116px;
  }

  .tip7 {
    width: 100%;
    padding: 0 13%;
    font-size: 21px;
    font-family: Source Han Sans CN;
    font-weight: 200;
    color: #22211f;
    line-height: 29px;
    margin-top: 92px;
  }

  .tip8 {
    width: 100%;
    padding: 0 13%;
    font-size: 21px;
    font-family: Source Han Sans CN;
    font-weight: 200;
    color: #22211f;
    line-height: 29px;
    margin-top: 106px;
  }

  .tip9 {
    width: 100%;
    padding: 0 13%;
    font-size: 21px;
    font-family: Source Han Sans CN;
    font-weight: 200;
    color: #22211f;
    line-height: 29px;
    margin-top: 24px;
  }

  .tip10 {
    width: 100%;
    padding: 0 13%;
    font-size: 21px;
    font-family: Source Han Sans CN;
    font-weight: 200;
    color: #22211f;
    line-height: 29px;
    margin-top: 24px;
  }

  .tip11 {
    width: 100%;
    padding: 0 13%;
    font-size: 21px;
    font-family: Source Han Sans CN;
    font-weight: 200;
    color: #22211f;
    line-height: 29px;
    margin-top: 103px;
  }

  .architecture {
    width: 74%;
    height: 609px;
    margin: 102px 0 156px;
  }
}
</style>
