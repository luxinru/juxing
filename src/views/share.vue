<template>
  <div class="page_root">
    <section class="header">
      <div class="tip1">
        分享
        <br />
        事迹
      </div>

      <div class="tip2">精彩活动</div>
    </section>

    <section class="container">
      <swiper-container :init="false" class="swiper">
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in list"
          :key="index"
        >
          <div
            class="item"
            v-for="(element, j) in item"
            :key="j"
            @click="onClickNode(element)"
          >
            <video v-if="element.isVideo">
              <source :src="element.src" />
            </video>
            <img v-else :src="element.src" alt="" />
            <span class="name" v-if="element.name">
              {{ element.name }}
            </span>
          </div>
        </swiper-slide>
      </swiper-container>

      <img
        class="left"
        src="@/assets/images/fanhui.png"
        alt=""
        @click="onSlide(1)"
      />
      <img
        class="right"
        src="@/assets/images/fanhuikaobei.png"
        alt=""
        @click="onSlide(2)"
      />
    </section>

    <XModal
      v-model:visible.sync="isVisible"
      class="modal"
      @close="isVisible = false"
    >
      <video v-if="curNode.isVideo" autoplay controls>
        <source :src="curNode.src" />
      </video>
      <img v-else :src="curNode.src" alt="" />
    </XModal>
  </div>
</template>

<script>
import img from "@/assets/images/juxinglogokaobei2.png";
import XModal from "@/components/x-modal.vue";

export default {
  name: "SharePage",

  components: {
    XModal,
  },

  data() {
    return {
      list: [
        [
          {
            isVideo: true,
            name: "",
            src: "http://juxingtuan.com/resources/videos/video1.m4v",
          },
          {
            isVideo: true,
            name: "",
            src: "http://juxingtuan.com/resources/videos/video2.mp4",
          },
          {
            isVideo: true,
            name: "",
            src: "http://juxingtuan.com/resources/videos/video3.mp4",
          },
          {
            isVideo: true,
            name: "",
            src: "http://juxingtuan.com/resources/videos/video4.mp4",
          },
          {
            isVideo: true,
            name: "",
            src: "http://juxingtuan.com/resources/videos/video5.mp4",
          },
          {
            isVideo: true,
            name: "",
            src: "http://juxingtuan.com/resources/videos/video6.mp4",
          },
        ],
      ],
      swiperEl: null,
      isVisible: false,
      curNode: {},
    };
  },

  mounted() {
    this.init();
  },

  beforeUnmount() {},

  methods: {
    init() {
      // swiper element
      this.swiperEl = document.querySelector("swiper-container");

      // swiper parameters
      const swiperParams = {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        on: {
          init() {
            // ...
          },
        },
      };

      // now we need to assign all parameters to Swiper element
      Object.assign(this.swiperEl, swiperParams);

      // and now initialize it
      this.swiperEl.initialize();
    },

    onClickNode(node) {
      this.curNode = node;
      this.isVisible = true;
    },

    onSlide(type) {
      console.log("this.swiperEl :>> ", [this.swiperEl]);
      if (type === 1) {
        this.swiperEl.swiper.slidePrev();
      } else {
        this.swiperEl.swiper.slideNext();
      }
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

  .container {
    position: relative;
    width: 100%;
    background-color: #fff;
    padding: 132px 13% 192px;
    display: flex;
    align-items: center;
    justify-content: center;
    .swiper {
      width: 100%;
      height: 698px;

      .swiper-slide {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;

        .item {
          position: relative;
          display: flex;
          flex-direction: column;
          background-color: rgba(248, 248, 248, 1);
          overflow: hidden;
          cursor: pointer;

          img {
            width: 100%;
            height: 234px;
            background-color: #000;
          }

          video {
            width: 100%;
            height: 234px;
            background-color: #000;
          }

          .name {
            width: 100%;
            flex: 1 0;
            font-size: 21px;
            font-family: Source Han Sans CN;
            font-weight: 200;
            color: #22211f;
            line-height: 29px;
            padding: 25px;
            box-sizing: border-box;
            overflow: hidden;
          }
        }
      }
    }

    .left {
      position: absolute;
      left: 7.4%;
      height: 44px;
      cursor: pointer;
    }

    .right {
      position: absolute;
      right: 7.4%;
      height: 44px;
      cursor: pointer;
    }
  }

  .modal {
    video {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }
}
</style>
