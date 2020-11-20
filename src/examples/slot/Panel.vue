<template>
    <div class="panel">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="body">
            <slot></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style lang="less">
    .panel{
        
    }
    .body{

    }
    .footer{

    }
</style>