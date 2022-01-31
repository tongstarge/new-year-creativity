<template>
  <div id="app">
    <div class="fw_box">
      <div class="fw">
        <div v-if="fw[1]">
          <div class="fw-firework1"></div>
          <div class="fw-content">
            <div class="fw-content-text">新年快乐！</div>
          </div>
        </div>
      </div>
      <div class="fw">
        <div v-if="fw[0]">
          <div class="fw-firework1"></div>
          <div class="fw-content">
            <div class="fw-content-text">新年快乐！</div>
          </div>
        </div>
      </div>
      <div class="fw">
        <div v-if="fw[2]">
          <div class="fw-firework1"></div>
          <div class="fw-content">
            <div class="fw-content-text">新年快乐！</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-button_box">
        <div class="footer-button">
          <button class="button" @click="shoot">发射</button>
        </div>
        <div class="footer-button">
          <button class="button2" @click="add">塞烟花</button>
        </div>
      </div>
      <div class="footer-mascot_box">
        <div class="footer-mascot" style="float: left">曈星阁吉祥物</div>
        <div class="footer-mascot" style="float: right">涂鸦宇宙吉祥物</div>
      </div>
      <div class="footer-bottom"></div>
    </div>
    <s-dialog v-model="t" title="塞烟花" animation="slideb">
      <div class="form">
        <div class="form-label">内容：</div>
        <s-textarea
          v-model="send_fw.content"
          placeholder="内容在2-50字以内"
          maxlength="50"
          rows="3"
        ></s-textarea>
        <!-- 颜色 -->
        <div class="form-label">署名：</div>
        <s-input v-model="send_fw.author"></s-input>
      </div>
      <span slot="footer">
        <s-button @click="send" round>塞</s-button>
      </span>
    </s-dialog>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fw: [false, false, false],
      t: false,
      fw_info: [
        {
          content: "",
          author: "",
          color: 0,
        },
      ],
      send_fw: {
        content: "",
        author: "",
        color: 0,
      },
    };
  },
  methods: {
    shoot() {
      for (let i = 0; i < 3; i++) {
        if (this.fw_info[i] && !this.fw[i]) {
          this.$set(this.fw, i, true);
          console.log("start");
          setTimeout(() => {
            this.$set(this.fw, i, false);
            this.getfirework();
          }, 5000);
          break;
        }
      }
    },
    add() {
      this.t = true;
    },
    send() {
      console.log(this.send_fw);
      this.t = false;
    },
    getfirework() {
      //获取烟花
      for (let i = 0; i < 3; i++) {
        this.$set(this.fw_info, i, {
          content: "新年快乐！",
        });
      }
    },
  },
  created() {
    for (let i = 0; i < 3; i++) {
      this.getfirework();
    }
  },
};
</script>

<style>
@import url(./style/global.css);
* {
  margin: 0;
  padding: 0;
  user-select: none;
}
*::-webkit-scrollbar {
  width: 10px;
}
*::-webkit-scrollbar-thumb {
  background-color: #00000011;
  border-radius: 5px;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: #00000046;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.footer {
  position: fixed;
  width: 100vw;
  height: 200px;
  background-color: antiquewhite;
  bottom: 0;
  left: 0;
}
.footer-button_box {
  position: absolute;
  width: 100%;
  top: -50px;
}
.footer-button {
  margin: 20px auto;
  text-align: center;
}
.button {
  cursor: pointer;
  background-color: #ff4c00;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 900;
  box-shadow: 0 0 0 5px #ff4d0080;
  display: inline-block;
  transition: 0.3s ease-in-out;
  z-index: 100;
  animation: a1 1s ease-in-out infinite;
  border: none;
}
.button:hover {
  transform: scale(1.05);
}
.button:active {
  transform: scale(0.95);
}
@keyframes a1 {
  0% {
    box-shadow: 0 0 0 5px #ff4d0080;
  }
  50% {
    box-shadow: 0 0 0 5px #ff4d0044;
  }
  100% {
    box-shadow: 0 0 0 5px #ff4d0080;
  }
}
.button2 {
  cursor: pointer;
  padding: 10px 20px;
  text-align: center;
  font-size: 15px;
  color: #395260;
  display: inline-block;
  transition: 0.3s ease-in-out;
  background: none;
  z-index: 100;
  border: none;
}
.button2:hover {
  color: #395260b2;
}
.button2:active {
  transform: scale(0.95);
}
.footer-mascot_box {
  width: 600px;
  margin: auto;
  margin-top: -50px;
}
.footer-mascot {
  background-color: aquamarine;
  height: 200px;
  width: 200px;
}
.footer-bottom {
  background-color: #333333;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  height: 30px;
}
.fw_box {
  display: flex;
  justify-content: center;
}
.fw {
  width: 30%;
  height: 100vh;
  position: relative;
}
.fw-firework1 {
  position: absolute;
  width: 2px;
  height: 50px;
  left: 50%;
  margin-left: -1px;
  background-color: #ff0000;
  opacity: 0;
  animation: f1 0.5s ease-out;
}
.fw-content {
  background-color: antiquewhite;
  width: 100%;
  height: 200px;
  margin: 5vh auto;
  animation: f2 5s ease-in-out;
  background-position: center;
  background-size: contain;
}
.fw-content-text {
  line-height: 200px;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
  animation: f3 5s ease-in-out;
}
@keyframes f1 {
  0% {
    opacity: 0;
    top: 100vh;
    margin-top: -50px;
  }
  100% {
    opacity: 1;
    top: 20vh;
  }
}
@keyframes f2 {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  10% {
    opacity: 1;
    transform: scale(0);
  }
  20% {
    opacity: 1;
    transform: scale(1);
  }
  80% {
    opacity: 1;
    transform: scale(1);
  }
  90% {
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(50px) scale(1.05);
  }
}
@keyframes f3 {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
    transform: scale(0);
  }
  25% {
    opacity: 1;
    transform: scale(1);
  }
  80% {
    opacity: 1;
    transform: scale(1);
  }
  90% {
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(50px) scale(1.05);
  }
}
.s-dialog-box {
  background-color: #ff4c00 !important;
}
.s-dialog-content {
  margin: 20px;
  background-color: #ffffff;
  border-radius: 10px;
}
.form {
  margin: 20px;
}
.form .s-input {
  width: 100%;
  margin: 10px 0;
}
.form .s-textarea {
  width: 100%;
  margin: 10px 0;
}
.form-label {
  padding: 10px 0;
  font-size: 18px;
}
</style>
