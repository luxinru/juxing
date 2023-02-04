<template>
  <div class="page_root">
    <section class="header">
      <div class="tip1">
        加入
        <br />
        我们
      </div>

      <div class="tip2">
        聚星是一个互联网项目数字平台团队引领互联网项目投资新时代,新模式。我们让世界变得美好。最积极的投资者
        获取专业知识和规模化投资的社区。
      </div>
    </section>

    <section class="info1">
      <img class="img1" src="@/assets/images/juxingkaobei2.png" alt="" />

      <div class="info1_info">
        <div>
          <span>
            如果更多的人能懂得 如何在互联网项目中 做出正确的投资规划
            与选择会怎样?
          </span>
          <p>
            我们的任务是引领互联网项目投资的新时代，为更多人打开通往更高回报的大门。我们正在构建世界。最积极参与的投资者群体来激励
            推动世界前进的投资。
          </p>
        </div>
        <img src="@/assets/images/tuceng15.png" alt="" />
      </div>
    </section>

    <section class="time_line"></section>

    <section class="vip">
      <span class="title"> 会员风采 </span>

      <div ref="img_list" class="img_list">
        <img
          v-for="index in 20"
          :key="index"
          src="@/assets/images/juxingkaobei2.png"
          alt=""
        />
      </div>
    </section>

    <section class="info2">
      <div class="part1">
        <img src="@/assets/images/tuceng16.png" alt="" />
        <div class="info2_info">
          <span>INSIGHT</span>
          <span>partners</span>
          <span> 聚星团队互联网项目 累积投资总额超20亿 人民币 </span>
          <span>
            聚星团队最近一次的互联网项目投资操作——在2022年5月中旬经过团队全面的专业分析和考察后决定选择”同心社区“汇能共享项目进场，于2022年11月中旬带领团队全员完成盈利并安全退场
          </span>
        </div>
      </div>

      <div class="part2">
        <span class="title1">FIDELITY</span>
        <span class="title2">INTERNATIONAL</span>
        <span class="title3">合力</span>
        <span class="title4">
          星就近期团队取得的成绩提出表扬。并表示：要立足未来，就要加强团队建设，只有不断地加强团队建设，提高自身素质，提高专业知识，才能在这场全球能源转型的浪潮中激流勇进，勇攀高峰。发展绿色新能源是我们未来的大趋势，大方向，
          森崴创新将是聚星在2023年度团队发展的重点项目；只有带领团队所有成员在森崴能源平台全员获利，聚星2023年的投资选择与发展方向才算真的成功。
        </span>

        <div class="imgs">
          <img src="@/assets/images/qianyueyishi.png" alt="" />
          <img src="@/assets/images/tuceng18.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage",

  data() {
    return {
      intervalId: null,
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },

  beforeUnmount() {
    clearInterval(this.intervalId);
  },

  methods: {
    init() {
      const $img_list = this.$refs.img_list;
      const scrollWidth = $img_list.scrollWidth;
      $img_list.scrollLeft = 0;

      this.intervalId = setInterval(() => {
        $img_list.scrollLeft += 1;
        if (scrollWidth - $img_list.scrollLeft === $img_list.offsetWidth) {
          $img_list.scrollLeft = 0;
        }
      }, 10);
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
      width: 540px;
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 200;
      color: #22211f;
      margin-top: 52px;
      text-align: center;
    }
  }
  .info1 {
    width: 100%;
    padding: 93px 13% 195px;
    background-color: #fff;

    .img1 {
      width: 100%;
    }

    .info1_info {
      width: 100%;
      display: flex;
      margin-top: 132px;

      div {
        flex: 1 0;
        display: flex;
        flex-direction: column;

        span {
          font-size: 80px;
          font-family: Source Han Sans CN;
          font-weight: 200;
          color: #2c2b29;
          line-height: 96px;
        }
        p {
          width: 559px;
          font-size: 21px;
          font-family: Source Han Sans CN;
          font-weight: 200;
          color: #22211f;
          line-height: 29px;
          margin-top: 90px;
        }
      }

      img {
        width: 434px;
        margin-top: 277px;
        margin-left: 188px;
      }
    }
  }

  .time_line {
    width: 100%;
    height: 510px;
    background: url("@/assets/images/5d25ec589e2eccd82824fd330d5143b43a4e6872b1f0b2-7LnDPG.png")
      no-repeat;
    background-size: 100% 100%;
  }

  .vip {
    width: 100%;
    padding: 85px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 32px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #2c2b29;

      &::before {
        content: "·";
        margin-right: 10px;
      }

      &::after {
        content: "·";
        margin-left: 10px;
      }
    }

    .img_list {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 121px;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
      img {
        width: 255px;
        height: 338px;
        margin-right: 22px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .info2 {
    width: 100%;
    padding: 0 13% 190px;
    margin-top: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .part1 {
      width: 100%;
      display: flex;
      img {
        width: 596px;
        height: 434px;
        margin-right: 62px;
        margin-top: 13px;
      }

      .info2_info {
        flex: 1 0;
        display: flex;
        flex-direction: column;

        span {
          &:nth-child(1) {
            font-size: 37px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #171d97;
            font-weight: bold;
          }

          &:nth-child(2) {
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #302f2d;
            margin-top: 8px;
            font-weight: bold;
          }

          &:nth-child(3) {
            font-size: 88px;
            font-family: Source Han Sans CN;
            font-weight: 200;
            color: #2c2b29;
            line-height: 96px;
            margin-top: 27px;
          }

          &:nth-child(4) {
            font-size: 21px;
            font-family: Source Han Sans CN;
            font-weight: 200;
            color: #22211f;
            line-height: 29px;
            margin-top: 73px;
          }
        }
      }
    }

    .part2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 178px;

      .title1 {
        font-size: 37px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #171d97;
        font-weight: bold;
      }

      .title2 {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #302f2d;
        margin-top: 8px;
        font-weight: bold;
      }

      .title3 {
        font-size: 88px;
        font-family: Source Han Sans CN;
        font-weight: 200;
        color: #2c2b29;
        line-height: 96px;
        margin-top: 27px;
      }

      .title4 {
        font-size: 21px;
        font-family: Source Han Sans CN;
        font-weight: 200;
        color: #22211f;
        line-height: 29px;
        margin-top: 72px;
      }

      .imgs {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 85px;
      }
    }
  }
}
</style>
