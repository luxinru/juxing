<template>
  <div class="main">
    <section class="topbar" :class="{ home_top: menu === 'home' }">
      <img class="logo" src="@/assets/images/juxingkaobei.png" alt="" />
      <el-menu
        :default-active="menu"
        router
        class="menu"
        mode="horizontal"
        :background-color="menu === 'home' ? 'transparent' : '#fff'"
        :text-color="menu === 'home' ? '#fff' : 'rgba(75, 84, 92, 1)'"
        active-text-color="rgba(15, 103, 165, 1)"
        @select="onMenuSelect"
      >
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="article">文章中心</el-menu-item>
        <el-menu-item index="about">关于我们</el-menu-item>
        <el-menu-item index="contact">联系我们</el-menu-item>
      </el-menu>
    </section>
    <RouterView class="views" />
    <section class="footer">
      <div class="link">
        <div class="part">
          <img src="@/assets/images/juxinglogokaobei.png" alt="" />
          <div class="info">
            <span class="label"> 关于我们 </span>
            <span class="value">
              正在引领互联网项目投资的新时代，通过为更多人打开更高回报的大门进行投资。我们正在建设世界上
              最积极参与的投资者群体，激发推动世界前进的投资。
            </span>
          </div>
        </div>
        <div class="part">
          <div class="box">
            <div class="item">
              <span class="title"> 投资 </span>
              <span class="value"> 它是如何工作的 </span>
              <span class="value"> 直接资金 </span>
              <span class="value"> 投资组合基金 </span>
              <span class="value"> 二级市场 </span>
              <span class="value"> 常见问题解答 </span>
            </div>
            <div class="item">
              <span class="title"> 学习 </span>
              <span class="value"> 博客 </span>
              <span class="value"> 网络研讨会 </span>
              <span class="value"> 白皮书 </span>
              <span class="value"> 时事通讯 </span>
            </div>
            <div class="item">
              <span class="title"> 投资 </span>
              <span class="value"> 关于我们 </span>
              <span class="value"> 群组 </span>
              <span class="value"> 领导者 </span>
              <span class="value"> 职业 </span>
              <span class="value"> 联系我们 </span>
            </div>
          </div>
        </div>
      </div>

      <div class="important_info">
        <span>重要信息</span>
        <p>
          通过本网站或其他方式进行的任何交流都不应被解释为任何安全。互联网项目投资中的另类投资流动性差、投机性强，而且
          涉及高度的风险。过去的表现并不代表未来的结果。
          投资前，仔细考虑各自的基金
          有关潜在风险、费用和开支的详细资料。投资的价值
          可能下降也可能上升。互联网项目投资或投资工具
          不同于在银行机构的存款。投资者获得非流动性和/或受限
          可能受持有期要求和/或流动性问题影响的成员权益。
          不能接受周期性持有投资的投资者不应投资。在这里互联网项目投资最明智的投资策略，互联网项目投资应该只是你整体的一部分
          投资组合。您投资组合中的互联网项目投资部分可能包括不同的平衡投资组合
          互联网项目投资。如需了解更多信息，包括聚星团队的附属机构。
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      menu: "home",
    };
  },

  mounted() {
    console.log("location :>> ", location);
    const menu = location.hash.replace("#/", "");
    this.menu = menu;
  },

  methods: {
    onMenuSelect(index, indexPath, item, routeResult) {
      this.menu = index;
      console.log("index :>> ", index);
      console.log("indexPath :>> ", indexPath);
      console.log("item :>> ", item);
      console.log("routeResult :>> ", routeResult);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss">
* {
  flex-shrink: 0;
  box-sizing: border-box;
}

html,
body {
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  min-height: 100vh;
}

.page_root {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;

  .topbar {
    position: sticky;
    top: 0;
    width: 100%;
    height: 82px;
    background: #ffffff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.17);
    padding: 0 19%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 9;

    .logo {
      height: 34px;
    }

    .menu {
      flex: 1 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    :deep(
        .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
        .el-menu--horizontal .el-menu-item:not(.is-disabled):hover
      ) {
      background-color: transparent;
    }

    :deep(.el-menu--horizontal) {
      border-bottom: none;
    }
  }

  .home_top {
    position: relative;
    background-color: transparent;
    box-shadow: none;
  }

  .views {
    width: 100%;
    flex: 1 0;
  }

  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.2);

    .link {
      width: 100%;
      height: 687px;
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 0 13%;

      .part {
        flex: 1 0;
        height: 100%;
        display: flex;
        flex-direction: column;

        img {
          width: 121px;
          height: 115px;
          margin-top: 61px;
        }

        .info {
          margin-top: 144px;
          display: flex;
          flex-direction: column;

          .label {
            font-size: 18px;
            font-weight: bold;
            font-family: Source Han Sans CN;
            color: #22211f;
          }

          .value {
            width: 328px;
            height: 91px;
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 200;
            color: #22211f;
            line-height: 25px;
            margin-top: 26px;
          }
        }

        .box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 42px;
          .item {
            display: flex;
            flex-direction: column;

            .title {
              font-size: 18px;
              font-family: Source Han Sans CN;
              font-weight: bold;
              color: #22211f;
              margin-bottom: 18px;
            }

            .value {
              white-space: nowrap;
              font-size: 16px;
              font-family: Source Han Sans CN;
              font-weight: 200;
              color: #22211f;
              cursor: pointer;
              margin-top: 8px;
            }
          }
        }

        &:nth-child(2) {
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
      }
    }

    .important_info {
      width: 100%;
      height: 316px;
      background-color: rgba(23, 29, 151, 1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 13%;

      span {
        font-size: 22px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
      }

      p {
        width: 100%;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 200;
        color: #ffffff;
        line-height: 25px;
        margin-top: 25px;
      }
    }
  }
}
</style>
