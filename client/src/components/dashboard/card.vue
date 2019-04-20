<template>
    <ev-container class="blue">
            <h6 class="m-b-20"><b>Usuários cadastrados</b></h6>
            <h2 class="d-flex mt-3 mb-3">
                <i class="fas fa-users mr-auto"></i>
                <span>20</span>
            </h2>
            <p class="d-flex">
                <span class="mr-auto">Ultimo usuário cadastrado</span> 
                <span><b>Joãozinho da silva</b></span>
            </p>
    </ev-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card{

    color: #fff;
    &.blue{
        background: linear-gradient(45deg, #4099ff, #73b4ff);
    }

   
}
</style>
