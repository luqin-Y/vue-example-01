<template>
    <div class="wrapper">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>