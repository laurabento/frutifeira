<template>
  <div class="condominium-box">
      <div class="box-header">
        <img src="../assets/close-gray.svg" @click="openLocation"/>
        <label>Você está em</label>
      </div>
      <h3>{{condominiumSelectedInfo ? condominiumSelectedInfo.name + ' - ' + condominiumSelectedInfo.city + ', ' + condominiumSelectedInfo.state : 'Nenhum condomínio selecionado.'}}</h3>
      <button class="btn" @click="closeOpenModal(); openLocation();">Trocar</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            condominiumSelectedInfo: [],
        }
    },
    created() {
        this.setCondominiumLabel();
    },
    methods: {
        openLocation() {
            this.$emit("openLocation");
        },
        closeOpenModal() {
            localStorage.clear("condominium");
            this.$emit("closeOpenModal");
        },
        setCondominiumLabel(){
            if (localStorage.getItem("condominium") != null) {
                this.condominiumSelectedInfo = JSON.parse(localStorage.getItem("condominium"))
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.condominium-box {
    width: 200px;
    height: auto;
    position: fixed;
    z-index: 4;
    background-color: white;
    border-radius: 16px;
    box-shadow: -4px 1px 15px 0px #0000001a;
    margin-top: @height-menu-desktop;
    right: 425px;

    .box-header{
        display: flex;
        align-items: baseline;
        padding: 15px 0 0 15px;

        img {
            height: 24px;
            width: 24px;
            cursor: pointer;
        }

        label {
            margin-left: 23px;
            font-size: 12px;
        }
    }

    h3 {
        padding: 25px 20px;
        font-size: 14px;
        text-align: center;
    }

    .btn {
        width: 125px;
        background-color: @green;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: white;
        padding: 13px 25px;
        text-align: center;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:  0 37px 25px 37px;
        cursor: pointer;
    }  

    &::after {
        content: '';
        position: fixed;
        top: calc(@height-menu-desktop ~'-' 14px);
        background-color: white;
        width: 28px;
        height: 28px;
        transform: rotate(45deg);
        right: 458px;
        border-bottom: 0;
        border-right: 0;
        box-shadow: -10px -10px 19px -5px #0000001a;
    }

    @media (max-width: 768px) {
        margin-top: @height-menu-mobile;
        right: 60px;

        &::after {
            top: calc(@height-menu-mobile ~'-' 14px);
            right: 95px;
        }
    }
}


</style>